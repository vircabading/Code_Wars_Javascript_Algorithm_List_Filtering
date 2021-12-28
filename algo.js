//////////////////////////////////////////////////////
//  Code Wars: FILTERED LIST
//////////////////////////////////////////////////////

function filter_list(l) {
    let newist = [];
    for (let x=0; x<l.length; x++) {
        console.log (typeof(l[x]));
        if (typeof(l[x]) == "number") {
            console.log("number found");
        }
    }
}

filter_list([1,2,'a','b']);