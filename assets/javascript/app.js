// api key    5aa79c02ea5840d28aa684eed86fe61c


// variables for the inputs

var searchTerm = "oil";
var beginDate = "20000101";
var endDate = "20011231";


// build the queryURL
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + 5aa79c02ea5840d28aa684eed86fe61c + "&q=" + searchTerm
+ "&begin_date=" + beginDate + "&end_date=" + endDate + "&page=0&h1=true";

//build ajax call
$.ajax ({url: queryURL, method: "GET"})
.done(function(NYTsearch){
	console.log(response);


})