import React from 'react';
import { Controller } from 'react-hook-form';

export default function SelectCategory({ register, control, items, block = false }) {
  const containerClassName = block ? 'w-full' : 'w-[48%]';

  return (
    <div className={containerClassName}>
      <label
        htmlFor="category"
        className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
      >
        Category
      </label>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <select
            id="category"
            className="py-[12px] px-[14px] mt-[8px] text-[#777777] font-[400] w-full text-sm bg-[#f5f5f5] border-0 border-b-2 border-[#bdbcbc] placeholder-gray80 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
          >
            <option value="">Please Insert Here</option>
            {items.map((data, _i) => (
              <option
                value={JSON.stringify({
                  ...data.value,
                  // contentCategoryType: data.value.name,
                })}
                key={_i}
              >
                {data.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}
