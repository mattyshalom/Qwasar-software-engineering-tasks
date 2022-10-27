/*
** printing average mark
** @param {String_integer[]} param_1
** @return {float}

**
*/


function my_average_mark(param_1) {
    let total = 0;
    let result = 0;
    for (const key of param_1) {
        if (param_1.length > 0) {
            total += (key['integer'])
            result=(total/param_1.length)
        }
    }
    return result.toFixed(1)
};
