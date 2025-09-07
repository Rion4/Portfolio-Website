import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Rion4/A-blockchain-based-federated-learning-system-for-energy-demand-prediction/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Rion4/A-blockchain-based-federated-learning-system-for-energy-demand-prediction/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>PowerGrid AI</h2>
          </a>
          <p>
            Developed a blockchain based federated learning system that predicts
            future energy consumption.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Rion4/RemitaDAO-Adromeda"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Rion4/RemitaDAO-Adromeda"
            target="_blank"
            rel="noreferrer"
          >
            <h2>RemitaDAO</h2>
          </a>
          <p>
            Designed, developed, and launched decentralized application designed
            to transform how people send money to their families abroad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
