import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Assessment from "./components/Assessment";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Assessment />
      <Footer />
    </div>
  );
}

export default App;