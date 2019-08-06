$(clickMe).on('click', function (e) {
    if ($("#popover").is(":hidden")) {
        $(popover).show()
    } else {
        $(popover).hide()
    }

    setTimeout(function () {
        $(document).one('click', function () {
            $(popover).hide()
        })
    }, 0)
})

$(wrapper).on('click', function (e) {
    e.stopPropagation()
})
