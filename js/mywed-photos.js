$('table#photos td').each(function(index){
	var self = $( this );
	var userText = self.find('img').attr('alt');
	// Свадебный фотограф Яна Жаринцова (SabrinaVamp). Фотография от 02.10.2014
	if (userText) {
		userText = userText.replace("Свадебный фотограф ", "");
		var fullName = userText.match(/[а-яё\w\d\s]* \(/i)[0].replace(/ \(/, "");
		var userName = userText.match(/\([а-яё\w\d\s\-_]*\)/i)[0].replace(/[\(\)]/g, "");
		var uploadedAt = userText.match(/[\d]{2}\.[\d]{2}\.[\d]{4}/)[0];
		var afterHTML = "<br><a href='http://www.mywed.ru/photographer/view/profile/" + userName +"/'>" + fullName + "</a>";
		self.append(afterHTML);
	}
});