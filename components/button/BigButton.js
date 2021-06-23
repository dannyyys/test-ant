import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export const BigButton = React.forwardRef(function BigButton(props, ref) {
  return (
    <span href={props.href} ref={ref}>
      <MotionButton
        type="default"
        style={{
          background: "#FFBA00",
          borderRadius: "10px",
          fontSize: "24px",
          height: "40px",

          outline: "none",
          color: "#F8FAF8",
        }}
        // backgroundColor="buttonBackground"
        // textColor="background"
        // fontSize="lg"
        // width={["50vw", "25vw"]}
        whileHover={{
          backgroundColor: "#CC9400",
          scale: 1.1,
        }}
        // padding="7"
        // borderRadius="5"
        // whileHover={{ scale: 1.1 }}
        // fontWeight="bold"
        {...props}
      >
        {props.name}
      </MotionButton>
    </span>
  );
});
