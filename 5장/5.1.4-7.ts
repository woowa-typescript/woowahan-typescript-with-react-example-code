type UnpackMenuNames<T extends ReadonlyArray<MenuItem>> = T extends
  ReadonlyArray<infer U>
    ? U extends MainMenu
      ? U['subMenus'] extends infer V
        ? V extends ReadonlyArray<SubMenu>
          ? UnpackMenuNames<V>
          : U['name']
        : never
      : U extends SubMenu
      ? U['name']
      : never
    : never;