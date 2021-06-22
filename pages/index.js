import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import Landing from "../components/Landing";
import Link from "next/link";

export default function Home() {
  const { Title, Text } = Typography;
  return (
    <div
      align="center"
      style={{
        background: "#F8FAF8",
        height: "100vh",
        paddingTop: "10vh",
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
          <Button
            type="default"
            style={{
              background: "#FFBA00",
              borderRadius: "10px",
              fontSize: "24px",
              height: "40px",
              width: "100px",
            }}
          >
            Shop
          </Button>
        </Link>
      </Space>
    </div>
  );
}
