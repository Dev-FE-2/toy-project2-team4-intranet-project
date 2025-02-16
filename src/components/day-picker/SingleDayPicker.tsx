import { useState, useRef, useEffect } from 'react';

import DatePicker from '@/components/ui/day-picker';
import LabeledBox from '@/components/ui/label/LabeledBox';
import * as S from './SingleDayPicker.styles';
import { formatDate } from '@/utils/formatDate';
import { SingleDayPickerProps } from '@/types/day-picker';

const SingleDayPicker = ({
  id,
  text,
  date,
  onChange,
}: SingleDayPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.Wrapper ref={wrapperRef}>
      <LabeledBox id={id} text={text}>
        <S.StyledContainer>
          <S.DayPickerInput
            value={formatDate(date)}
            readOnly
            onClick={() => setIsOpen(!isOpen)}
          />
          <S.CalendarIcon size={18} />
        </S.StyledContainer>
      </LabeledBox>

      <S.CalendarContainer $isOpen={isOpen}>
        <DatePicker
          mode="single"
          selected={date}
          onSelect={newDate => {
            if (newDate) {
              onChange(newDate);
              setIsOpen(false);
            }
          }}
        />
      </S.CalendarContainer>
    </S.Wrapper>
  );
};

export default SingleDayPicker;
