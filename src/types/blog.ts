export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  author: Author;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogFilters {
  search: string;
  categoryIds: string[];
  authorIds: string[];
}
