import { $, handleSideNav } from "./functions.js";
import "./typed.js";

$("#menuBtn").onclick = () => handleSideNav (false);

onclick = e => e.target.id !== "sidenav" && e.target.id !== "menuBtn" ? handleSideNav (true) : handleSideNav (false);