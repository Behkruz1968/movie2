import { memo } from "react";
import { SearchOutlined } from "@ant-design/icons"; 

const SearchPage = () => {
  return (
    <div className="SearchPage flex justify-center items-center  bg-black mt-20">
      <div className="w-full max-w-md px-4 relative">
        <input
          type="text"
          placeholder="Search movies..."
            className="w-full py-3 pl-10 pr-4 rounded-xl bg-[#111111] text-white placeholder-gray-400 focus:outline-none transition"
        />
        <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 !text-red-500 text-lg ml-5 " />
      </div>
    </div>
  );
};

export default memo(SearchPage);
