import { useQuery } from "@tanstack/react-query";
import { getLogo } from ".";

const useGetLogo = () =>
  useQuery({ queryKey: ["get-logo"], queryFn: () => getLogo() });
export { useGetLogo };
