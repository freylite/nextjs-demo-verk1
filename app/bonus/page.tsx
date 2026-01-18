import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Blóm</h1>
      <Image className="img" src="/flowers.jpg" width={200} height={200} alt="Blóm"/>
    </div>
  )
}