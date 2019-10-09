function myfun(){
             text = document.getElementById("in").value;
                let t =text.split(' ');
                let maxm=0;
                for (let i=0;i<t.length;i++){
                    console.log(t[i].length)
                    
                    if (t[i].length >= maxm){
                        maxm = t[i].length;
			console.log(t[i])
                    }
                    
                }
		document.getElementById("o1").innerHTML="length of the longest word is :- "+ maxm;
               
}
