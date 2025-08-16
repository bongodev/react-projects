import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/ui/components/drawer";
import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import { Label } from "@/ui/components/label";
import { Textarea } from "@/ui/components/textarea";

export default function ProductForm({ open, onOpenChange }) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add New Product</DrawerTitle>
            <DrawerDescription>
              Fill in the details to add a new product to your inventory
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" name="name" placeholder="Enter product name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter product description"
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
                />
              </div>
            </form>
          </div>
          <DrawerFooter>
            <Button type="submit">Add Product</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
