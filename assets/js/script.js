let navBar = document.querySelector('.navlink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
}

/*scroll dan navbar sticky */
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);
}