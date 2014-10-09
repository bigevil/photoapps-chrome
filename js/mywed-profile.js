var fullName = $('h1.user-name').first().text();
var userName = fullName.replace(/\)$/, '').match(/[\w\d\-_]*$/)[0];
var userData;

//var request = kango.xhr.getXMLHttpRequest();
var requestDetails = {
	method: 'GET',
	url: 'http://photoapps.ru/mywed/user/profile/' + userName + '.json',
	async: true,
	contentType: 'json'
};

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(data) {
  if (xhr.readyState == 4) {
    if (xhr.status == 200 && xhr.responseText != null) {
      var userData = JSON.parse(xhr.responseText);
      //userData = data.response;
			prependHTML  = "<tr><td class='field-name'>Позиция:</td><td>" + userData.position + ", <a href='http://www.mywed.ru/photographer/popular/page/" + userData.current_page +"/'>" + userData.current_page +" страница</a></td></tr>";
			prependHTML += "<tr><td class='field-name'>По городу:</td><td>" + userData.position_by_city +", " + userData.page_by_city +" страница</td></tr>";
			prependHTML += "<tr><td colspan='2'><a href='http://photoapps.ru/mywed/user/profile/" + userName + "'>Расширенная статистика</a></td></tr>";
			prependHTML += "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>";
			$('table.photographer-info').first().prepend(prependHTML);
    } else {
      console.log("Can't get user data from photoapps.ru");
    }
  }
}
// Note that any URL fetched here must be matched by a permission in
// the manifest.json file!
var url = 'http://photoapps.ru/mywed/user/profile/' + userName + '.json';
xhr.open('GET', url, true);
xhr.send();