import React, { useState, useEffect } from 'react';
import { Modal, Checkbox, Label, Button } from 'flowbite-react';

export default function ModalFilter({ isOpen, onClose, filterData, onClickFilter, activeFilters }) {
  const [checkboxStates, setCheckboxStates] = useState([]);

  const calculateIndex = (sectionIndex, itemIndex) => {
    let cumulativeIndex = 0;
    for (let i = 0; i < sectionIndex; i++) {
      cumulativeIndex += filterData[i].items.length;
    }
    return cumulativeIndex + itemIndex;
  };

  const handleCheckboxChange = (filterItem, sectionIndex, itemIndex) => {
    const index = calculateIndex(sectionIndex, itemIndex);
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  const handleFilter = () => {
    const selectedFilters = checkboxStates.reduce((filters, state, index) => {
      if (state) {
        const filterItem = getItemAtIndex(index);
        filters.push({
          column: filterItem.column,
          key: filterItem.key,
          label: filterItem.label,
        });
      }
      return filters;
    }, []);

    onClickFilter(selectedFilters);
    onClose();
  };

  const getItemAtIndex = (index) => {
    let cumulativeIndex = 0;
    for (let sectionIndex = 0; sectionIndex < filterData.length; sectionIndex++) {
      const itemsCount = filterData[sectionIndex].items.length;
      if (index < cumulativeIndex + itemsCount) {
        const itemIndex = index - cumulativeIndex;
        return filterData[sectionIndex].items[itemIndex];
      }
      cumulativeIndex += itemsCount;
    }
    return null;
  };

  return (
    <div>
      <Modal dismissible show={isOpen} onClose={onClose} size="lg">
        <Modal.Header>Filter</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            {filterData.map((filterSection, sectionIndex) => (
              <div key={filterSection.title}>
                <div>{filterSection.title}</div>
                <div className="flex flex-row gap-4 mt-2 mb-2 ">
                  {filterSection.items.map((filterItem, itemIndex) => (
                    <div className="flex flex-row items-center gap-1" key={filterItem.key}>
                      <Checkbox
                        class="border-black bg-gray-200 checked:bg-black checked:focus:ring-black focus:ring-black"
                        id={filterItem.key}
                        checked={checkboxStates[calculateIndex(sectionIndex, itemIndex)]}
                        onChange={() => handleCheckboxChange(filterItem, sectionIndex, itemIndex)}
                      />
                      <Label>{filterItem.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-2">
              <Button
                class="flex justify-center bg-black text-white uppercase w-full"
                onClick={handleFilter}
              >
                Apply
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
