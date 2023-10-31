export interface MainMenu {
  // ...
  subMenus?: ReadonlyArray<SubMenu>;
}
 
export const menuList = [
  // ...
] as const;
  
interface RouteBase {
  name: PermissionNames;
  path: string;
  component: ComponentType;
}

export type RouteItem =
  | {
    name: string;
    path: string;
    component?: ComponentType;
    pages: RouteBase[];
    }
  | {
    name: PermissionNames;
    path: string;
    component?: ComponentType;
  };