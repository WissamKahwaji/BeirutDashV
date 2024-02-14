import { useDeleteOrderMutation } from "@/apis/orders/queries";
import { DeleteOrderDialogProps } from "./type";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteOrderDialog = ({
  open,
  onClose,
  order,
}: DeleteOrderDialogProps) => {
  const { mutate: deleteOrder } = useDeleteOrderMutation();
  const handleDeleteProduct = () => {
    deleteOrder(order);
  };
  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
      <DialogContent>
        <DialogContentText>{`are you sour you want to delete this order`}</DialogContentText>
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
export default DeleteOrderDialog;
