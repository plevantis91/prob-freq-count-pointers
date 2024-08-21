// add whatever parameters you deem necessary
function countPairs(arr) {
    let count = 0;
    const set = new Set(arr);
        for(let num of arr){
            set.delete(num);
            if (set.has(target - num)) count++;
        }
    return count;
}
