let ur;
let inputFile = document.getElementById("inputFile");
inputFile.addEventListener("change",()=>{
    ur = URL.createObjectURL(inputFile.files[0]);

})
const url = 'https://resume-parser-and-analyzer.p.rapidapi.com/api/v1/cv/';
const data = new FormData();
data.append('file', ur);

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
		'X-RapidAPI-Host': 'resume-parser-and-analyzer.p.rapidapi.com'
	},
	body: data
};

asy
async function x(){

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
x();