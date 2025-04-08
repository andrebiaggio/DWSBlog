import { DropdownButton, FilterPanel, PostsList } from "../../components/core";
import { useAuthorsQuery, useCategoriesQuery } from "../../hooks/queries";
import { useBlogData } from "../../hooks/useBlogData";

import "./styles.scss";

const Blog = () => {
  const { handleCategoryChange, handleAuthorChange, filters } = useBlogData();
  const { data: categories } = useCategoriesQuery();
  const { data: authors } = useAuthorsQuery();

  return (
    <div className="blog">
      <div className="blog__filters--mobile">
        <DropdownButton
          label="Categories"
          options={categories ?? []}
          selectedOptions={filters.categoryIds}
          onChange={handleCategoryChange}
        />

        <DropdownButton
          label="Authors"
          options={authors ?? []}
          selectedOptions={filters.authorIds}
          onChange={handleAuthorChange}
        />
      </div>

      <div className="blog__header">
        <h1>DWS blog</h1>
      </div>

      <div className="blog__container">
        <div className="blog__filters">
          <div className="blog__filters__container">
            <div className="blog__filters__title">
              <img src="/icons/filter.svg" alt="Filter" />
              Filters
            </div>

            <FilterPanel
              title="Categories"
              options={categories ?? []}
              selectedIds={filters.categoryIds}
              onChange={handleCategoryChange}
            />

            <FilterPanel
              title="Authors"
              options={authors ?? []}
              selectedIds={filters.authorIds}
              onChange={handleAuthorChange}
            />
          </div>
        </div>

        <div className="blog__posts">
          <PostsList />
        </div>
      </div>
    </div>
  );
};

export default Blog;
