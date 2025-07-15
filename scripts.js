let scrollProgress = document.getElementById('scroll_progress');

function getScrollProgress() {
    let pageHeight = document.body.scrollHeight - window.innerHeight;
    let percentProgress = (window.scrollY / pageHeight) * 100;
    scrollProgress.style.width = percentProgress + '%';
}

window.onscroll = getScrollProgress;