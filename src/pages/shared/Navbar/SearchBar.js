import React from "react";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="container  flex justify-center items-center pl-2">
          <div className="relative">
            <form>
              <input
                type="text"
                id="search"
                className="h-10 w-60 pr-8 pl-5 rounded-full z-0 focus:shadow text-gray-500 bg-gray-200 focus:outline-none dark:bg-gray-600"
                placeholder="Search Tweet"
              />
              <button type="submit" className="absolute top-3 right-3">
                <Icon
                  icon="ic:round-search"
                  width="25"
                  className="text-gray-500"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
