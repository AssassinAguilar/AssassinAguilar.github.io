// Basic Functions

const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

// Side Nav

const handleSideNav = isOpened => isOpened ? $("#sidenav").classList.remove("show") : $("#sidenav").classList.add("show");

export { $, $$, handleSideNav }