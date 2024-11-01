/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Blog-Website",
    description:
      "A user-friendly blog website with seamless login and registration, allowing users to create and share posts effortlessly. It includes an engaging About section, an interactive Contact page, and easy navigation for exploring posts.",
    url: "https://blog-with-sheetal.vercel.app/",
  },
  {
    title: "Weather-App",
    description:
      "A weather app that provides real-time updates on temperature, humidity, and conditions for cities worldwide through a simple search.",
    url: "https://react-weather-app-sheetal.vercel.app/",
  },
  {
    title: "Algo-Visualizer",
    description:
      "Algo-Visualizer is an interactive tool for visualizing algorithms, making it easier to understand their step-by-step processes through animations.",
    url: "https://algorithm-visualizer-sheetal.vercel.app/",
  },
  {
    title: "Notes App",
    description:
      "A simple and intuitive notes app designed to help you organize your thoughts, tasks, and ideas with ease. Featuring a user-friendly interface and quick access to your notes anytime, anywhere.",
    url: "https://react-notes-app-sheetal.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
