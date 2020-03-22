module.exports = function repeater(str, options) {

    let resultStr = '';

    if(options.separator === undefined) options.separator = '+';
    if(options.additionSeparator === undefined) options.additionSeparator = '';
    if(options.repeatTimes === undefined) options.repeatTimes = 1;
    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if(options.addition !== undefined && 
        (typeof options.addition !== 'string')) options.addition = String(options.addition);

     if (options.additionRepeatTimes !== undefined && options.addition !== undefined) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            if (i !== 0) str += options.additionSeparator;
            str += options.addition
        }
    } else if (options.addition !== undefined) str += options.addition;

    if (options.repeatTimes === undefined) {
        resultStr += str;
        
    } else {
        for (let i = 0; i < options.repeatTimes; i++) {
            if (i !== 0) resultStr += options.separator;
            resultStr += str;
        }
    }
    return resultStr;
    };