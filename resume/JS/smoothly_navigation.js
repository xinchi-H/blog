//页面跳转动画
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        //上面四句可以合并为let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTOP
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop //路程
        var t = Math.abs((s / 100) * 300) //时间
        if (t > 500) { t = 500 }
        var coords = { y: currentTop }; //起始位置
        var tween = new TWEEN.Tween(coords) //起始位置
            .to({ y: targetTop }, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start();
        //window.scrollTo(0, top - 80)
    }
}