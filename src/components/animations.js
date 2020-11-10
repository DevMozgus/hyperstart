import {gsap} from "gsap";

const animations = () => {
  const tl = gsap.timeline();
  console.log(document.querySelector("#app"))
  tl.fromTo("#landing", { height: "0%" }, { duration: 1, height: "100%" })
}

export default animations