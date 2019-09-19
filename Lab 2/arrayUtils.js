// Daniel Shapiro
// "I pledge my honor that I have abided by the Stevens Honor System." - Daniel Shapiro
module.exports = {
    head : function(array) {
        // Returns the first element of an array.
        if (array === undefined || array.length == 0){
            throw "Array does not exist";
        }else if (!Array.isArray(array)){
            throw "Improper array!";
        }else{
            return array[0];
        }
    },
    
    last : function (array){
        // Returns the last element of an array.
        if (array === undefined || array.length == 0){
            throw "Array does not exist";
        }else if (!Array.isArray(array)){
            throw "Improper array!";
        }else{
            return array[array.length-1];
        }
    },
    
    remove : function (array, index) {
        // Removes the element at the specified index of the array, and returns the new array.
        if (array === undefined || array.length == 0){
            throw "Array does not exist";
        }else if (!Array.isArray(array)){
            throw "Improper array!";
        }else if ((index > array.size) || (index < 0) || !index){
            throw "Index out of bounds!"
        }else{
            array.splice(index, 1);
            return array;
        }
    },
    
    range: function (end, value){
        // Creates a new numbered array starting at 0 increasing by one up to, 
        //but not including the end argument. The value argument is optional, but when specified 
        //each element will be set to that value.
        if(end === undefined || typeof end !== "number" || !end){
            throw "Invalid input for end value!"
        }else if(end < 1){
            throw "Must be a positive number!"
        }else if(value === undefined){
            let x = [];
            for(i = 0;i<end;i++){
                x.push(i);
            };
            return x;
        }else{
            let x = [];
            for(i = 0;i<end;i++){
                x.push(value);
            };
            return x;
        }
    },
    
    countElements: function (array){
        //Will return an object with the count of each unique element in the array.
        if (array === undefined){
            throw "Array does not exist";
        }else if (!Array.isArray(array)){
            throw "Improper array!";
        }else{
            const ob = { };
            for(i = 0; i<array.length;i++){
                if(!(array[i] in ob)){
                    ob[array[i]] = 1;
                }else{
                    ob[array[i]] += 1;
                }
            }
            return ob;
    
        }
    },
    
    isEqual: function (arrayOne, arrayTwo){
        //Given two arrays, check if they are equal in terms of size and elements and return a boolean.
        if (arrayOne === undefined || arrayTwo === undefined || arrayOne.length == 0 || arrayTwo.length == 0){
            throw "Array does not exist";
        }else if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)){
            throw "Improper array!";
        }else if(arrayOne.length != arrayTwo.length){
                return false;
        }else{
            let temp = true;
            for(i = 0; i < arrayOne.length;i++){
                temp = (temp && (arrayOne[i] === arrayTwo[i]));
            }
            return temp;
        }
    }
}

// function head(array) {
//     if (array === undefined || array.length == 0){
//         throw "Array does not exist";
//     }else if (!Array.isArray(array)){
//         throw "Improper array!";
//     }else{
//         return array[0];
//     }
// };
// console.log(head());

// function last(array){
//     if (array === undefined || array.length == 0){
//         throw "Array does not exist";
//     }else if (!Array.isArray(array)){
//         throw "Improper array!";
//     }else{
//         return array[array.length-1];
//     }
// };
// console.log(last([1,2,3]));

// function remove(array, index) {
//     if (array === undefined || array.length == 0){
//         throw "Array does not exist";
//     }else if (!Array.isArray(array)){
//         throw "Improper array!";
//     }else if ((index > array.size) || (index < 0) || !index){
//         throw "Index out of bounds!"
//     }else{
//         array.splice(index, 1);
//         return array;
//     }
// };
// console.log(remove([1,2,3], 3));

// function range(end, value){
//      if(end === undefined || typeof end !== "number" || !end){
//     throw "Invalid input for end value!"
// }else if(end < 1){
//     throw "Must be a positive number!"
// }else if(value === undefined){
//     let x = [];
//     for(i = 0;i<end;i++){
//         x.push(i);
//     };
//     return x;
// }else{
//     let x = [];
//     for(i = 0;i<end;i++){
//         x.push(value);
//     };
//     return x;
// }
// };
// console.log(range(4, "hi"));

// function countElements(array){
//     if (array === undefined){
//         throw "Array does not exist";
//     }else if (!Array.isArray(array)){
//         throw "Improper array!";
//     }else{
//         const ob = { };
//         for(i = 0; i<array.length;i++){
//             if(!(array[i] in ob)){
//                 ob[array[i]] = 1;
//             }else{
//                 ob[array[i]] += 1;
//             }
//         }
//         return ob;

//     }
// };

// console.log(countElements([13,13,13, "hello", true, true]));

// function isEqual(arrayOne, arrayTwo){
//     if (arrayOne === undefined || arrayTwo === undefined || arrayOne.length == 0 || arrayTwo.length == 0){
//         throw "Array does not exist";
//     }else if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)){
//         throw "Improper array!";
//     }else if(arrayOne.length != arrayTwo.length){
//             return false;
//     }else{
//         let temp = true;
//         for(i = 0; i < arrayOne.length;i++){
//             temp = (temp && (arrayOne[i] === arrayTwo[i]));
//         }
//         return temp;
//     }
// };

// console.log(isEqual([1, 2, 3], [1,"2",3]));

