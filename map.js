const studentData = [
    {
        name:"zarnain" , class :"bsse" , age:34
    },
    {
        name:"zarnain" , class :"bsse" , age:34
    }, 
     {
        name:"zarnain" , class :"bsse" , age:34
    }
]
const newData =  studentData.map((cevent)=>{
return  `my name is ${cevent.name} nad current degree is ${cevent.class}`
})
console.log(newData);

document.getElementById("showdata").innerHTML=newData;
// console.log(studentData);