import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Shadow :3</h1>
      <Image className="img" src="/shadow.JPG" width={200} height={200} alt="shadow"/>
    </div>
  )
}