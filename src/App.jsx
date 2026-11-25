import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />

      <footer>
        <p>© 2026 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;