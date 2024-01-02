import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import React from "react";
import { DeleteProductTypeDialogProps } from "./type";
import { TransitionProps } from "@mui/material/transitions";
import { useDeleteProductTypeMutation } from "@/apis/products/queries";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const DeleteProductTypeDialog = ({
  open,
  onClose,
  productType,
}: DeleteProductTypeDialogProps) => {
  const { mutate: deleteProduct } = useDeleteProductTypeMutation();
  const handleDeleteProduct = () => {
    deleteProduct(productType);
  };
  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
      <DialogContent>
        <DialogContentText>{`are you sour you want to delete ${productType.name}`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>cancel</Button>
        <Button variant="contained" onClick={handleDeleteProduct}>
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProductTypeDialog;
