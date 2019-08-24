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