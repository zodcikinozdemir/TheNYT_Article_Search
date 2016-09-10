// api key    5aa79c02ea5840d28aa684eed86fe61c


// variables for the inputs

var searchTerm = "oil";
var beginDate = "20000101";
var endDate = "20011231";
var numResults = 


// event lister for the search button
    $("#search").on('click', function() {


// build the queryURL
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + 5aa79c02ea5840d28aa684eed86fe61c + "&q=" + searchTerm
+ "&begin_date=" + beginDate + "&end_date=" + endDate + "&page=0&h1=true";

//build ajax call
$.ajax ({url: queryURL, method: "GET"})
.done(function(response){
	console.log(response);



	for (var i = 0; i<numResults; i++) {

		var resultDiv = $("<div>");
		var pHeadline = $('<h1>').text(response.docs[i].headline.highlight);
		var pByline = $('<h2>').text(response.docs[i].byline.original);
		var pSection = $('<h2>').text(response.docs[i].section_name);
		var pDate = $('<h2>').text(response.docs[i].pub_date);
		var pURL = $('<h2>').text(response.docs[i].web_url);

		resultDiv.append(pHeadline).append(pByline).append(pSection).append(pDate).append(pURL);

		// NEED to take resultDiv and append into the container div where results appear

	}




})

});

