import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import Landing from "../components/Landing";
import Link from "next/link";
import { BigButton } from "../components/button/BigButton";

export default function Home() {
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
        <Landing />
        <Text style={{ fontSize: "24px" }}>
          We try to make gardening simple
        </Text>
        <Link href="/shop" passHref>
          <BigButton name={"Shop now"} />
        </Link>
      </Space>
    </div>
  );
}
