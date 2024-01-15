export default function Resume() {
  return (
    <div className="resume-box">
      <div className="resume">
        <h1>My skills so far</h1>
        <h3>Frontend</h3>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
        </ul>
        <h3>Backend</h3>
        <ul>
          <li>Node Js</li>
          <li>Express Js</li>
          <li>MySQL</li>
          <li>Mongo Db</li>
          <li>React js</li>
        </ul>
        <a href="resume.pdf" download="resume.pdf"> {/*Downloads resume */}
          Resume
        </a>
      </div>
    </div>
  );
}
