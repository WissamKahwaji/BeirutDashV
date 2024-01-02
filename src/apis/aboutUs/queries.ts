import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAboutUsInfo, updateAboutUsInfo } from ".";
import { AboutUsInfo } from "./type";
import { toast } from "react-toastify";

const useGetAboutUsInfoQuery = () =>
  useQuery({ queryKey: ["about-us-info"], queryFn: () => getAboutUsInfo() });
const useUpdateAboutUsInfoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-about-us-info"],
    mutationFn: (payload: AboutUsInfo) => updateAboutUsInfo(payload),
    onSuccess() {
      toast.success("update contact info successfully.");
      queryClient.invalidateQueries({ queryKey: ["about-us-in"] });
    },
    onError() {
      toast.error("failed to update contact info");
    },
  });
};
export { useGetAboutUsInfoQuery, useUpdateAboutUsInfoMutation };
