export interface SubMenu {
  name: string;
  path: string;
}

export interface MainMenu {
  name: string;
  path?: string;
  subMenus?: SubMenu[];
}

export type MenuItem = MainMenu | SubMenu;
export const menuList: MenuItem[] = [
  {
    name: '계정 관리',
    subMenus: [
      {
        name: '기기 내역 관리',
        path: '/device-history',
      },
      { 
        name: '헬멧 인증 관리',
        path: '/helmet-certification',
      },
    ],
  },
  {
    name: '운행 관리',
    path: '/operation',
  },
  // ...
];