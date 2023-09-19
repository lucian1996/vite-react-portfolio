import Fireflies from "../components/interface/fireflies";
import Navbar from "../components/interface/navbar";
import { useState, useEffect } from "react"; // Import useEffect

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Use useEffect to add a delay before setting isVisible to true
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for 1 second (adjust as needed)
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);


  return (
    <>
      <div className={`home-layout ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <Navbar />
        <button onClick={toggleVisibility}>Toggle</button>
        <Fireflies />
      </div>
    </>
  );
}
