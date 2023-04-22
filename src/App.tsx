import Aos from "aos";
import "aos/dist/aos.css";

import { Header } from "./components/Header";
import { ProfileFacts } from "./components/ProfileFacts";

import "./global.css";
import { Contacts } from "./components/Contacts";
import { Skills } from "./components/Skills";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Header />
      <ProfileFacts />
      <Contacts />
      <Skills />
    </div>
  );
}

export default App;
