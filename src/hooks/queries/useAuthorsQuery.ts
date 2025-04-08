import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Author } from "../../types/blog";

export const useAuthorsQuery = () => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      const { data } = await api.get<Author[]>("/authors");
      return data;
    },
  });
};
