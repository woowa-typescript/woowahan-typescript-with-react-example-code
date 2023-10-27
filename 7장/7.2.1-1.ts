import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useMonitoringHistory() {
  const dispatch = useDispatch();
  // 전역 Store 상태(RootState)에서 필요한 데이터만 가져온다
  const searchState = useSelector(
    (state: RootState) => state.monitoringHistory.searchState
  );
  // history 내역을 검색하는 함수, 검색 조건이 바뀌면 상태를 갱신하고 API를 호출한다
  const getHistoryList = async (
    newState: Partial<MonitoringHistorySearchState>
  ) => {
    const newSearchState = { ...searchState, ...newState };
    dispatch(monitoringHistorySlice.actions.changeSearchState(newSearchState));
    const response = await getHistories(newSearchState); // 비동기 API 호출하기 dispatch(monitoringHistorySlice.actions.fetchData(response));
  };

  return { searchState, getHistoryList };
}
