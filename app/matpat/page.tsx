import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Matpat + Hatsune miku</h1>
      <Image className="img" src="/mikupat.jpg" width={200} height={200} alt="matpat"/>
    </div>
  )
}