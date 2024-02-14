import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteOrder, getOrder, getOrders } from ".";
import { Order as TOrder } from "@/components/items/dialogs/deleteOrder/type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useGetOrdersQuery = () =>
  useQuery({ queryKey: ["get-orders"], queryFn: () => getOrders() });
const useGetOrderQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["get-order", id],
    queryFn: () => getOrder(id!),
    enabled: !!id,
  });

const useDeleteOrderMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["delete-order"],
    mutationFn: ({ id }: TOrder) => {
      return deleteOrder(id);
    },
    onSuccess(data, variable) {
      toast.success(`delete order successfully.`);
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
      navigate("/orders", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to delete order}`);
    },
  });
};

export { useGetOrdersQuery, useGetOrderQuery, useDeleteOrderMutation };
