import { h, text } from "hyperapp"
import html from 'hyperlit'
import { generateTitle, generateImage } from "./bookActions"
import "./book.css"

export const bookCover = (props) => {
  return html`
  <div class="bookContent">
    <div class="topbar"/>
    <h3><i>This Is A Totally Legit Book Stop Asking Questions</i></h3>
    <img src=${props.currentImage.image} />
    <h3 id="essential"><i>Essential</i></h3>
    <h2>${props.currentTitle}</h2>
    <h3 id="oreilly">O'REALLY</h3>
  </div>
  `
}

export const editCover = (props) => {
  return html`
  <div class="editBook">
    <button onclick=${generateTitle}>Random Title</button>
    <button onclick=${generateImage}>Random Image</button>
    <div class="inputs">
    <div class="editing">
    <label>Edit Title:</label>
    <input oninput=${generateTitle} type="text" value=${props.currentTitle}/>
    </div>
    <div class="editing">
    <label>Change Image:</label>
    <select  onchange=${generateImage}>
    ${
      props.images.map((image, index) => {
        return html`
          <option key=${index} value=${index}>${image.title}</option>
        `
      })
    }
    </select>
    </div>
    </div>

  </div>
  `
}

