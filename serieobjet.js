//exercice1
function test(x,y){
   
    var vote={
        upVotes: x ,
        downVotes: y ,
    }
    var voteCount=((vote.upVotes)-(vote.downVotes));
    console.log(`the displayed count is ${voteCount}.`);
    
}
console.log(`the displayed count is ${voteCount}.`);

//exercice2
//with the argument in the function
function test(x,y,z){
    var sizes={ 
        width: x, 
        length: y,
        height: z,

}; 
var volume = (sizes.length * sizes.width * sizes.height)
return volume

}
//meth2
//the argument are put in manually
function volumeOfBox(sizes) {
    var volume = sizes.length * sizes.width * sizes.height;
    return volume;
}
//using console to put in the variables
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
//meth3
function test(sizes) {
    var volume = sizes.length * sizes.width * sizes.height;
    return volume;
}

// Example object containing sizes
var sizesObject = { 
    width: 5, 
    length: 10,
    height: 2
};

// Call the function with the object as an argument
console.log(test(sizesObject)); 


/*/exercice3
function range(n){
    var obj = {
        minimum: 
        maximum: 
    };

}*/