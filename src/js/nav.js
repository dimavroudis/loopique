export default class PrimaryMenu {
    menu;
    burger;
    status;

    constructor(
        menuSelector,
        burgerSelector,
        siteHeaderSelector = ".site-header"
    ) {
        this.menu = document.querySelector(menuSelector);
        this.burger = document.querySelector(burgerSelector);
        this.siteHeader = document.querySelector(siteHeaderSelector);

        if (!this.menu) throw Error("No " + menuSelector + " found");
        if (!this.burger) throw Error("No " + burgerSelector + " found");

        let ariaExpanded = this.burger.getAttribute("aria-expanded");
        if (ariaExpanded && ariaExpanded === "true") this.status = "open";
        else this.status = "closed";

        this.burger.addEventListener("click", (e) => {
            e.preventDefault();
            this.toggleMenu();
        });
    }

    toggleMenu() {
        if (this.status === "closed") {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }

    openMenu() {
        this.menu.style.top = getComputedStyle(document.documentElement).marginTop;
        this.menu.classList.add("open");
        this.burger.setAttribute("aria-expanded", "true");
        this.status = "open";
    }

    closeMenu() {
        this.menu.classList.remove("open");
        this.burger.setAttribute("aria-expanded", "false");
        this.status = "closed";
        document.body.style = "";
        this.siteHeader.style = "";
    }
}
