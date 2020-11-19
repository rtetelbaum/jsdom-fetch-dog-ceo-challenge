console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const container = document.querySelector("#dog-image-container")
const breedsContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("select#breed-dropdown") 

/*
1. When x event happens
2. Do y fetch
3. Slap z on the DOM
*/

breedsContainer.addEventListener("click", event => {
	if (event.target.tagName === "LI") {
		event.target.style.color = "red"
	}
})

dropdown.addEventListener("change", event => {
	const breedLetter = event.target.value
	breedLis = breedsContainer.querySelectorAll("li")
	breedLis.forEach( li => {
		if (li.textContent[0] === breedLetter) {
			li.style.display = ""
		} else {
			li.style.display = "none"
		}
	})
})

const renderOneImg = urlString => {
	const img = document.createElement("img")
	img.src = urlString
	container.append(img)
}

const renderOneBreed = breed => {
	const li = document.createElement("li")
	li.textContent = breed
	breedsContainer.append(li)
}

const getDogImages = () => {
	fetch(imgUrl)
	.then(response => response.json())
	.then(data => {
		data.message.forEach(renderOneImg)
	})
}

const getDogBreeds = () => {
	fetch(breedUrl)
	.then(response => response.json())
	.then(data => {
		const breedsArray = Object.keys(data.message)
		breedsArray.forEach(renderOneBreed)
	})
}

getDogImages()
getDogBreeds()