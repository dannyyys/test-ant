import { Carousel, Image } from "antd";
//import { ItemImage } from "../../components/item/ItemImage";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const ImageCarousel = ({ images }) => {
  return (
    <Carousel style={{ width: "90vw" }} autoplay>
      {images.map((image, i) => {
        return (
          <div key={i}>
            <Image style={{ borderRadius: "20px" }} src={image} />
          </div>
        );
      })}
    </Carousel>
  );
};
