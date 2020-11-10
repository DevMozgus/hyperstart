import { h, app } from "hyperapp"

import init from "./components/state"
import view from "./components/view"
import "./index.css"
import animations from "./components/animations"

const node = document.querySelector("#app")

app({init, view, node})

animations()