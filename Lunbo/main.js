var allButtons = $('#buttons > button')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -480
        $(images).css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(index)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click')

var alarm = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 2000)

$('.window').on('mouseenter', function () {
    window.clearInterval(alarm)
})
$('.window').on('mouseleave', function () {
    alarm = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 2000)
})