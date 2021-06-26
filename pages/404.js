import { Space, Typography } from "antd";
import NotFoundAnimation from "../components/NotFoundAnimation";
import Link from "next/link";
import { BigButton } from "../components/button/BigButton";

export default function Custom404() {
  const { Title, Text } = Typography;
  return (
    <div
      align="center"
      style={{
        background: "#F8FAF8",
        height: "100vh",
        paddingTop: "15vh",
      }}
    >
      <Space size="large" direction="vertical" align="center">
        <Title level={1} style={{ marginBottom: "10px" }}>
          TheAroidHouse
        </Title>
        <NotFoundAnimation />
        <Text style={{ fontSize: "24px" }}>
          We can't find the page you are trying to visit
        </Text>
        <Link href="/shop" passHref>
          <BigButton name={"Shop now"} />
        </Link>
      </Space>
    </div>
  );
}
