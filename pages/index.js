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
        padding: "10vh",
      }}
    >
      <Space size="medium" direction="vertical" align="center">
        <Title>TheAroidHouse</Title>
        <Landing />
        <Title level={5}>We try to make gardening simple</Title>
        <Button
          type="default"
          style={{
            background: "#FFBA00",
            borderColor: "",
            borderRadius: "10px",
          }}
        >
          Primary Button
        </Button>
      </Space>
    </div>
  );
}
