import type { ILoadMoreProps } from '@/types/infinite-scroll';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';
import SalaryItem from './SalaryItem';

import * as S from './SalaryList.styles';

// 1. 인피니티 스크롤 컴포넌트와 Array형태 데이터를 map 함수로 렌더링
// 2. 핸들러 관리
const SalaryList = ({ isLoading, onLoadMore }: ILoadMoreProps) => {
  const listItem = [
    {
      salarySn: 'salary_0',
      title: '8월 급여',
      paymentDate: new Date(),
      totalAmount: 100000,
    },
  ];
  return (
    <S.ListContainer>
      <S.TitleBox>
        <S.H2>급여 내역</S.H2>
      </S.TitleBox>
      <S.Hr />
      <InfiniteScroll isLoading={isLoading} onLoadMore={onLoadMore}>
        {listItem.map(({ salarySn, title, paymentDate, totalAmount }) => (
          <SalaryItem
            key={salarySn}
            title={title}
            date={paymentDate}
            amount={totalAmount}
          />
        ))}
      </InfiniteScroll>
    </S.ListContainer>
  );
};

export default SalaryList;
