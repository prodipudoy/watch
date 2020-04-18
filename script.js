function timenow(){
	var date24= new Date();
	document.getElementById("demo").innerHTML=date24.getHours()+":"+date24.getMinutes()+":"+date24.getSeconds();


}
setInterval(timenow);

