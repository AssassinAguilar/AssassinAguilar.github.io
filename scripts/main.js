import { $, $$, handleSideNav } from "./functions.js";

$("#menuBtn").onclick = () => handleSideNav (false);

onclick = e => e.target.id !== "sidenav" && e.target.id !== "menuBtn" ? handleSideNav (true) : handleSideNav (false);