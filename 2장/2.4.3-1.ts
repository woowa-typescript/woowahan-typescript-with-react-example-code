const getCartList = async (cartId: number[]) => {
  const res = await CartApi.GET_CART_LIST(cartId);
  return res.getData();
};

getCartList([]); // (O) 빈 배열도 가능하다
getCartList([1001]); // (O)
getCartList([1001, 1002, 1003]); // (O) number 타입 원소 몇 개가 들어와도 상관없다
getCartList([1001, "1002"]); // (X) ‘1002’는 string 타입이므로 불가하다
