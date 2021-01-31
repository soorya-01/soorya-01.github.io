
function makeVisible(){
	document.getElementById('notVisible').style.display = "block";
}

function makeInVisible(){
	document.getElementById('notVisible').style.display = "none";
}

function submit(){
	let score =0;
	let Q1 = document.getElementsByName("b");
	let Q2 = document.getElementsByName("s");
	let Q3 = document.getElementsByName("c");
	let Q4 = document.getElementsByName("con");
	let Q5 = document.getElementsByName("age");
	if(Q1[0].checked)
		score += parseInt(Q1[0].value);
	if(Q2[0].checked)
		score += parseInt(Q2[0].value);
	if(Q3[0].checked)
		score += parseInt(Q3[0].value);
	if(Q4[0].checked)
		score += parseInt(Q4[0].value);
	for(let i =0; i < 3; i++){
		if(Q5[i].checked){
			score = score * parseFloat(Q5[i].value);
			break;
		}
	}
	if(score > 50){
		let h2 = document.getElementById("result");
		h2.innerHTML="You might have COVID-19, please get tested at the closest testing site.";
	}
	else{
		let h2 = document.getElementById("result");
		h2.innerHTML="As of now, keep observing symtoms and please get tested if symtoms get worse.";
	}
}