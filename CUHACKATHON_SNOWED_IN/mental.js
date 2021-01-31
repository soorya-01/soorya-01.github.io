function submit(){
    var add = document.getElementById("right");
    
    let score = 0;
	let Q1 = document.getElementsByName("first");
	let Q2 = document.getElementsByName("second");
	let Q3 = document.getElementsByName("third");
	let Q4 = document.getElementsByName("fourth");
    let Q5 = document.getElementsByName("fifth");
    let Q6 = document.getElementsByName("sixth");
    let Q7 = document.getElementsByName("seventh");
    let Q8 = document.getElementsByName("eigth");
    let Q9 = document.getElementsByName("ninth");
    let Q10 = document.getElementsByName("tenth");
	for(let i =0; i < 4; i++){
		if(Q1[i].checked){
			score = score + parseInt(Q1[i].value);
        }
        if(Q2[i].checked){
			score = score + parseFloat(Q2[i].value);
        }
        if(Q3[i].checked){
			score = score + parseFloat(Q3[i].value);
        }
        if(Q4[i].checked){
			score = score + parseFloat(Q4[i].value);
        }
        if(Q5[i].checked){
			score = score + parseFloat(Q5[i].value);
        }
        if(Q6[i].checked){
			score = score + parseFloat(Q6[i].value);
        }
        if(Q7[i].checked){
			score = score + parseFloat(Q7[i].value);
        }
        if(Q8[i].checked){
			score = score + parseFloat(Q8[i].value);
        }
        if(Q9[i].checked){
			score = score + parseFloat(Q9[i].value);
        }
        if(Q10[i].checked){
			score = score + parseInt(Q10[i].value);
		}
    }
    console.log(score);
    let result = document.createElement("p");
    document.createTextNode("<b>Based on your test results: <b>");
    result.appendChild(document.createTextNode("Based on your test results: "));
    result.appendChild(document.createElement("br"));
	if(score <= 50){
		result.append(document.createTextNode("It seems you don't have much to worry about. Your mental health seems to be in good shape."));
    }
    else if(score > 50 && score <= 125){
		result.append(document.createTextNode("It seems that there may be something impacting your mental health. It would be safe to get checked out."));
    }
    else if(score > 125){
		result.append(document.createTextNode("Your response to this question indicates you may be at risk. Are you in crisis? Please call the National Suicide Prevention Hotline at 1-800-273-TALK"));
	}
	else{
		alert("You good fam!");
    }
    add.appendChild(result);
    document.getElementById("butt").onclick = null;
}