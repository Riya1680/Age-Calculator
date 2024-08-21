console.log("welcome to age calculator");
let userInput = document.getElementById("date");
// we can select only today date or past date
userInput.max = new Date().toISOString().split("T")[0];  
let result = document.getElementById("result");


function calculateAge(){
    let birthDate = new Date(userInput.value);  //we will select any value is store in birth date

    let d1 = birthDate.getDate();    //d1 will store the day
    let m1 = birthDate.getMonth() + 1; // month will start with 0 . we add 1 then january will start with 1
    let y1 = birthDate.getFullYear();  //y1 will store the year


    let today = new Date();    // in this current date we will get today date,today month, today year
      
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;        //these are the other three variable store the difference in the year, date ,month 
     
    y3 = y2 - y1;   // current date - date of the birth year

    if(m2 >= m1) { // it means when today month is greater than date birth of year
     m3  = m2 - m1;
    }else{
        y3--;    //we will decrease the value of year it means suppose the year is 12 we will make it 11
        m3 = 12 + m2 - m1; // 12 month will be add here today date subtract date of birth year
    }

    if (d2 >= d1){
        d3 = d2 - d1;
    }
    else{
    m3--; //m3 decrease the value by one
    d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0){
        m3=11;
        y3--    // it means year difference decrease
    }
    result.innerHTML = `You are<span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days older`;
}

function getDaysInMonth(year, month){
    return new Date(year,month,0).getDate();  //it will return the last days of that month so it will exactly give us the numbers of days in that month and we will use the numbers of date
}