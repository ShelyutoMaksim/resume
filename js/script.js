let sidebarOpen = false;

function windowResizeAction() {
    document.documentElement.style.setProperty('--bodyWidth', `${window.innerWidth}px`);
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    windowResizeAction();
    sideBarAction();
    window.addEventListener("resize", windowResizeAction);
});

function sideBarAction(e) {
    const btn = document.getElementById('sidebar_action');
    if (btn) {
        btn.addEventListener("click", (e) => {
            sidebarOpen = !sidebarOpen;
            sidebarOpen ? btn.classList.add('main__menu-action_open') : btn.classList.remove('main__menu-action_open');


        });
        btn.addEventListener('focusout', (e) => {
            sidebarOpen = false;

        });
    }
}

