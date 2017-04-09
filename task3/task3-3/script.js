function studentForm(){
	document.getElementById("for_student").style.display="block";
	document.getElementById("for_non_student").style.display="none";
}
function nonStudentForm(){
	document.getElementById("for_student").style.display="none";
	document.getElementById("for_non_student").style.display="block";
}
function showSchool(){
	var schoolName=[
	["南京大学","江苏大学","东南大学","南京航空航天大学","苏州大学","南京理工大学","南京师范大学"],
	["浙江大学","温州大学","浙江传媒学院","浙江外国语学院","杭州师范大学"],
	["山东大学","中国海洋大学","中国石油大学","山东师范大学","山东建筑大学","山东财经大学"],
	]
	var province = document.getElementById("province");
	var school = document.getElementById("school");
	var proSchool = schoolName[province.selectedIndex-1];
	school.length=1;
	for(var i = 0;i<proSchool.length;i++){
		school[i+1] = new Option(proSchool[i],proSchool[i]);	
	}
}

function init(){
	document.getElementById("student").onclick = studentForm ;
	document.getElementById("non_student").onclick = nonStudentForm;
	document.getElementById("province").onchange = showSchool ;
}

init();
