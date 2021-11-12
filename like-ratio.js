var views = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerHTML.split(" ")[0]
views = parseFloat(views.replace(/,/g, ''));
var likes = document.getElementById("menu-container").getElementsByTagName("yt-formatted-string")[0].ariaLabel
likes = likes.split(" ")[0].replace(/,/g, '')
const likeRatio = ((likes/views) * 100).toFixed(5) + '% Like/View Ratio';
const ratioNode = document.createTextNode(likeRatio);
const info = document.getElementsByTagName("ytd-video-primary-info-renderer")[0];
info.appendChild(ratioNode);
