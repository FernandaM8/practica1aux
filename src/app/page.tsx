import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Principal from "@/components/Principal";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Principal></Principal>
      <Videos></Videos>
      <Footer></Footer>
    </div>
  );
}
