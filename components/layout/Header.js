import Link from "next/link";
import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";
import CartButton from "../button/CartButton";

const { Title, Text } = Typography;

export const Header = () => {
  return (
    <Row style={{ padding: "5px" }} justify="space-between">
      <Link href="/" passHref>
        <Button style={{ fontSize: "24px", color: "#0C3B2E" }} type="link">
          TheAroidHouse
        </Button>
      </Link>

      <Link href="/cart" passHref>
        <CartButton />
      </Link>
    </Row>
  );
};
