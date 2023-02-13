let imgDiv = document.getElementById('Image')

function fetchArt()	{
	let response = fetch("https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Aukitchen+sort%3Atime+meta%3Aall")
  	.then(response => response.text())
  	.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  	.then(data => {
		console.log(data)
		const items = data.querySelectorAll("item");
		let html = ``;
	    items.forEach(el => {
	      html += `
	      <img src=${el.querySelector("media\\:content[url]").innerHTML}/>
	      `; 
		})
		    	document.body.insertAdjacentHTML("beforeend", html);
    })


}