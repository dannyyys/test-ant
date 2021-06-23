import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import Landing from "../components/Landing";
import Link from "next/link";
import { BigButton } from "../components/button/BigButton";
import { ImageCarousel } from "../components/item/ImageCarousel";

export default function Home({ testimonialImages }) {
  const { Title, Text } = Typography;
  return (
    <div
      align="center"
      style={{
        background: "#F8FAF8",
        height: "auto",
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
        <ImageCarousel images={testimonialImages} />
      </Space>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.cosmicjs.com/v2/buckets/danny-testing/objects/60c764902169a900086ca935?pretty=true&read_key=83i3GSGW9cqnXYFv3gp9ijljgUcNIjB7lXEp2JIVYaykZTpuB7&props=metadata,"
  );
  const data = await response.json();
  const cosmicImages = data.object.metadata.images;

  let testimonialImages = [];

  cosmicImages.map((img) => {
    testimonialImages.push(img.image.imgix_url);
  });
  console.log(testimonialImages);

  return {
    props: {
      testimonialImages,
    },
    // incrementally regenerate every 2 hours
    // seconds * minutes * hours
    revalidate: 60 * 60 * 2,
  };
}
