import Lottie from "react-lottie-player";
import errorLottie from "../public/404_lottie.json";

export default function NotFoundAnimation(props) {
  return (
    <div marginTop={props.marginTop}>
      <Lottie
        loop
        animationData={errorLottie}
        play
        style={{ width: 350, height: 350 }}
      />
    </div>
  );
}
