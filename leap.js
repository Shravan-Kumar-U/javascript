let year = prompt("Enter the year to check the leap year");
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert(`${year} is leap year`);
        }else{
            alert(`${year} is not a leap year`);
        }

    }else{
    alert(`${year} is not a leap year`);
}
}else{
    alert(`${year} is not a leap year`);
}
