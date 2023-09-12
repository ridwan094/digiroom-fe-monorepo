import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarToday } from 'react-icons/md';

const CustomInput = forwardRef((props, ref) => {
  return (
    <div className={`border-b-2 border-[#bdbcbc] bg-[#f8f8f8] p-3 mt-3 ${props.customClass}`}>
      <label onClick={props.onClick} ref={ref} className="placeholder-gray80">
        {props.value || props.placeholder}
      </label>
      {props.showIcon && (
        <MdCalendarToday
          onClick={props.onClick}
          style={{ position: 'absolute', top: '28px', right: '16px' }}
        />
      )}
    </div>
  );
});

const CustomDatePicker = ({ onChange, selected, id, customClass, showIcon, placeholderText }) => {
  return (
    <DatePicker
      id={id}
      className={`w-full my-3 border-b-2 border-gray100 placeholder-gray80 text-[16px] py-[12px] !px-3 mt-[8px]  text-reliableBlack90 font-[400] ${customClass}`}
      showIcon={showIcon}
      placeholderText={placeholderText}
      onChange={onChange}
      selected={selected}
      showTimeInput
      customInput={<CustomInput customClass={customClass} showIcon={showIcon} />}
      dateFormat="dd/MM/yyyy hh:mm:ss"
      customStyles={{
        dateIcon: {
          width: '40px',
          height: '40px',
        },
      }}
    />
  );
};

export default CustomDatePicker;
