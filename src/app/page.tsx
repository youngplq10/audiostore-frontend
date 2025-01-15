import Image from "next/image";
import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import Header from "./components/Header";
import Article from "./components/Article";
import MostTrending from "./components/MostTrending";
import Category from "./components/Category";
import MobileAppAd from "./components/MobileAppAd";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <>
      <Header />
      <Article homepage={true} />
      <MostTrending />
      <Category name="Comdy & Humor" />
      <Category name="Biography" />
      <Category name="Science & Fiction" />
      <MobileAppAd />
      <Footer />
    </>
  )
}
