// add whatever parameters you deem necessary
function constructNote(msg,letters) {
    const letterCount = {};

    for(let char of letters){
        letterCount[char] = (letterCount[char] || 0) + 1;
    }
    for (let char of msg) {
        if(!letterCount[char]) return false;
        letterCount[char] -= 1;
    }
    return true;
}
