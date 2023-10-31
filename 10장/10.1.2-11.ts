// 날짜 범위 기준 - 오늘, 1주일, 1개월
type DateRangePreset = 'TODAY' | 'LAST_WEEK' | 'LAST_MONTH';
type ReviewRatingString = '1' | '2' | '3' | '4' | '5';
interface ReviewFilter {
// 리뷰 날짜 필터링
startDate: Date;
endDate: Date;
dateRangePreset: Nullable<DateRangePreset>;
// 키워드 필터링
keywords: string[];
// 리뷰 점수 필터링
ratings: ReviewRatingString[];
// ... 이외 기타 필터링 옵션
}
// Review List Query State
interface State {
filter: ReviewFilter;
page: string;
size: number;
}