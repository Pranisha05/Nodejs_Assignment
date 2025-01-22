function calculator(a,b,c){
    switch(c){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
            console.log("Invalid operator!!");
    }
}
console.log(`Result is ${calculator(2,3,'*')}`)
