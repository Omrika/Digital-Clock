$(document).ready(function(){
	function displayTime() {
		var CurrentTime = new Date(); //gets month, date, year, hours, mis, secs, 
		var hours = CurrentTime.getHours(); //gets hours from currentTime variable
		var minutes = CurrentTime.getMinutes(); //gets mins from currentTime variable
		var seconds = CurrentTime.getSeconds(); //gets secs from currentTime variable

		var meridiem = "AM";

		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		if (hours === 0) {
			hours = 12;
		}
		
		if (seconds < 10) {
			seconds = "0" + seconds; 
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (hours < 10) {
			hours = "0" + hours;
		}

		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
		
		}

		displayTime();
		setInterval(displayTime, 1000);
});