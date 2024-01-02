import { useQuery } from "@tanstack/react-query";
import { getOrder, getOrders } from ".";

const useGetOrdersQuery = () =>
  useQuery({ queryKey: ["get-orders"], queryFn: () => getOrders() });
const useGetOrderQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["get-order", id],
    queryFn: () => getOrder(id!),
    enabled: !!id,
  });
export { useGetOrdersQuery, useGetOrderQuery };
