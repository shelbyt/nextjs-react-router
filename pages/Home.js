import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shelby Thomas</title>
        <meta
          name="description"
          content="Shelby Thomas's personal site and blog"
        />
      </Helmet>
      <h1>Home</h1>
    </>
  );
}
