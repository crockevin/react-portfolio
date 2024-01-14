const projects = [ // List of my projects
  {
    id: 1,
    name: "Weather Forecast",
    imgPath: "/Images/repos/clouds.jpg",
    link: "https://crockevin.github.io/weather-app/",
    codeUsed: "Html, css, jquery",
  },
  {
    id: 2,
    name: "Tech blog",
    imgPath: "/Images/repos/tech-blog.png",
    link: "https://ucf-tech-blog-af225d7f8a74.herokuapp.com/",
    codeUsed: "Html, css, js, express, node js, mysql",
  },
  {
    id: 3,
    name: "Get fitter",
    imgPath: "/Images/repos/dumbbell.png",
    link: "https://get-fitter-e98ef4b65ec3.herokuapp.com/",
    codeUsed: "Html, css, js, express, node js, mysql",
  },
  {
    id: 4,
    name: "Text editor PWA",
    imgPath: "/Images/repos/text-editor.png",
    link: "https://just-another-text-editor-s2dc.onrender.com/",
    codeUsed: "Html, css, js, express, node js, PWA",
  },
  {
    id: 5,
    name: "GameHub",
    imgPath: "/Images/repos/GameHub.png",
    link: "https://crockevin.github.io/Game-Hub/",
    codeUsed: "Html, css, jquery",
  },
  {
    id: 6,
    name: "Employee Tracker",
    imgPath: "/Images/repos/employee.png",
    link: "https://github.com/crockevin/Employee-tracker",
    codeUsed: "Html, css, js, express, node js, mysql",
  },
];

export default function Repos() {
  return (
    <div className="repos">
      {projects.map((item) => (// maps through the repos and displays the values
        <div key={item.id} className="repo">
          {item.name}
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.imgPath} alt={item.codeUsed}/>
            <br/>
            Visit here
          </a>
        </div>
      ))}
    </div>
  );
}
