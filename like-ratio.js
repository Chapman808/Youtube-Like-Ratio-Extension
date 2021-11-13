var views = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerHTML.split(" ")[0]
views = parseFloat(views.replace(/,/g, ''));
var likes = document.getElementById("menu-container").getElementsByTagName("yt-formatted-string")[0].ariaLabel
likes = likes.split(" ")[0].replace(/,/g, '')
const likeRatio = ((likes/views) * 100).toFixed(2) + '% like/view ratio';
document.getElementsByClassName('view-count style-scope ytd-video-view-count-renderer')[0].append(" • " + likeRatio);
