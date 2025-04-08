import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useCategoriesQuery } from "../../../hooks/queries";
import Button from "../button/Button";
import { useBlogData } from "../../../hooks/useBlogData";

const InputSearch = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const { data: categories = [] } = useCategoriesQuery();

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const { handleCategoryChange } = useBlogData();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    setIsModalOpen(true);
  };

  const handleCategoryClick = (categoryId: string) => {
    closeSearch();
    handleCategoryChange([categoryId]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  const handleSearchClick = () => {
    if (isInputVisible) {
      closeSearch();
    } else {
      setIsInputVisible(true);
      setIsModalOpen(true);
    }
  };

  const closeSearch = () => {
    setIsModalOpen(false);
    setIsInputVisible(false);
    setSearchValue("");
    handleCategoryChange([]);
  };

  return (
    <div className="input-search">
      <div
        ref={inputRef}
        className={`input-search__container ${
          isInputVisible ? "input-search__container--visible" : ""
        }`}
      >
        <input
          type="text"
          className="input-search__input"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Button className="input-search__button" onClick={handleSearchClick}>
          <img
            src={isInputVisible ? "/icons/close.svg" : "/icons/search.svg"}
            alt={isInputVisible ? "Close" : "Search"}
          />
        </Button>

        {isModalOpen && filteredCategories.length > 0 && (
          <div ref={modalRef} className="input-search__modal">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="input-search__option"
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
