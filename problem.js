const today = new Date();  //find today's date by using JS build in function new date
const day = today.getDay(); // Find the day using  build in .getDay which will give us as digit from 0-6;
const dayList = ["Sunday","Monday","Tuesday","WednesDay","Thrusday","Friday","saturday"];
let Day = dayList[day];
document.getElementById("day").innerHTML = Day;

let hour = today.getHours();
let minute = today.getMinutes();
function currentTime(){
    if (hour >= 12){
        return hour = hour -12 + ":" + minute + " PM";  
     }
     else {
      return   hour = hour +":"+ minute + " AM";
     }
}

document.getElementById("time").innerHTML = currentTime();