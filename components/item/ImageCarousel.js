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
    <Carousel style={{ width: "50vw" }} autoplay>
      {/* <div>
        <Image width={100} src={images[0]} />
      </div>

      <div>
        <Image width={100} src={images[1]} />
      </div>
      <div>
        <Image width={100} src={images[2]} />
      </div>
      <div>
        <Image width={100} src={images[3]} />
      </div> */}

      {images.map((image, i) => {
        return (
          <div key={i}>
            <Image style={{ borderRadius: "20px" }} src={image} />
          </div>
        );
      })}
      {/* <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>
  );
};
