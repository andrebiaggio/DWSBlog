import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Post } from "../../types/blog";

export const usePostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api.get<Post[]>("/posts", {
        params: {
          search: undefined,
        },
      });
      return data;
    },
  });
};
