import "../styles/theme.scss";

/* ----------------------------------------------------------------------
| 📦 Modules - dynamically imported modules
|--------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-module]").forEach((el) => {
        const name = el.getAttribute("data-module");
        const moduleInit = require(`./modules/${name}`).default;
        // console.log(name);
        moduleInit({ el });
    });
});