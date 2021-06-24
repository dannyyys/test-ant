import { Button, Space, DatePicker, Card, Row, Col, Typography } from "antd";

import { Header } from "../../components/layout/Header";
import { ImageCarousel } from "../../components/item/ImageCarousel";

function ItemSlug({ itemDetails }) {
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
          <ImageCarousel images={itemDetails.images} />
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
  );
}

export default ItemSlug;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.COSMIC_SHOP}`);
  const data = await response.json();
  const slugs = data.objects.map((item) => item.slug);

  const paths = slugs.map((slug) => ({ params: { itemSlug: slug } }));

  {
    /*
    fallback: blocking (preferred)
    When a request is made to a page that hasn’t been generated,
    Next.js will server-render the page on the first request.
    Future requests will serve the static file from the cache.
  */
  }
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const query = `%7B%22slug%22%3A%22${params.itemSlug}%22%7D`;
  const response = await fetch(`${process.env.COSMIC_SHOPITEMS}${query}`);
  const data = await response.json();

  if (data.objects == null) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
  const metadata = data.objects[0].metadata;
  const itemDetails = {
    images: metadata.images.map((imageObj) => imageObj.image.imgix_url),
    name: metadata.name,
    description: metadata.description,
    slug: params.itemSlug,
    variants: metadata.variants,
    value: metadata.value,
  };

  return { props: { itemDetails } };
}
