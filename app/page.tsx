import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Jarvis moment</h1>
      <Image className="img" src="/image.png" width={200} height={200} alt="jarvis"/>
    </div>
  )
}
