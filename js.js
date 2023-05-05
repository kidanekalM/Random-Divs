/*document.write(true ? 1 && false ? true||false:true|false : true)
x=3
y=11
console.log(x++*++y+y+x);
console.log(1=="1");
alive=40
function Work () {
    
    document.writeln("work"+"<br>");
}
annoyed=0;
laws:{
    while(alive){
        alive--;
        annoyed++;
        Work();
        if(annoyed>20){
            break laws;
        }
    }
}
for(let i = 0;i<100;i++ ){
    if(i%5==0){
        console.log(i);
    }
}

for(let i=0;i<10;i++){
    for(let j=i;j<10;j++){
        document.write("*");
    }
    document.write("<br>");
}
var l = prompt("Enter your Name","Sir. Issac Newton");
alert("You have a bad name " +l)

log = function (){console.log("Booooo");}
log
person = function (nam,age,aff) {
    this.name = nam;
    this.age = age;
    this.affinity=aff;
}
i1 = new person("Issac Newton",234,"Physics");
i2 = new person("Diogenese",1234,"Freedom");
arr=[];
for(i=0;i<50;i++){
arr[i]=new person("Issac Newton",234,"Physics");
}
console.log(i2.affinity);
console.table(arr)
var l =  JSON.stringify(arr)
console.log(JSON.parse(l)[0]); 
document.write(disp())
function disp () {
    str="<div style='font-family:arial; border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>"+
    "<div style='border-radius:3px; width:;height :100px;box-shadow:0px 1px 3px 0px gray; text-align:center'><h1>SCHOOL</h1></div>";
    
    return str; 
   }





function rand(i){
    return Math.round((324567/i)%100);
}
arr=[]
for(i=1;i<10;i++){
    arr.push(rand(i))
}
console.log(arr);
arr.sort(function (a,b) {return b - a;  })
arr.reverse()
console.log(arr.every(a=>a>10));
console.log(arr);
arr.push(33)
console.log(arr[9])

arr1["abebe"] = 12312
arr1["kebede"] = 555
console.log(arr instanceof Array);
console.log(arr1["kebede"])
b = [1,11,1111,11111]
b = [444,444,4444,4,4444444,4]
c= []
function isvanilla(a){
    val = true;
    if(a.length>0){
    ch = JSON.stringify(a[0])[0];
    let f=5
    a = a.join(ch)
    console.log(a);
    val = Array.from(a).every(b=>b==ch);
    console.log(Array.from(JSON.stringify(a[3])));
    }
    return val;
}
a = isvanilla(b)
a
function sumFactor(a){
    let sumfactor = 0;
    sum = 0
    if(a.length>0){
        a.forEach(e => {
            sum+=e;
        });
        a.filter(function (e){
            e==sum?sumfactor++:sumfactor;
        })
    }
    return sumfactor;
}
arr =[0,0,0,0,0]
console.log(sumFactor(arr));

console.log((0.1*10+0.2*10)/10);
n =  Number()
console.log(typeof(NaN));
console.log(.2+.1);
num =Math.ceil(1+((Math.random())*129));
console.log(num);*/
str = "www.Desktop/hh/template.html"
val = str.slice( str.lastIndexOf("/")+1,str.lastIndexOf("."))
console.log(val);
if("abebe">"vaaaaebe"){
    console.log("yes");
}else{
    console.log("no");
}
d = new Date("2023-04-28 11:02:58")
d2 = new Date("2023-04-29 11:02:58")
base = new Date(d-d2)
console.log(base);
/**Assignment #2 centered */
ele = document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
ele
console.log(document.event); 
console.log(ele.nodeValue);
// window.resizeTo(1,2)
console.log(window.location);
// window.location.assign("try.php")
console.log(window.navigator.userAgent);
console.log(window.load);
function rand() {
    return Math.floor(Math.random()*225).toString();
  }
for(i=0;i<2000;i++){
     d= document.createElement("div");
     d.style.position="absolute";
     d.style.top=rand()+"%";
     d.style.left=rand()+"%";
     d.style.width=rand()+"px";
     d.style.height=rand()+"px";
     d.style.borderRadius=rand()-50+"px";
     d.addEventListener("mouseover",function () {
        document.body.firstElementChild.removeChild(this);
       })
     d.style.backgroundColor="#"+rand()+rand()+rand();
    document.body.append(d);
    // d.style.backgroundColor="red"
    console.log(rand());
    // document.write(d.style.backgroundColor);
    document.body.firstElementChild.appendChild(d);
}