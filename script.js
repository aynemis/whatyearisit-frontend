fetch('https://whatyearisit-backend-eight-phi.vercel.app/year')
.then(response => response.json())
.then(data => {document.querySelector('#year').textContent = data.year})
