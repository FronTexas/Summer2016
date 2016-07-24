/**
 * Created by fahrankamili on 6/5/16.
 */

var a = [1,2,3,4]
console.log(powerSet(a));

function powerSet(a){
    console.log('In powerset');
    var ret = [];
    for(var i = -1;i< a.length;i++){
        if(i == -1){
            ret.push([]);
        }else{
            var newSubset = add(ret,a[i]);
            for (var j in newSubset){
                ret.push(newSubset[j])
            }
        }
    }
    return ret;
}

function add(arr,e){
    /*
    *
    * arr = [[],[a0]];
    * e = a1
    * toReturn = [[a1],[a0,a1]]
    * */
    var dup = arr.slice(0); // m
    for (var i in dup){ // m
        dup[i].push(e);
    }
    return dup;
}
