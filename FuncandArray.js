const numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;

var name1 = function (para) {
    para = parseInt(para)+ 1 ;
    console.log(para);
}
function number1(func, num)
{
    if (num % 2 == 0)
    {
        func(num);
    }
    else 
    {
        console.log("This number is odd")
    }
}
for (key1 in numbers) 
{
    number1(name1, numbers[key1])
}

