import "./styles.css";
import { home } from "./home"
import { menu } from "./menu"
import { about } from "./about"

const menuButton = document.getElementById("menuButton")
const homeButton = document.getElementById("homeButton")
const aboutButton = document.getElementById("aboutButton")
menuButton.addEventListener("click", menu)
homeButton.addEventListener("click", home)
aboutButton.addEventListener("click", about)
home();