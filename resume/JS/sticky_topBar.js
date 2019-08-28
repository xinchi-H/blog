!function () {
    var view = document.querySelector('#topNavBar')
    var controller = function (view) {
        //固定导航栏
        window.addEventListener('scroll', function (x) {
            if (window.scrollY > 0) {
                view.classList.add('sticky')
            } else {
                view.classList.remove('sticky')
            }
        })
    }
    controller.call(null,view)
}.call()