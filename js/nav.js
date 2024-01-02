let nav_ele_a = document.querySelectorAll("#navbar a");
let info_bubble = document.querySelector("#info-navbar");
let info_bubble_text = document.querySelector(
	"#info-navbar #inside-info-navbar"
);

document.addEventListener("mousemove", function (e) {
	let mouseX = e.clientX;
	let mouseY = e.clientY;

	let follower = info_bubble;

	// Use vw units for positioning
	follower.style.left =
		((mouseX /* - follower.offsetWidth */) / window.innerWidth) * 100 -
		0.9 +
		"vw";
	follower.style.top = ((window.scrollY + mouseY) / window.innerHeight) * 100 + 6 + "vh";
});

nav_ele_a.forEach((e) => {
	let navbar = document.querySelector("#navbar ul");
	navbar.addEventListener("mouseover", (e) => {
		let id_of_li = e.target.id;
		let dashIndex = id_of_li.indexOf("-");
		let resultString =
			dashIndex !== -1 ? id_of_li.substring(0, dashIndex) : id_of_li;
		if (resultString == "home") {
			info_bubble_text.innerHTML = "Strona Główna";
		} else if (resultString == "pns") {
			info_bubble_text.innerHTML = "Polskie Symbole Narodowe";
		} else if (resultString == "geo") {
			info_bubble_text.innerHTML = "Geografia i Miasta Polski";
		} else if (resultString == "law") {
			info_bubble_text.innerHTML = "Władza w Polsce";
		} else if (resultString == "me") {
			info_bubble_text.innerHTML = "O mnie";
		}
		info_bubble.classList.remove("hide");
		info_bubble.classList.add("show"); // Add a class to trigger animation

	});
	navbar.addEventListener("mouseout", (e) => {
		info_bubble.classList.remove("show"); // Remove the class to hide the animation
		info_bubble.classList.add("hide");
	});
});