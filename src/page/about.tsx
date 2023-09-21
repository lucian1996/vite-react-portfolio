'use client';
import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
export default function About() {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        About
      </div>
      <Fireflies />
    </div>
  );
}
