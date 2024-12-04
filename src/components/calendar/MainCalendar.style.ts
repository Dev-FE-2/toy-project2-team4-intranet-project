import styled from 'styled-components';

export const Container = styled.div`
  .rbc-month-view {
    border: none;
  }

  .rbc-month-header {
    .rbc-header {
      padding: 0.2rem 0;
      font-size: 1.2rem;
      background: var(--color-gray-200);

      &:first-child {
        color: #e8343f;
        background: #ffeeef;
      }
    }
  }

  .rbc-month-row {
    .rbc-row-content {
      .rbc-date-cell {
        &:first-child {
          color: #e8343f;
        }
      }
    }
  }

  .rbc-row-bg {
    right: 0;

    .rbc-off-range-bg {
      background: var(--color-gray-100);
    }
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1rem;
`;

export const CalendarHeaderInner = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 0.2rem;
    font-size: 0;
  }
`;

export const NowMonthLabel = styled.span`
  width: 12.2rem;
  font-size: var(--font-xl);
  font-weight: 700;
`;

export const TodayButton = styled.button`
  padding: 0.4rem 0.8rem;
  background: var(--color-main);
  color: var(--color-white);
  border-radius: var(--radius-base);
`;