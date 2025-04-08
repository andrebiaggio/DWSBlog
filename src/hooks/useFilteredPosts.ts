import { useMemo } from "react";
import { Post, BlogFilters } from "../types/blog";

export const useFilteredPosts = (
  posts: Post[] | undefined,
  filters: BlogFilters
) => {
  return useMemo(() => {
    if (!posts) return [];

    let filteredPosts = posts;

    if (filters.categoryIds?.length) {
      const categoryIdsSet = new Set(filters.categoryIds);
      filteredPosts = filteredPosts.filter((post) =>
        post.categories?.some((category) => categoryIdsSet.has(category.id))
      );
    }

    if (filters.authorIds?.length) {
      const authorIdsSet = new Set(filters.authorIds);
      filteredPosts = filteredPosts.filter((post) =>
        authorIdsSet.has(post.author.id)
      );
    }

    return filteredPosts;
  }, [posts, filters]);
};
