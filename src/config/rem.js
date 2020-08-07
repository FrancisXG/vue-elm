(function () {
    function resize() {
        // 设计稿100px相当于1rem，750px -->7.5rem-->各种屏幕的100%宽度
        var baseFontSize = 100;
        // 设计稿宽度
        var designWidth = 750;
        // 屏幕宽度
        var width = window.innerWidth;
        var currentFontSize = (width / designWidth) * baseFontSize
        document.querySelector('html').style.fontSize = currentFontSize + 'px'

    }
    window.onresize = function () {
        resize()
    }
    document.addEventListener('DOMContentLoaded', resize)
}())