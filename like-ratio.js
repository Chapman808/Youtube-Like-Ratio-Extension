//get views, likes
var views = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerHTML.split(" ")[0]
var likes = document.getElementById("menu-container").getElementsByTagName("yt-formatted-string")[0].ariaLabel

//parse views, likes
views = parseFloat(views.replace(/,/g, ''));
likes = likes.split(" ")[0].replace(/,/g, '')

//calculate like ratio
var likeRatio = ((likes/views) * 100).toFixed(2) + '% like/view ratio';

var viewText = document.getElementsByClassName('view-count style-scope ytd-video-view-count-renderer')[0].innerText
document.getElementsByClassName('view-count style-scope ytd-video-view-count-renderer')[0].innerText = viewText.split("•")[0] + " • " + likeRatio;
