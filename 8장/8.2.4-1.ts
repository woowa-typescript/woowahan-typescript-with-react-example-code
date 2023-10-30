type EventHandler<Event extends React.SyntheticEvent> = (
  e: Event
) => void | null;
type ChangeEventHandler = EventHandler<ChangeEvent<HTMLSelectElement>>;

const eventHandler1: GlobalEventHandlers["onchange"] = (e) => {
  e.target; // 일반 Event는 target이 없음
};

const eventHandler2: ChangeEventHandler = (e) => {
  e.target; // 리액트 이벤트(합성 이벤트)는 target이 있음
};
