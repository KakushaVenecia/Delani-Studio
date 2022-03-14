$('.image').click(function (event) {
    let container = $(event.target.parent()).attr("id")
    $(container +"> p").toggleClass("hidden-content")
})

