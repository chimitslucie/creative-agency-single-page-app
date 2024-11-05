import "./Style/Main.scss";
import TopBar from "./Components/TopBar";
import Hero from "./Components/Hero";
import ImageText from "./Components/ImageText";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Hero />
      <ImageText />
    </div>
  );
}

export default App;
