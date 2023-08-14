
function A( data, func){
    func(data);
}


// func -> callback function


//call back in the case of sync setting 

A("Hello Himanshu", (msg) => {console.log(msg)});
 
// call back in the case of async setting 

setTimeout(() => { 
    console.log('I am callback function');
}, 5000 ); 


