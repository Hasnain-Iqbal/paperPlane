import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com/css?family=Outfit:200,300,regular,500,600,700,800,900%7CIBM+Plex+Mono:regular%7CIBM+Plex+Serif:200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic%7CGrape+Nuts:regular%7CSriracha:regular" />
      </Helmet>
      <Landing />
    </>
  );
}

