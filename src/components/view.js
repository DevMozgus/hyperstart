import { h } from "hyperapp"
import html from 'hyperlit'
import { bookCover, editCover } from "./book/bookCover"
import { aboutBook } from "./book/aboutBook"
import nav from "./nav/nav"
import landing from "./landing/landing"
import projects from "./projects/projects"

export const container = (content, name) => {
  return html`
  <div class=${name ? name : ""}>${content}</div>
  `
}

const view = (state) => {
  return html`
  <div class="content">
    <div class="fullpage">
    <header>
      ${nav(state)}
    </header>
    ${landing(state)}
    </div>
    <div class="fullpage book">
    ${aboutBook()}
    <section class="bookContainer">
      ${bookCover(state)}
      ${editCover(state)}
    </section>
    </div>
    ${projects()}
  </div>
  `
}


export default view