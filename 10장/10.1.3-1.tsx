// 현재 구현된 것 - TabGroup 컴포넌트뿐 아니라 모든 Tab 컴포넌트에도 type prop을 전달
<TabGroup type='sub'>
  <Tab name='텝 레이블 1' type='sub'>
    <div>123</div>
  </Tab>
  <Tab name='텝 레이블 2' type='sub'>
    <div>123</div>
  </Tab>
</TabGroup>
// 원하는 것 - TabGroup 컴포넌트에만 전달
<TabGroup type='sub'>
  <Tab name='텝 레이블 1'>
   <div>123</div>
  </Tab>
  <Tab name='텝 레이블 2'>
    <div>123</div>
  </Tab>
</TabGroup>