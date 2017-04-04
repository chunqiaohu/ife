function createNode{
		var newItem=document.createElement("span");

		if(inputValue.value==""){
			alert("请输入一个数字")
		}else if(!isNaN(inputValue.value)){
			var textNode=document.createTextNode(text);
		    newItem.appendChild(textNode);
		}else{
			alert("请按照格式输入数字")；
		}

		newItem.setAttribute("class","box");
	return newItem;
}
function rightOut{
	var queue=document.getElementById("queue");
	var len=document.getElementById("queue").childNodes.length;
	if(len>0){
		queue.removechild(queue.childNodes[len-1]);
	}
}
function leftOut(){
	var queue=document.getElementById("queue");
	if(queue.childNodes.length>0){
		queue.removechild(queue.childNodes[0]);
	}
}
function rightIn{
	var inputValue=document.getElementById("inputValue").value;
	if(inputValue.length>0){
		var newNode=createNode(inputValue);
		document.getElementById("queue").appendChild(newNode)；
	}
}
function leftIn{
	var inputValue=document.getElementById("inputValue").value;
	if(inputValue.length>0){
		var newNode=createNode(inputValue);
		var queue=document.getElementById("queue");
		queue.insertBefore(newNode,queue.childNodes[0]);
	}
}
function init{
	document.getElementById("left_in_button").onclick=leftIn;
	document.getElementById("right_in_button").onclick=rightIn;
	document.getElementById("left_out_button").onclick=leftOut;
	document.getElementById("right_out_button").onclick=rightOut;
	var queue=document.getElementById("queue");
		queue.removechild(event.target);
}
init();