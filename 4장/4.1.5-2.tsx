function MainMenu() {
  // Menu 타입을 원소로 갖는 배열
  const menuList: Menu[] = [{name: “1인분”, image: “1인분.png”}, ...]
  return (
    <ul>
      {menuList.map((menu) => (
        <li>
          <img src= {menu.image} />
          <span>{menu.name}</span>
        </li>
      ))}
    </ul>
  )
}