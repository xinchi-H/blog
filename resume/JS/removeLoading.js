!function () {
  var view = document.querySelector('#Loading')
  var controller = function (view) {
    //Loading动画结束
    setTimeout(function () {
      view.classList.remove('active')
    }, 1000)
  }
  controller.call(null, view)
}.call()


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
