//////////////////////////////////////////////////////
//  Code Wars: FILTERED LIST
//////////////////////////////////////////////////////

function filter_list(l) {
    let newList = [];
    for (let x=0; x<l.length; x++) {
        if (typeof(l[x]) == "number") {
            newList.push(l[x]);
        }
    }
    return newList;
}

console.log("Filter [1,2,'a','b']:",filter_list([1,2,'a','b']));
console.log("Filter [1,'a','b',0,15]:",filter_list([1,'a','b',0,15]));
console.log("Filter [1,2,'aasf','1','123',123]:",filter_list([1,2,'aasf','1','123',123]));