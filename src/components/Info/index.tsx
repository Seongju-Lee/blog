import Image from "next/image";
import InfoImage from "../../../public/main.png";

function Info() {
  return (
    <Image
      src={InfoImage}
      width={350}
      height={100}
      alt="seongju's blog info text"
    />
  );
}

export default Info;
