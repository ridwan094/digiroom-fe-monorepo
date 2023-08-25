import React, { useState, useEffect } from 'react';
import { Modal, Checkbox, Label, Button } from 'flowbite-react';

export default function ModalFilter({ isOpen, onClose, filterData, onClickFilter }) {
  const [checkboxStates, setCheckboxStates] = useState([]);

  const toggleCheckbox = (filter) => {
    setCheckboxStates((prevState) => {
      const existingFilterIndex = prevState.findIndex(
        (item) => item.column === filter.column && item.key === filter.key
      );
      if (existingFilterIndex !== -1) {
        return prevState.filter((_, index) => index !== existingFilterIndex);
      } else {
        return [...prevState, { column: filter.column, key: filter.key }];
      }
    });
  };

  return (
    <div>
      <Modal dismissible show={isOpen} onClose={onClose} size="lg">
        <Modal.Header>Filter</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            {filterData.map((filterSection) => (
              <div key={filterSection.title}>
                <div>{filterSection.title}</div>
                <div className="flex flex-row gap-4 mt-2 mb-2 ">
                  {filterSection.items.map((filterItem) => (
                    <div className="flex flex-row items-center gap-1" key={filterItem.key}>
                      <Checkbox
                        class="border-black bg-gray-200 checked:bg-black checked:focus:ring-black focus:ring-black"
                        id={filterItem.key}
                        onChange={() => toggleCheckbox(filterItem)}
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
                onClick={() => onClickFilter(checkboxStates)}
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
