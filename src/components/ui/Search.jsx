import React, { useState } from "react";
import { products } from "../../api/products.api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchWord, setSearchWord] = useState("");
  const [active, setActive] = useState(false);
  const [setProductsFind] = useState();

  const navigate = useNavigate();

  const findWordInProducts = (products, word) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].includes(word)) {
        return true;
      }
    }
    return false;
  };

  const handleSearch = (word) => {
    const foundProducts = products.filter((item) => {
      let productName = item.name.split(" ");
      return findWordInProducts(productName, word) === true && item;
    });
    console.log("1", foundProducts);
    setProductsFind(foundProducts);
    if (foundProducts.length > 0) {
      navigate("/search", { state: { list: foundProducts } });
    }
    setSearchWord("");
    setActive(false);
  };
  const handleChange = (e) => {
    setSearchWord(e.target.value);
    setActive(true);
  };

  return (
    <div className="flex mb-1 text-black h-8">
      <input
        type="text"
        className="block w-full px-14 text-pink-700 bg-white focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 rounded-sm"
        placeholder="поиск ..."
        value={searchWord}
        onChange={handleChange}
      />
      <button
        className="px-4 "
        onClick={() => handleSearch(searchWord)}
        disabled={!active ? true : false}
      >
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-full h-full hover:w-5 hover:h-5"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Search;
