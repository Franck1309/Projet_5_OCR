// Tableaux 

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const dots = document.querySelectorAll(".dot")

// variable à portée longue

let arrow_left = document.querySelector("#banner .arrow_left")
let arrow_right = document.querySelector("#banner .arrow_right")

// fonctions 

function selectNextDot() {
	for (let i = 0 ; i < dots.length ; i++) {

		if (dots[i].classList.contains("dot_selected")) {
			dots[i].classList.remove("dot_selected");

			if (i === dots.length - 1) {
				dots[0].classList.add("dot_selected");
			} else {
				dots[i + 1].classList.add("dot_selected")
			}
			break;
		}
	}
}
function selectPrevDot() {
	for (let i = dots.length - 1 ; i >= 0 ; i--) {
		if (dots[i].classList.contains("dot_selected")) {
			dots[i].classList.remove("dot_selected");

			if (i === 0) {
				dots[3].classList.add("dot_selected");
			} else {
				dots[i - 1].classList.add("dot_selected")
			}
			break;
		}
	}
}
function changeImageTxt() {

	let dot_selected_1 = document.querySelector (".dot_1.dot_selected")
	let dot_selected_2 = document.querySelector (".dot_2.dot_selected")
	let dot_selected_3 = document.querySelector (".dot_3.dot_selected")
	let dot_selected_4 = document.querySelector (".dot_4.dot_selected")
	const txt = document.querySelector("p");
	const image = document.querySelector("#banner .banner-img")

	if (dot_selected_1) {
		image.src = slides[0].image
		txt.innerHTML = slides[0].tagLine
	} 
	if (dot_selected_2) {
		image.src = slides[1].image
		txt.innerHTML = slides[1].tagLine
		} 
	if (dot_selected_3) {
		image.src = slides[2].image
		txt.innerHTML = slides[2].tagLine
	} 
	if (dot_selected_4) {
		image.src = slides[3].image
		txt.innerHTML = slides[3].tagLine
	} 
}

// Ecouteur d'événement pour les flèches du caroussel

arrow_left.addEventListener("click", function() {
	selectPrevDot()
	changeImageTxt()
})
arrow_right.addEventListener("click", function ()  {
	selectNextDot()
	changeImageTxt()
})







