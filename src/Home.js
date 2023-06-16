import React from "react";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="container">
        <Header />
      <input type="text" placeholder="Search an ingredient" />
    </div>
  );
}
