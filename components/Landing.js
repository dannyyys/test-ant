import Lottie from "react-lottie-player";
import landingLottie from "../public/landing_lottie.json";

export default function Landing(props) {
  return (
    <div marginTop={props.marginTop}>
      <Lottie
        loop
        animationData={landingLottie}
        play
        style={{ width: 350, height: 350 }}
      />
    </div>
  );
}
