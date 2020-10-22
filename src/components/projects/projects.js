import { h, text } from "hyperapp"
import html from 'hyperlit'

import blog from "../../img/blog.png"
import gql from "../../img/graphql.png"
import homepage from "../../img/preview.png"
import "./projects.css"

const projects = () => {
  return html`
  <div class="projects">
    <h1>Previous Work</h1>
    <section class="project project1">
    <h2>React & Redux: Blog</h2>
    <img src=${blog} />
    <div class="links">
    <a>Live Example</a>
    <a>Source Code</a>
    </div>
    </section>
    <section class="project project2">
    <h2>Graphql & React: Book Log</h2>
    <img src=${gql} />
    <div class="links">
    <a>Live Example</a>
    <a>Source Code</a>
    </div>
    </section>
    <section class="project project3">
    <h2>Personal Site</h2>
    <img src=${homepage} />
    <div class="links">
    <a>Live Example</a>
    <a>Source Code</a>
    </div>
    </section>
    <section class="contact">
    <h3>Still haven't had enough?</h3>
    <a>Contact Me</a>
    </section>
  </div>
  `
}

export default projects