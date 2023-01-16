let sidebarOpen = false;
let btn;
let sidebar;
let prevPhotoBtn;
let nextPhotoBtn;
let photoWrapper;
let photoIndex = 0;
let photoLinks = [
    "assets/pictures/IMG_5870.jpg",
    "assets/pictures/0L8A2457.jpg",
    "assets/pictures/0L8A2430.jpg"
];

function windowResizeAction() {
    document.documentElement.style.setProperty('--bodyWidth', `${window.innerWidth}px`);
}

function sideBarAction() {

    let mouseInSideBar = false;
    sidebar.addEventListener('mouseenter', (e) => mouseInSideBar = true);
    sidebar.addEventListener('mouseleave', (e) => mouseInSideBar = false);
    btn.addEventListener("click", (e) => toggleSideBar());
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

function toggleSideBar() {
    sidebarOpen = !sidebarOpen;
    sidebarOpen ? btn.classList.add('main__menu-action_open') : btn.classList.remove('main__menu-action_open');
    sidebarOpen ? sidebar.classList.add('main__col-placeholder__opened') : sidebar.classList.remove('main__col-placeholder__opened');
    const navItems = document.getElementsByClassName('main__col-placeholder__nav-item');
    for (let navItem of navItems) {
        sidebarOpen ? navItem.classList.remove('main__col-placeholder__nav-item--hidden') : navItem.classList.add('main__col-placeholder__nav-item--hidden');
    }
}

function copyPhoneNumber() {
    navigator.clipboard.writeText('+375291234567');
    alert('Номер телефона скопирован');
}

function slidePhoto(prev) {
    if (prev) {
        photoIndex = photoIndex === 0 ? photoLinks.length - 1 : photoIndex - 1;
    }
    if (!prev) {
        photoIndex = photoIndex === photoLinks.length - 1 ? 0 : photoIndex + 1;
    }
    photoWrapper.src = photoLinks[photoIndex];

}

window.addEventListener("load", (event) => {
    btn = document.getElementById('sidebar_action');
    sidebar = document.getElementById('sidebar');
    photoWrapper = document.getElementById('photo-wrapper');
    prevPhotoBtn = document.getElementById('gallery-prev');
    prevPhotoBtn.addEventListener("click", (e) => slidePhoto(false));
    nextPhotoBtn = document.getElementById('gallery-next');
    nextPhotoBtn.addEventListener("click", (e) => slidePhoto(true));
    windowResizeAction();
    sideBarAction();
    window.addEventListener("resize", windowResizeAction);
    let spinner = document.getElementById('spinner');
    for (let i = 1; i < 10; i++) {
        const spinnerItem = document.createElement('div');
        spinnerItem.classList.add(`loader__item`);
        spinnerItem.classList.add(`loader__item${i}`);
        spinnerItem.style.setProperty('transform', `rotateY(${18 * i}deg)`);
        spinnerItem.style.setProperty('opacity', `0`);
        spinnerItem.style.setProperty('border-color', i % 2 === 0 ? '#f7b54b white #f7b54b white' : 'white #f7b54b white #f7b54b');
        spinner.appendChild(spinnerItem);
    }
    spinner.classList.remove('main__loader__hided');
    setTimeout(() => document.getElementById('spinner').remove(), 5500);
    const navItems = document.getElementsByClassName('dynamic-link');
    for (let navItem of navItems) {
        navItem.addEventListener('click', (e) => {
            e.preventDefault();
            if (sidebarOpen) {
                toggleSideBar();
            }
            document.querySelector(navItem.getAttribute('data-link'))
                .scrollIntoView({behavior: 'smooth', block: 'start'});
        });
    }
});



