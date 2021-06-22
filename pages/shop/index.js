import Link from "next/link";
import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";
// import { motion } from "framer-motion";

import { Header } from "../../components/layout/Header";

//const MotionBox = motion(Box);

const Shop = ({ shopItems }) => {
  return (
    <div
      style={{
        background: "#F8FAF8",
        height: "100vh",
        padding: "10px",
      }}
      align="center"
    >
      <div style={{ width: "70vw" }}>
        <Col>
          <Header />
          <div
            style={{
              background: "green",
              height: "full",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            hi
          </div>
        </Col>
      </div>
    </div>
    // <Box height="100vh" backgroundColor="background">
    //   <Flex direction="column" height="auto" backgroundColor="background">
    //     <Center>
    //       <Flex direction="column" width={["100vw", "60vw"]}>
    //         <Header />
    //         <Flex
    //           direction={["column", "row"]}
    //           justifyContent="space-around"
    //           flexWrap="wrap"
    //         >
    //           {shopItems.map((item, i) => {
    //             return (
    //               <MotionBox
    //                 key={i}
    //                 marginBottom="4"
    //                 marginX="4"
    //                 whileHover={{ scale: 1.05 }}
    //               >
    //                 <Link href={`/shop/${item.slug}`} passHref>
    //                   <ShopItemCard
    //                     itemName={item.name}
    //                     value={item.value}
    //                     mossImage={item.images[0]}
    //                   />
    //                 </Link>
    //               </MotionBox>
    //             );
    //           })}
    //         </Flex>
    //       </Flex>
    //     </Center>
    //   </Flex>
    // </Box>
  );
};

export default Shop;
