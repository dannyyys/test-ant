import React, { useContext } from "react";

import { Badge, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

//import { CartContext } from "../../context/CartContext";

const MotionBox = motion(Row);

const CartButton = React.forwardRef(function Cart({ onClick, href }, ref) {
  //const [items] = useContext(CartContext);

  //   const cartItemsCount = items.reduce((accumulator, cartItem) => {
  //     return accumulator + cartItem.quantity;
  //   }, 0);

  return (
    <MotionBox whileHover={{ scale: 1.1 }}>
      <Badge count={5}>
        <ShoppingCartOutlined style={{ fontSize: "24px" }} />
      </Badge>
    </MotionBox>
  );
});

export default CartButton;
