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
  name: z.string().min(2, 'Product name is required'),
  price: z
    .number()
    .min(0, 'Price must be a positive number')
    .max(10000000, 'Price seems too high'),
  description: z.string().optional(),
  stockQuantity: z.number().min(0, 'Stock quantity must be a positive number'),
});

const defaultValues = {
  name: '',
  price: 0,
  description: '',
  stockQuantity: 0,
};

const FormFieldError = ({ message }) => (
  <p className="text-sm text-red-600">{message}</p>
);

export default function ProductForm({ open, onOpenChange }) {
  const productMutation = useProductMutation();
  const from = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues,
  });

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent>
        <form
          className="mx-auto w-full max-w-sm"
          onSubmit={from.handleSubmit(async (payload) => {
            await productMutation.mutateAsync(payload);
            onOpenChange(false);
            from.reset();
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
                {...from.register('name')}
              />
              {from.formState.errors.name && (
                <FormFieldError message={from.formState.errors.name.message} />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                placeholder="Enter price"
                {...from.register('price', { valueAsNumber: true })}
              />
              {from.formState.errors.price && (
                <FormFieldError message={from.formState.errors.price.message} />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Enter product description"
                {...from.register('description')}
              />
              {from.formState.errors.description && (
                <FormFieldError
                  message={from.formState.errors.description.message}
                />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input
                placeholder="Enter stock quantity"
                {...from.register('stockQuantity', { valueAsNumber: true })}
              />
              {from.formState.errors.stockQuantity && (
                <FormFieldError
                  message={from.formState.errors.stockQuantity.message}
                />
              )}
            </div>
          </div>
          <DrawerFooter>
            <Button type="submit">Add Product</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
