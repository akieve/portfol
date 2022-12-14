import "./App.scss";
import { Navbar } from "./components";
import { Work, Skills, Header, About, Footer } from "./container";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
