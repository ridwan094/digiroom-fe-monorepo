import React from 'react';

export default function SelectCategory({ items, block = false }) {
  const containerClassName = block ? 'w-full' : 'w-[48%]';
  return (
    <div className={containerClassName}>
      <label
        htmlFor="underline_select"
        className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
      >
        Category
      </label>
      <select
        id="underline_select"
        placeholder="Please Insert Here"
        className="py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400] w-full text-sm  bg-[#f5f5f5] border-0 border-b-2 border-[#bdbcbc] placeholder-gray80  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option selected>Please Insert Here</option>
        {items.map((data, _i) => {
          return (
            <option value={data.value} key={_i}>
              {data.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
