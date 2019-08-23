//Loading动画结束
setTimeout(function () {
    Loading.classList.remove('active')
}, 1000)

//给data-x添加offset类
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () { findClosest() }, 1000);

//固定导航栏
window.onscroll = function (xxxxx) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findClosest()
}
function findClosest() {
    //根据页面位置高亮导航栏
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    specialTags[minIndex].classList.remove('offset')//离窗口顶部最近的元素移除offset
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highLight')
    }
    li.classList.add('highLight')
}

//选择导航栏时的动画
let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        let li = x.currentTarget
        li.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        let li = x.currentTarget
        li.classList.remove('active')
    }
}

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
        let s = targetTop - currentTop
        var t = Math.abs((s / 100) * 300)
        if (t > 500) { t = 500 }
        var coords = { y: currentTop };
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start();
        //window.scrollTo(0, top - 80)
    }
}

//初始化Swiper
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  })
  /*
portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
}*/