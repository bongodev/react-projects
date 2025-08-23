import { useState } from 'react';
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

export default function ProductForm({ open, onOpenChange }) {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    stockQuantity: 0,
  });
  const productMutation = useProductMutation();

  const handleOnChange = ({ name, value }) => {
    setProduct({ ...product, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await productMutation.mutateAsync(product);
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent>
        <form className="mx-auto w-full max-w-sm" onSubmit={handleFormSubmit}>
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
                id="name"
                name="name"
                placeholder="Enter product name"
                onChange={(e) =>
                  handleOnChange({ name: e.target.name, value: e.target.value })
                }
                required
                value={product.name}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                min="0"
                onChange={(e) =>
                  handleOnChange({
                    name: e.target.name,
                    value: parseFloat(e.target.value),
                  })
                }
                value={product.price}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter product description"
                onChange={(e) =>
                  handleOnChange({ name: e.target.name, value: e.target.value })
                }
                value={product.description}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input
                type="number"
                id="stockQuantity"
                name="stockQuantity"
                placeholder="Enter stock quantity"
                min="0"
                onChange={(e) =>
                  handleOnChange({
                    name: e.target.name,
                    value: parseInt(e.target.value, 10),
                  })
                }
                value={product.stockQuantity}
              />
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
