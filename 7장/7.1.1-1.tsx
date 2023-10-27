import React, { useEffect, useState } from "react";

const CartBadge: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://api.baemin.com/cart")
      .then((response) => response.json())
      .then(({ cartItem }) => {
        setCartCount(cartItem.length);
      });
  }, []);

  return <>{/*  cartCount 상태를 이용하여 컴포넌트 렌더링 */}</>;
};
