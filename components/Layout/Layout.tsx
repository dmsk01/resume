import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";

interface ILayout {
  children: React.ReactNode;
  keywords?: string;
}

function Layout({ children, keywords }: ILayout) {
  return (
    <>
      <Head>
        <meta name="keywords" content={"developer portfolio " + keywords}></meta>
        <title>home page</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
