import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Category } from "../../types/blog";

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get<Category[]>("/categories");
      return data;
    },
  });
};
