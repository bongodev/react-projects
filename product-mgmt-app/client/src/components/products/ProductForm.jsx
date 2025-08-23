import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/ui/components/drawer';
import { Button } from '@/ui/components/button';
import { Input } from '@/ui/components/input';
import { Label } from '@/ui/components/label';
import { Textarea } from '@/ui/components/textarea';
import { useProductMutation } from '@/api/queries';

const ProductFormSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(2, 'Product name is required'),
  price: z
    .number()
    .min(1, 'Price must be greater than zero')
    .max(10000000, 'Price seems too high'),
  description: z.string().optional(),
  stockQuantity: z.number().min(0, 'Stock quantity must be a positive number'),
});

const FormFieldError = ({ message }) => (
  <p className="text-sm text-red-600">{message}</p>
);

export default function ProductForm({ open, onOpenChange, initialData }) {
  const productMutation = useProductMutation();
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: initialData,
    values: initialData,
  });

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent>
        <form
          className="mx-auto w-full max-w-sm"
          onSubmit={form.handleSubmit(async (payload) => {
            productMutation.mutateAsync(payload).then(() => {
              onOpenChange(false);
              form.reset();
            });
          })}
        >
          <DrawerHeader>
            <DrawerTitle>Add New Product</DrawerTitle>
            <DrawerDescription>
              Fill in the details to add a new product to your inventory
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                placeholder="Enter product name"
                {...form.register('name')}
              />
              {form.formState.errors.name && (
                <FormFieldError message={form.formState.errors.name.message} />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                placeholder="Enter price"
                type="number"
                {...form.register('price', { valueAsNumber: true })}
              />
              {form.formState.errors.price && (
                <FormFieldError message={form.formState.errors.price.message} />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Enter product description"
                {...form.register('description')}
              />
              {form.formState.errors.description && (
                <FormFieldError
                  message={form.formState.errors.description.message}
                />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input
                placeholder="Enter stock quantity"
                type="number"
                {...form.register('stockQuantity', { valueAsNumber: true })}
              />
              {form.formState.errors.stockQuantity && (
                <FormFieldError
                  message={form.formState.errors.stockQuantity.message}
                />
              )}
            </div>
          </div>
          <DrawerFooter>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Add Product
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
