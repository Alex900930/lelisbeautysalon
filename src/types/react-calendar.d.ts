declare module 'react-calendar' {
  import { ComponentType } from 'react';
  
  export interface CalendarProps {
    onChange?: (value: Date | Date[]) => void;
    value?: Date | Date[];
    minDate?: Date;
    maxDate?: Date;
    className?: string;
    locale?: string;
    [key: string]: string;
  }

  const Calendar: ComponentType<CalendarProps>;
  export default Calendar;
} 