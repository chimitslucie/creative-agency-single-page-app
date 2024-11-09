import "./Style/Main.scss";
import TopBar from "./Components/TopBar";
import Hero from "./Components/Hero";
import ImageText from "./Components/ImageText";
import TitleText from "./Components/TitleText";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Hero />
      <ImageText />
      <TitleText />
    </div>
  );
}

export default App;
