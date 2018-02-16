$('#campground-search').on('input', function() {
    var search = $(this).serialize();
    if(search === "search=") {
        search = "all"
    }
    $.get('/campgrounds?' + search, function(data) {
        $('#campground-grid').html('');
        data.forEach(function(campground) {
            $('#campground-grid').append(`
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card">
                        <img class="card-img-top" src="${ campground.image }" alt="${ campground.name }">
                        <div class="card-body">
                            <h4 class="card-title">${ campground.name }</h4>
                            <p class="card-text">${campground.description.length > 50 ? campground.description.substring(0, 50) + "...": campground.description}</p>
                            <a href="/campgrounds/${campground._id}" class="btn btn-primary">More Info</a>
                        </div>
                    </div>
                </div>
            `);
        });
    });
});

$('#campground-search').submit(function(event) {
    event.preventDefault();
});