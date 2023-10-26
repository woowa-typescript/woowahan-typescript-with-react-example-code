type BannerProps = {
  autoplay: boolean;
};

const Banner: React.FC<BannerProps> = ({ autoplay }) => {
  const isAutoPlayPause = useRef(false);
  
  if (autoplay) {
    // keepAutoPlay 같이 isAutoPlay가 변하자마자 사용해야 할 때 쓸 수 있다
    const keepAutoPlay = !touchPoints[0] && !isAutoPlayPause.current;

    // ...
  }
  return (
    <>
      {autoplay && (
        <button
          aria-label="자동 재생 일시 정지"
          // isAutoPlayPause는 사실 렌더링에는 영향을 미치지 않고 로직에만 영향을 주므로 상태
          로 사용해서 불필요한 렌더링을 유발할 필요가 없다
          onClick={() => { isAutoPlayPause.current = true }}
        />
      )}
    </>
  );
};

const Label: React.FC<LabelProps> = ({ value }) => {
  useEffect(() => {
    // value.name과 value.id를 사용해서 작업한다
  }, [value]);
  
  // ...
};