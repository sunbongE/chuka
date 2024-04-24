import DatePicker from "react-datepicker";
import "@styles/DatePicker.css";
import { forwardRef, useState } from "react";
import * as c from "@components/calendar/Calendar.styled";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale"; //한국어 설정

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <c.Input
      className="custom-input"
      onClick={onClick}
      value={value}
      ref={ref}
      placeholder="축하할 날짜를 선택해주세요."
    />
  )
);

const index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && <div className="overlay" />}
      <DatePicker
        customInput={<CustomInput onClick={handleOpen} />}
        selected={selectedDate}
        onChange={(date: Date) => {
          setSelectedDate(date);
          handleClose();
        }}
        onCalendarOpen={handleOpen}
        onCalendarClose={handleClose}
        minDate={new Date()}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        shouldCloseOnSelect
        showIcon
        toggleCalendarOnIconClick
        disabledKeyboardNavigation
      />
    </>
  );
};

export default index;
