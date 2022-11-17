import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>Título do about this Project</h1>
        <p>parágrafo sobre este projeto</p>
        <p>Version:1.0</p>
        <p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
