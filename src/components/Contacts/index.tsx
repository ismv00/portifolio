import { FaDownload } from "react-icons/fa";
import { SendWhatsapp, handleCv } from "../../data";

import "./styles.css";

export function Contacts() {
  return (
    <div className="container">
      <div className="content-buttons" data-aos="fade-up">
        <button onClick={handleCv}>
          Download CV
          <FaDownload className="icon" />
        </button>

        <button onClick={SendWhatsapp}>Contact me</button>
      </div>
    </div>
  );
}
