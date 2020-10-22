import image0 from "../img/0.png"
import image1 from "../img/1.png"
import image2 from "../img/2.png"
import image3 from "../img/3.png"
import image4 from "../img/4.png"

const init = {
  images: [
    {
      image: image0,
      title: "Pig"
    },
    {
      image: image1,
      title: "Dodo"
    },
    {
      image: image2,
      title: "Dog"
    },
    {
      image: image3,
      title: "Ostrich"
    },
    {
      image: image4,
      title: "Goat"
    },
  ],
  titles: [
    "Learning Hyperapp",
    "Making Much Work",
    "Creating Such App",
    "Programming Big Unique",
    "Creating Cool Stuff",
    "Replacing AI With PHP",
    "Hacking A Toaster",
    "CTRL C, THEN CTRL V"
  ],
  currentImage: {
    image: image0,
    title: "Pig"
  },
  currentTitle: "Creating Cool Stuff",
  sike: "Sign In",
  activeCard: 1
}

export default init