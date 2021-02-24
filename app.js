

async function getGif(q) {
	let returnedGif = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params : {
			api_key : '11QxCaxOUXdXHZylCNrftHTi1gxZ6jfY',
			q       : q,
			limit   : 25
		}
	});

	let gifUrl = returnedGif.data.data[Math.floor(Math.random()*25)].images.fixed_height.url
	let results = document.querySelector('#display-area')
	let newGif = document.createElement('div')

	newGif.classList.add("justify-content-center")
	newGif.classList.add("d-flex")
	newGif.classList.add("mb-3")
	newGif.innerHTML = `<img src="${gifUrl}" alt="">`
	results.appendChild(newGif);
	console.log(returnedGif.data)
}



//Retrieve new GIF
let submitButton = document.querySelector('#submit-btn')

submitButton.addEventListener('click',function(e){
	e.preventDefault();
	let searchCriteria = document.querySelector('#search-input').value
	getGif(searchCriteria);
	
})

let deleteButton = document.querySelector('#delete-btn')

deleteButton.addEventListener('click',function(e){
	e.preventDefault();
	let results = document.querySelector('#display-area')

	results.remove()
	
})