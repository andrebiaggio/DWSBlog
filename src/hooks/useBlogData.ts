import { useEffect } from "react";
import { usePostsQuery, useAuthorsQuery, useCategoriesQuery } from "./queries";
import { useBlogStore } from "../store/blogStore";

export const useBlogData = () => {
  // Get store actions
  const {
    setPosts,
    setAuthors,
    setCategories,
    setIsLoading,
    setCategoryIds,
    setAuthorIds,
    filters,
  } = useBlogStore();

  // Queries
  const { data: posts, isLoading: isLoadingPosts } = usePostsQuery();

  const { data: authors, isLoading: isLoadingAuthors } = useAuthorsQuery();

  const { data: categories, isLoading: isLoadingCategories } =
    useCategoriesQuery();

  // Update store when data changes
  useEffect(() => {
    if (posts) setPosts(posts);
  }, [posts, setPosts]);

  useEffect(() => {
    if (authors) setAuthors(authors);
  }, [authors, setAuthors]);

  useEffect(() => {
    if (categories) setCategories(categories);
  }, [categories, setCategories]);

  // Update loading state
  useEffect(() => {
    const isLoading = isLoadingPosts || isLoadingAuthors || isLoadingCategories;
    setIsLoading(isLoading);
  }, [isLoadingPosts, isLoadingAuthors, isLoadingCategories, setIsLoading]);

  // Handlers
  const handleCategoryChange = (selectedIds: string[]) => {
    setCategoryIds(selectedIds);
  };

  const handleAuthorChange = (selectedIds: string[]) => {
    setAuthorIds(selectedIds);
  };

  // Helpers
  const getAuthorInfo = (authorId: string) => {
    return authors?.find((author) => author.id === authorId);
  };

  return {
    isLoading: isLoadingPosts || isLoadingAuthors || isLoadingCategories,
    posts,
    authors,
    categories,
    filters,
    handleCategoryChange,
    handleAuthorChange,
    getAuthorInfo,
  };
};
