import { h, text } from "hyperapp"
import html from 'hyperlit'

import blog from "../../img/blog.png"
import gql from "../../img/graphql.png"
import homepage from "../../img/preview.png"
import "./projects.css"

const projects = () => {
  return html`
  <div id="work" class="projects">
    <h1>Previous Work</h1>
    <section class="project project1">
    <h2>React & Redux: Blog</h2>
    <img src=${blog} />
    <div class="links">
    <a href="https://mernblog.nicolaurlicic.com" >Live Example</a>
    <a href="https://github.com/DevMozgus/blogFullstack" >Source Code</a>
    </div>
    </section>
    <section class="project project2">
    <h2>GraphQL & React: Book Log</h2>
    <img src=${gql} />
    <div class="links">
    <a href="https://github.com/DevMozgus/merngBooks" >Source Code</a>
    </div>
    </section>
    <section class="project project3">
    <h2>Personal Site</h2>
    <img src=${homepage} />
    <div class="links">
    <a href="https://www.nicolaurlicic.com" >Live Example</a>
    <a href="https://github.com/DevMozgus/homepage" >Source Code</a>
    </div>
    </section>
    <section class="contact">
    <h3>Still haven't had enough?</h3>
    <a href=" mailto:nurlicic@gmail.com?subject=Welcome%20To%20Unsourced%20Digital&body=Look%2C%20I%20know%20you're%20busy%2C%20so%20I've%20pre-written%20the%20acceptance%20email%20for%20you%20-%20just%20click%20the%20button%20below%0D%0A%0D%0A%0D%0AHey%20Nicola%2C%0D%0A%0D%0Alove%20what%20you've%20done.%20Let's%20meet%20for%20some%20coffee.%0D%0A%0D%0ABest%20Regards%2C%0D%0AUnsourced%20Digital%0D%0A%0D%0A%0D%0AP.S.%20We're%20not%20suing%20you%20for%20copyright%20infringement " >Contact Me</a>
    </section>
  </div>
  `
}

export default projects