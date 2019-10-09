function a(){
            var x =document.getElementById("i1").value;
            var y = document.getElementById("i2").value;
            var z = parseInt(x)+parseInt(y);

            document.getElementById("o1").innerHTML="sum:-"+z;
    }
        function b(){
            var x =document.getElementById("i1").value;
            var y = document.getElementById("i2").value;
            var z = parseInt(x)-parseInt(y);

            console.log(z);
		document.getElementById("o1").innerHTML="sub:-"+z;
        }
        function c(){
            var x =document.getElementById("i1").value;
            var y = document.getElementById("i2").value;
           var z = parseInt(x)*parseInt(y);

            console.log(z);
		document.getElementById("o1").innerHTML="mul:-"+z;
        }
        function d(){
            var x =document.getElementById("i1").value;
            var y = document.getElementById("i2").value;
	try{
		if(y==0) throw "divided by zero";
            var z = parseInt(x)/parseInt(y);

            console.log(z);
		document.getElementById("o1").innerHTML="div:-"+z;
	}
	catch(err){
				document.getElementById("o1").innerHTML=err;
		}
        }

