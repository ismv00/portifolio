import { projects } from "../../data";
import "./index.css";

export function Skills() {
  return (
    <div className="container">
      <div data-aos="fade-up">
        <div className="content-skills">
          <button>Portifolio</button>
        </div>

        <div>
          <ul className="content-grid" data-aos-delay="400">
            {projects.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} target="_blank">
                    <img src={item.image} alt={item.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
