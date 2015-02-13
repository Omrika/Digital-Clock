$(document).ready(function(){
		function displayTime() {
			var CurrentTime = new Date(); //gets month, date, year, hours, mis, secs, 
			var hours = CurrentTime.getHours(); //gets hours from currentTime variable
			var minutes = CurrentTime.getMinutes(); //gets mins from currentTime variable
			var seconds = CurrentTime.getSeconds(); //gets secs from currentTime variable

			var clockDiv = document.getElementById('clock');
			clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
		}

		displayTime();
});