window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressBar = document.getElementById('progressBar');

    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
};