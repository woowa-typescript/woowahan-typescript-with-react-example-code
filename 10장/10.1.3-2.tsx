import {FC} from 'react';

const TabGroup: FC<TabGroupProps> = (props) => {
  const { type = 'tab', ...otherProps } = useTabGroupState(props);
  /* ... 로직 생략 */
  return (
    <TabGroupContext.Provider value={{ ...otherProps, type }}>
      {/* ... */}
    </TabGroupContext.Provider>
  );
};


const Tab: FC<TabProps> = ({ children, name }) => {
  const { type, ...otherProps } = useTabGroupContext();
  return <>{/* ... */}</>;
};