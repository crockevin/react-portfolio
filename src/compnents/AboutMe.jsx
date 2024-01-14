import { useState } from "react";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="infoDump">
        <img src="/Images/pfp.jpg" alt="pfp" />
        <div>
          <p>
            My name is Kevin, I'm studying to be a full stack developer,
            <br />
            in by free time I like to play videogames and work on some
            <br />
            origami
          </p>
        </div>
      </div>
    </div>
  );
}
