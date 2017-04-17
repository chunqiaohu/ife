var container=document.getElementById('container');
var clientMenu=document.getElemetById('clientMenu');
function menuEvent(event){
	if(event.clientX+242>screen.availWidth){
		clientMenu.style.left=event.clientX-242+'px';
	}else{
		clientMenu.style.left=event.clientX+'px';
	}
	if(event.clientY+122>screen.availHeight){
		clientMenu.style.top=event.clientY-122+'px';
	}else{
		clientMenu.style.top=event.clientY+'px';
	}
	clientMenu.style.visibility='visible';
	return false;
}
function hiddenMenu(){
	clientMenu.style.visibility='hidden';
}
function defaultMenu(){
	return false;
}
function init(){
	container.oncontextMenu=menuEvent;
	container.onclick=hiddenMenu;
	clientMenu.oncontextMenu=defaultMenu;
}
init();