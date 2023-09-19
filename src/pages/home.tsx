import Fireflies from "../components/interface/fireflies";
import Navbar from "../components/interface/navbar";

export default function Home() {
  // const isMobile = GetIsMobile();

  return (
    <>
      <div className="home-layout" >
        <Navbar />
        <Fireflies />
      </div>
    </>
  );
}
