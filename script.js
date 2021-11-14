"use strict";
const getDarkTheme = () => {
    const html = document.documentElement;
    return html.classList.toggle("dark");
};
const getDarkThemeLink = () => {
    const gmail = document.querySelectorAll(".gmail-pro");
    gmail.forEach((el) => {
        return el.classList.toggle("gmail");
    });
};
const getDarkThemeProgressBar = () => {
    const theme = document.querySelectorAll(".theme-pro");
    theme.forEach((el) => {
        return el.classList.toggle("theme");
    });
};

let title = document.querySelectorAll(".title");
title.forEach((el) => {
    el.addEventListener("click", () => {
        getDarkTheme();
        getDarkThemeLink();
        getDarkThemeProgressBar();
    });
});
