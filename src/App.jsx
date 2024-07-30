import "./App.css";
import Home from "./components/Home page/Home";
import Skills from "./components/key skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile summery/Profile";
import Experience from "./components/Work experience/Experience";
function App() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <Navbar />
        <Home />
        <Profile />
        <Skills />
        <Experience />
      </div>
    </>
  );
}

export default App;
