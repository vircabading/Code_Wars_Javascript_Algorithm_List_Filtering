//////////////////////////////////////////////////////
//  Code Wars: FILTERED LIST
//////////////////////////////////////////////////////

function filter_list(l) {
    let newList = [];
    for (let x=0; x<l.length; x++) {
        console.log (typeof(l[x]));
        if (typeof(l[x]) == "number") {
            newList.push(l[x]);
        }
    }
    return newList;
}

console.log("Filter [1,2,'a','b']:",filter_list([1,2,'a','b']));