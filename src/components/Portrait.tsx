import Image from "next/image";
import portrait from "../../public/images/EthanVillalovozPic-optimized.jpg";

export default function Portrait() {
  return <span className="portfolio-portrait">
    <Image src={portrait} placeholder="blur" alt="Portrait of Ethan Villalovoz" width={112} height={112} sizes="(max-width: 599px) 64px, 72px" unoptimized priority className="portfolio-profile-image" />
  </span>;
}
