// Daniel Shapiro
// "I pledge my honor that I have abided by the Stevens Honor System." - Daniel Shapiro

module.exports = {
    extend: function (...args){
        //This method will take the properties from earlier objects in the array args, and compose a new object with the combined property from all the entries without overwriting properties from earlier entries.
        let bool = true;
        args.forEach(val =>{
            bool = bool && ((Object.prototype.toString.call(val) === "[object Object]") && typeof val !== "undefined");
        });
        if (bool == false){
            throw "Invalid arguments!";
        }else if(args.length < 2){
            throw "Need at least two arguments!";
        }else{
            let ob = { };
            args.forEach(value =>{
                Object.keys(value).forEach(k =>{
                    if( !(k in ob)){
                        ob[k] = value[k];
                    }
                })
            })
            return ob;
        }
    
    },
    
    // const first = { x: 2, y: 3};
    // const second = { a: 70, x: 4, z: 5 };
    // const third = { x: 0, y: 9, q: 10 };
    // const firstSecondThird = extend(first, second, third);
    // const secondThird = extend(second, third);
    // const thirdFirstSecond = extend("hi", first, second);
    //console.log(firstSecondThird);
    //console.log(secondThird);
    //console.log(thirdFirstSecond);
    
    smush: function(...args){
        // This method will take the properties from earlier objects in the array args, and compose a new object with the combined property from all the entries with overwriting properties from earlier entries.
        let bool = true;
        args.forEach(val =>{
            bool = bool && ((Object.prototype.toString.call(val) === "[object Object]") && typeof val !== "undefined");
        });
        if (bool == false){
            throw "Invalid arguments!";
        }else if(args.length < 2){
            throw "Need at least two arguments!";
        }else{
            let ob = { };
            args.forEach(value =>{
                Object.keys(value).forEach(k =>{
                    
                        ob[k] = value[k];
                    
                })
            })
            return ob;
        }
    },
    
    // const firstSecondThird = smush(first, second, third);
    // const secondThird = smush(second, third);
    // const thirdFirstSecond = smush(third, first, second);
    // console.log(firstSecondThird);
    // console.log(secondThird);
    // console.log(thirdFirstSecond);
    
    mapValues: function (object, func){
        // Given an object and a function, evaluate the function on the values of the object and return a new object.
        if(object === undefined){
            throw "An object is required!";
        }else if(Object.prototype.toString.call(object) !== "[object Object]"){
            throw "Improper object!";
        }else if(func === undefined){
            throw "A function is required!";
        }else if(typeof func !== "function"){
            throw "Improper function!";
        }else{
            let ob = {};
            Object.keys(object).forEach(k =>{
                ob[k] = func(object[k]);
            });
            return ob;
        }
    },
    //console.log(mapValues({ a: 1, b: 2, c: 3 }, n => n + 1));
}

// function extend(...args){
//     // Need to error check
//     let bool = true;
//     args.forEach(val =>{
//         bool = bool && ((Object.prototype.toString.call(val) === "[object Object]")&& typeof val !== "undefined");
//     });
//     if (bool == false || args.length < 2){
//         throw "Invalid arguments!";
//     }else{
//         let ob = { };
//         args.forEach(value =>{
//             Object.keys(value).forEach(k =>{
//                 if( !(k in ob)){
//                     ob[k] = value[k];
//                 }
//             })
//         })
//         return ob;
//     }

// };

// console.log(extend([1,2,3], [4,2,3]));

// const first = { x: 2, y: 3};
// const second = { a: 70, x: 4, z: 5 };
// const third = { x: 0, y: 9, q: 10 };
// const firstSecondThird = extend(first, second, third);
// const secondThird = extend(second, third);
// const thirdFirstSecond = extend(third, first, second);
// console.log(firstSecondThird);
// console.log(secondThird);
// console.log(thirdFirstSecond);

// function smush(...args){
//     // Error checking
//     let ob = { };
//         args.forEach(value =>{
//             Object.keys(value).forEach(k =>{
                
//                     ob[k] = value[k];
                
//             })
//         })
//         return ob;
// };

// const firstSecondThird = smush(first, second, third);
// const secondThird = smush(second, third);
// const thirdFirstSecond = smush(third, first, second);
// console.log(firstSecondThird);
// console.log(secondThird);
// console.log(thirdFirstSecond);

// function mapValues(object, func){
//     // Error checking
//     if(object === undefined){
//         throw "An object is required!";
//     }else if(Object.prototype.toString.call(object) !== "[object Object]"){
//         throw "Improper object!";
//     }else if(func === undefined){
//         throw "A function is required!";
//     }else if(typeof func !== "function"){
//         throw "Improper function!";
//     }else{
//         let ob = {};
//         Object.keys(object).forEach(k =>{
//             ob[k] = func(object[k]);
//         });
//         return ob;
//     }
// };
// console.log(mapValues({a:1},[1,2]));