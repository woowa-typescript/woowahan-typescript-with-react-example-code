interface RouteBase {
  name: string;
  path: string;
  component: ComponentType;
}

export interface RouteItem {
  name: string;
  path: string;
  component?: ComponentType;
  pages?: RouteBase[];
}

export const routes: RouteItem[] = [
  {
    name: '기기 내역 관리',
    path: '/device-history',
    component: DeviceHistoryPage,
  },
  {
    name: '헬멧 인증 관리',
    path: '/helmet-certification',
  component: HelmetCertificationPage,
  },
  // ...
];