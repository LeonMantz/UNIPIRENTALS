"use client";

import { Select, SelectItem } from "@nextui-org/select";
import React, { useEffect, useState } from "react";

export default function Filters({
  listings,
  filteredListings,
  setFilteredListings,
  category_temp,
  type_temp,
}) {
  const [type, setType] = React.useState(
    new Set([type_temp.toLowerCase()]) || ""
  );

  const [category, setCategory] = React.useState(
    new Set([category_temp.toLowerCase()]) || ""
  );

  const type_options = ["Buy", "Rent"];
  const categories = ["House", "Commercial", "Land"];

  useEffect(() => {
    let templist = listings;

    templist = templist.filter((listing) =>
      type.has(listing.type.toLowerCase())
    );

    if (category.size !== 0) {
      templist = templist.filter(
        (listing) =>
          listing.propertyMainCategory &&
          category.has(listing.propertyMainCategory.toLowerCase())
      );
    }

    setFilteredListings(templist);
  }, [category, type]);

  return (
    <>
      <div className="w-full pt-6 h-24 flex justify-center shadow-sm pb-6">
        <div className="w-full h-full flex justify-between items-center pl-4 pr-4">
          <div className="flex justify-start w-full gap-6">
            <Select
              label="Type"
              className="max-w-52"
              variant="bordered"
              color="primary"
              selectedKeys={type}
              onSelectionChange={setType}
            >
              {type_options.map((ttype) => (
                <SelectItem
                  key={ttype.toLowerCase()}
                  value={ttype.toLowerCase()}
                >
                  {ttype}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Category"
              className="max-w-52"
              variant="bordered"
              color="primary"
              selectedKeys={category}
              onSelectionChange={setCategory}
            >
              {categories.map((tcategory) => (
                <SelectItem key={tcategory.toLowerCase()}>
                  {tcategory}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}




