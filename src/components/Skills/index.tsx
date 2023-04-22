import { projects } from "../../data";
import "./index.css";

export function Skills() {
  return (
    <div className="container">
      <div className="content-skills">
        <button>Portifolio</button>
        <div>Skills</div>
      </div>

      <div>
        <ul className="content-grid">
          {projects.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
