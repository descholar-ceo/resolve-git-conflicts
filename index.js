const addFunction = (a,b) => {
    let result
    if(a<0 || b<0){
        result = 'You need to wait for the version two, which includes the subtraction' 
    }else{
        result = a+b
    }
    return result
}

console.log(addFunction(-2,-3))
