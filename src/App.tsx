import Aos from "aos";
import "aos/dist/aos.css";

import { Header } from "./components/Header";
import { ProfileFacts } from "./components/ProfileFacts";

import "./global.css";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Header />
      <ProfileFacts />
    </div>
  );
}

export default App;
