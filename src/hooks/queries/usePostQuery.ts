import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Post } from "../../types/blog";

export const usePostQuery = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const { data } = await api.get<Post>(`/posts/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
