//Variables

//It's a free API, just get your own...
const auth = "75bfe391";
let queryTerm = "";
const queryURLBase = "https://www.omdbapi.com/?apikey=" + auth;

//Functions
function runQuery(queryURL) {

    $.ajax({url: queryURL, method: "GET"})
        .done(function(data){
            
            //Loop over however many ratings there are
            for (var i = 0; i < data.Ratings.length; i++) {

                const value = data.Ratings[i];  

                //Append a div to the Rating Section of the HTML
                let ratingSection = $('<div>');
                ratingSection.addClass('well');
                ratingSection.attr('id', 'rating-' + i);
                $('#ratingSection').append(ratingSection);

                $('#rating-' + i).append("<p class='rate-source'>" + value.Source + "</p>" + "<p class='rate-actual'>" + value.Value + "</p>" );
            }

            $('#ratingSection').append("<img src=" + data.Poster + ">");
        })
}

//Methods - function calls
$('#searchBtn').on('click', function(){
    $('#ratingSection').html('');
    queryTerm = $('#search').val().trim();
    console.log(queryTerm);

    let newSearch = queryURLBase + "&t=" + queryTerm
    
    runQuery(newSearch);
    return false;
})