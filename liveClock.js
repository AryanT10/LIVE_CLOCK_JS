setInterval(() => {
	const time = document.querySelector(".display #time");
	const dateElement = document.querySelector(".display #date");
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let day_night = "AM";
	if (hours > 12) {
		day_night = "PM";
		hours = hours - 12;
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
	let dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });
	let month = currentDate.toLocaleString("en-US", { month: "long" });
	let day = currentDate.getDate();
	let year = currentDate.getFullYear();
	time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
	dateElement.textContent = dayOfWeek + ", " + month + " " + day + ", " + year;
}, 1000);