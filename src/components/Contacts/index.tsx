import { FaDownload } from "react-icons/fa";

import "./styles.css";

export function Contacts() {
  return (
    <div className="container">
      <div className="content-buttons" data-aos="fade-up">
        <button>
          Download CV
          <FaDownload className="icon" />
        </button>

        <button>Contact me</button>
      </div>
    </div>
  );
}
