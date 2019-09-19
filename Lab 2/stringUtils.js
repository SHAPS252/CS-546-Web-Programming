// Daniel Shapiro
// "I pledge my honor that I have abided by the Stevens Honor System." - Daniel Shapiro
module.exports = {
    capitalize: function (string){
        //Given a string, capitalize the first letter and lowercase the remaining characters.
        if(string === undefined){
            throw "Invalid string";
        }else if(typeof string !== "string"){
            throw "Improper input";
        }else{
            let str = string.charAt(0).toUpperCase();
            for(i = 1; i<string.length;i++){
                str += string.charAt(i).toLowerCase();
            }
            return str;
        }
    },
    
    repeat: function (string, num){
        //Given string and num, repeat the string num amount of times.
        if(string === undefined){
            throw "Invalid string";
        }else if(typeof string !== "string"){
            throw "Improper input";
        } else if(num === undefined || !num){
            throw "Invalid number";
        }else if(typeof num !== "number"){
            throw "Invalid number!";
        } else if(num < 0){
            throw "Must be positive number";
        }else{
            let str = "";
            for(i = 0; i< num; i++){
                str += string;
            }
            return str;
        }
    },
    
    countChars: function (string){
        //Return an object that has the mapping of a character and the amount of times it appears in a string.
        if(string === undefined){
            throw "Invalid string";
        }else if(typeof string !== "string"){
            throw "Improper input";
        }else{
            const ob = { };
            for(i = 0; i<string.length;i++){
                if(!(string[i] in ob)){
                    ob[string[i]] = 1;
                }else{
                    ob[string[i]] += 1;
                }
            }
            return ob;
        }
    }
}
// function capitalize(string){
//     if(string === undefined || typeof string == "number"){
//         throw "Invalid string";
//     }else{
//         let str = string.charAt(0).toUpperCase();
//         for(i = 1; i<string.length;i++){
//             str += string.charAt(i).toLowerCase();
//         }
//         return str;
//     }
// };

// console.log(capitalize(""));

// function repeat(string, num){
//     if(string === undefined || typeof string == "number"){
//         throw "Invalid string";
//     }else if(num === undefined || num < 0){
//         throw "Invalid number"
//     }else{
//         let str = "";
//         for(i = 0; i< num; i++){
//             str += string;
//         }
//         return str;
//     }
// };

// console.log(repeat('hi', 3));


// function countChars(string){
//     if(string === undefined || typeof string == "number"){
//         throw "Invalid string";
//     }else{
//         const ob = { };
//         for(i = 0; i<string.length;i++){
//             if(!(string[i] in ob)){
//                 ob[string[i]] = 1;
//             }else{
//                 ob[string[i]] += 1;
//             }
//         }
//         return ob;
//     }
// };
// console.log(countChars(""));