class Items {
    constructor () {
        this.admins = ["erictu32@gmail.com", "brightmind111@gmail.com"];
        this.loadStylesheet();
        this.renderItems();
    }

    saveScrollPosition () {
        window.sessionStorage.setItem('scrollPos', window.scrollY + "");
    }

    loadScrollPosition () {
        const scrollY = parseInt(window.sessionStorage.getItem('scrollPos'));
        window.scrollTo(0, scrollY);
    }

    loadStylesheet () {
        if (window.innerWidth <= 600)
            $("#indexCSS_id").attr("href", "mobile-bright-minds-tutoring.css");
    }

    renderItems() {
        this.renderNavButtons();
    }

    renderNavButtons() {
        const navButtons = document.getElementsByClassName("nav");
        const navButtonIds = ["home_id", "programs_id", "parents_id", "contact_id", "blog_id"];
        for(let i = 0; i < navButtonIds.length; i++) {
            navButtons[i] // navButtonIds[] must have same order as nav bar
                .addEventListener('click', this.scrollIntoView.bind(this, navButtonIds[i]));
        }
    }

    scrollIntoView (el_id) {
        const element = document.querySelector(`#${el_id}`)
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}

const items = new Items()


