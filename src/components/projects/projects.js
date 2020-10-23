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
    <label>I know you're busy - so I've taken the liberty of pre-writing your email back to me. Just tap the link below, and click send.</label>
    <a href="mailto:nurlicic@gmail.com ?subject=Unsourced%20Digital%20needs%20you&body=Hey%20Nicola%2C%0D%0AWe%20loved%20your%20application%20so%20much%20that%20we%20decided%20to%20not%20even%20spend%20any%20time%20modifying%20this%20email%2C%20and%20clicked%20send.%20Let's%20have%20a%20coffee." >Contact Me</a>
    </section>
  </div>
  `
}

export default projects