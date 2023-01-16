let sidebarOpen = false;

function windowResizeAction() {
    document.documentElement.style.setProperty('--bodyWidth', `${window.innerWidth}px`);
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    windowResizeAction();
    sideBarAction();
    window.addEventListener("resize", windowResizeAction);
    let spinner = document.getElementById('spinner');
    for (let i = 1; i < 10; i++) {
        const spinnerItem = document.createElement('div');
        spinnerItem.classList.add(`loader__item`);
        spinnerItem.classList.add(`loader__item${i}`);
        spinnerItem.style.setProperty('transform', `rotateY(${18*i}deg)`);
        spinnerItem.style.setProperty('opacity', `0`);
        spinnerItem.style.setProperty('border-color', i % 2 === 0 ? '#f7b54b white #f7b54b white' : 'white #f7b54b white #f7b54b');
        spinner.appendChild(spinnerItem);
    }
    // spinner.classList.remove('main__loader__hided');
    setTimeout(() => document.getElementById('spinner').remove(), 5500);
});

function sideBarAction() {
    const btn = document.getElementById('sidebar_action');
    const sidebar = document.getElementById('sidebar');
    let mouseInSideBar = false;
    sidebar.addEventListener('mouseenter', (e) => mouseInSideBar = true);
    sidebar.addEventListener('mouseleave', (e) => mouseInSideBar = false);
    btn.addEventListener("click", (e) => {
        sidebarOpen = !sidebarOpen;
        sidebarOpen ? btn.classList.add('main__menu-action_open') : btn.classList.remove('main__menu-action_open');
        sidebarOpen ? sidebar.classList.add('main__col-placeholder__opened') : sidebar.classList.remove('main__col-placeholder__opened');
    });
    btn.addEventListener('focusout', (e) => {
        if (mouseInSideBar) {
            btn.focus();
        } else {
            sidebarOpen = false;
            sidebar.classList.remove('main__col-placeholder__opened');
            btn.classList.remove('main__menu-action_open');
        }
    });
}

