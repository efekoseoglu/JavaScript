let value;

const numbers=[37,45,96,45,25,29,67,69];

const langs =["Python","Java","c++","Javascript" ];

numbers.push(2000);
//inserting new value to the top
numbers.unshift(3000);



numbers.pop();//deleting last value
numbers.shift();//deleting first value
numbers.splice(0,3);//delete numbers between

numbers.reverse();

value=numbers.sort(function(x,y){// if x-y <0 then this ascension sort

    return x-y;
})

value=numbers.sort(function(x,y){// if x-y >0 then this descension sort

    return y-x;
})

value=numbers;

console.log(numbers);