import { linksSocialMedia } from "../../data";

import "./style.css";

export function Header() {
  return (
    <div className="container">
      <div className="profile-info" data-aos="fade-down">
        <img
          src="https://avatars.githubusercontent.com/u/62908769?v=4"
          alt="Minha foto, tirada do perfil do github"
        />
        <div className="profile-info-text">
          <h1>Igor S. Menezes</h1>
          <p>Software Enginner</p>

          <ul className="social-media">
            {linksSocialMedia.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
