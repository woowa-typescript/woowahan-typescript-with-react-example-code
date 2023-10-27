const fetchMenu = createAsyncThunk(
  FETCH_MENU_REQUEST,
  async ({ shopId, menuId }: FetchMenu) => {
    try {
      const data = await api.fetchMenu(shopId, menuId);
      return data;
    } catch (error) {
      setApiCallError({ error });
    }
  }
);
