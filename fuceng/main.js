$(clickMe).on('click', function (e) {
    $(popover).show()
    setTimeout(function () {
        $(document).one('click', function () {
            $(popover).hide()
        })
    }, 0)
})

$(wrapper).on('click', function (e) {
    e.stopPropagation()
})
