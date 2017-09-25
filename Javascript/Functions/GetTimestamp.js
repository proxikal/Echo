	function GetTimestamp() {
		var now = new Date();
		var work = "";
		var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

		var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

		var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
		function fourdigits(number)    {
		    return (number < 1000) ? number + 1900 : number;
		                                }
		today =  days[now.getDay()] + ", " +
		         months[now.getMonth()] + " " +
		         date + ", " +
		         (fourdigits(now.getYear()));
		return today
	}
