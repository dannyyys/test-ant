import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import Landing from "../components/Landing";

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
        <Title>TheAroidHouse</Title>
        <Landing />
        <Text>We try to make gardening simple</Text>
        <Button
          type="default"
          style={{
            background: "#FFBA00",

            borderRadius: "10px",
          }}
        >
          Primary Button
        </Button>
      </Space>
    </div>
  );
}
