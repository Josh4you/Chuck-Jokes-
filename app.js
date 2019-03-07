document.querySelector('#jokes').addEventListener('click', loadJokes);

function loadJokes(){
	const xhr=new XMLHttpRequest();
	let input = document.getElementById('input').value;
	
	// a little form validation 
	
	input=Math.abs(input);
	console.log(input);

	
	xhr.open('GET',`https://api.icndb.com/jokes/random/${input}`,true);


	xhr.onload=function(){
		if(xhr.status===200)
		{
			
			output = '';
			const jokes=JSON.parse(this.responseText);
			
			jokes.value.forEach(function(joke)
			{
				if(jokes.type==="success")
				{
					output+=`<li>${joke.joke}</li>`;
				}
				
				document.querySelector('#container').innerHTML = output;
			});
		}
		else
		{
			document.querySelector('#container').innerHTML=`<li>There is some problem with the request. Please only use numbers to specify your request.</li>`;
		}
	}


	xhr.send();
}
