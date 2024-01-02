export type DeleteProductTypeDialogProps = {
  open: boolean;
  onClose: () => void;
  productType: ProductType;
};
export type ProductType = {
  id: string;
  name: string;
};
