/*
** to take an array of string and return their integer length
**
** @param {String[]} param_1
** @return {integer[]}
**
*/


function my_count_on_it(param_1) {
    var size =[];
    for(let i = 0; i < param_1.length; i++){
        size.push(param_1[i].length);
    }
    return size;
};
