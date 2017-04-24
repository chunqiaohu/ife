function Observer(data){
	this.data=data;
	this.walk(data);//递归算法
}
var p=Observer.prototype;
//遍历对象
//采用递归思路
p.walk=function(obj){
	var val;
	for(var key in obj){
		//通过hasownProperty过滤
		if(obj.hasOwnProperty(key)){
			val=obj[key];
			//判断是否到最底层
			if(typeof val=="object"){
				new Observer(val);
			}
			this.convert(key,val);
		}
	}
}
//为对象的每一个属性绑定getter和setter，通过defineProperty触发自定义的回调函数
p.convert=function(key,val){
	Object.defineProperty(this.data,key,{
		enummerable:true;
		configurable:true;
		get:function(){
			console.log('你访问了'+key);
			return val
		},
		set:function(newVal){
			console.log('你设置了'+key);
			console.log('新的'+key+'='+newVal)
			if(newVal===val)return;
			val=newVal;
		}
	})
}
let app1=new Observer({
	name:'youngwind',
	age:25;
});
let app2=new Observer({
	university:'bupt',
	major:'computor'
});
//要实现的结果
app1.data.name//你访问lname
app1.data.age=100;//你设置了age，新的值为100
app2.data.university//你访问了university
app2.data.major='science'//你设置了major。新的值为science