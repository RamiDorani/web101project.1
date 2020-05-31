


/*SCROLLING ITEM*/
$("#demo1").als({   
	visible_items: 3,
	scrolling_items: 3,
	orientation: "horizontal",
	circular: "no",
	autoscroll: "no"
});




/*TIME DISPLAY+ TIME SORTING*/
function addZero (x) {
	if(x<10) {
		x="0"+x;
	}
	return x;
}

var today= new Date ();
var hour=addZero(today.getHours());
var minute=addZero(today.getMinutes());

document.getElementById("time").innerHTML=hour + ":" +minute;


var pList=document.getElementsByClassName("frequency");
var sList=document.getElementsByClassName("numOfTimes");


window.onload=function() {
	var currTime= new Date();
	var currHour= currTime.getHours();
	var i;
	for(i=0  ; i<pList.length  ; i++)
	{
		if(currHour>="0"  && currHour<="7")
		{
			pList[i].innerHTML="0"+"/"+sList[i].innerHTML;
		}

		if(currHour>='8'  && currHour<='14')
		{
			pList[i].innerHTML="1"+"/"+sList[i].innerHTML;
		}

		if(currHour>='15'  && currHour<='19')
		{
			if(sList[i].innerHTML=='1')
			{
				pList[i].innerHTML="1"+"/"+sList[i].innerHTML;
			}
			else 
			{
				pList[i].innerHTML="2"+"/"+sList[i].innerHTML;
			}
		}
		
		if(currHour>='20'  && currHour<='23')
		{
			if(sList[i].innerHTML=="1")
			{
				pList[i].innerHTML='1'+'/'+sList[i].innerHTML;
			}
			if(sList[i].innerHTML=="2")
			{
				pList[i].innerHTML="2"+"/"+sList[i].innerHTML;
			}
			if(sList[i].innerHTML=="3")
			{
				pList[i].innerHTML="3"+"/"+sList[i].innerHTML;		
			}
		}
		
		if(pList[i].innerHTML=="1"+"/"+"1")
			{
				pList[i].style.color="rgb(50, 204, 36)";
				pList[i].style.weight="bold";
			}

			if(pList[i].innerHTML=="2"+"/"+"2")
			{
				pList[i].style.color="rgb(50, 204, 36)";
			}
			
			if(pList[i].innerHTML=="3"+"/"+"3")
			{
				pList[i].style.color="rgb(50, 204, 36)";
			}
	}
}



	/*DROP prescription AREA*/
 let dropArea = document.getElementById('drop-area')
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
	e.preventDefault()
	e.stopPropagation()
  }
  
  ;['dragenter', 'dragover'].forEach(eventName => {
	dropArea.addEventListener(eventName, highlight, false)
  })
  
  ;['dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
	dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
	dropArea.classList.remove('highlight')
  }
  

