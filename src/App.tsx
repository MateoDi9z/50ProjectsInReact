import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const projects = [
  {
    id: 1,
    name: "Expanding Cards",
    url: "/expanding-cards",
  },
];

function App() {
  return (
    <div className="App w-fit mx-auto">
      <div className="flex w-full justify-around">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="mt-5">My 50 Projects</h1>

      <main className="mt-5">
        <ul className="projectList">
          {projects.map((project) => (
            <li style={{ display: "flex" }}>
              #{project.id} -{" "}
              <a href={project.url} style={{ paddingLeft: "4px" }}>
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
