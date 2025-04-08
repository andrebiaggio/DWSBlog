import { create } from "zustand";
import { BlogFilters, Post, Author, Category } from "../types/blog";

interface BlogStore {
  // Lists
  posts: Post[];
  authors: Author[];
  categories: Category[];

  // Filters
  filters: BlogFilters;

  // Loading states
  isLoading: boolean;

  // Actions
  setPosts: (posts: Post[]) => void;
  setAuthors: (authors: Author[]) => void;
  setCategories: (categories: Category[]) => void;
  setIsLoading: (isLoading: boolean) => void;

  // Filter actions
  setSearch: (search: string) => void;
  setCategoryIds: (categoryIds: string[]) => void;
  setAuthorIds: (authorIds: string[]) => void;
  resetFilters: () => void;
}

const initialFilters: BlogFilters = {
  search: "",
  categoryIds: [],
  authorIds: [],
};

export const useBlogStore = create<BlogStore>((set) => ({
  // Initial state
  posts: [],
  authors: [],
  categories: [],
  filters: initialFilters,
  isLoading: false,

  // List setters
  setPosts: (posts) => set({ posts }),
  setAuthors: (authors) => set({ authors }),
  setCategories: (categories) => set({ categories }),
  setIsLoading: (isLoading) => set({ isLoading }),

  // Filter setters
  setSearch: (search) =>
    set((state) => ({
      filters: { ...state.filters, search },
    })),
  setCategoryIds: (categoryIds) =>
    set((state) => ({
      filters: { ...state.filters, categoryIds },
    })),
  setAuthorIds: (authorIds) =>
    set((state) => ({
      filters: { ...state.filters, authorIds },
    })),
  resetFilters: () => set({ filters: initialFilters }),
}));
