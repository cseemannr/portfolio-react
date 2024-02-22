import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Heading from "./Heading";

export default function Layout() {
  return (
    <>
      <Header />
      <Heading />
      <Outlet />
      <Footer />
    </>
  );
}
