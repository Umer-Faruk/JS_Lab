function getInputValue(){
            
            var inputVal = document.getElementById("myInput").value;

            if(inputVal%3==0 || inputVal%7==0){
                alert("it is divisable");
            }
            else{
                alert("not divisable");
            }
            
}
