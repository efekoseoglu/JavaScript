let value;

const now = new Date();

const date1= new Date("1-10-1999 06:09:00");

const date2=new Date("October 1 1999");

const date3=new Date("10/1/1999");

value=date1;

value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();//starting from sunday
value=date1.getHours();

value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();

date1.setMonth(8);//starting from 0 as jan
date1.setDate(15);
date1.setFullYear(1969);

console.log(value);
