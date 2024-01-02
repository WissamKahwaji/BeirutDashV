export type DeleteProductDialogProps = {
  open: boolean;
  onClose: () => void;
  product: Product;
};
export type Product = {
  id: string;
  name: string;
};
