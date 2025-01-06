import Image from "next/image";
import styles from "./page.module.css";
import { HomeContent } from "./components/HomeContent";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <HomeContent/>
    </div>
  );
}
