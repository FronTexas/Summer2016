/**
 * Created by fahrankamili on 6/5/16.
 */


Loc = function(i,j){
    this.i = i;
    this.j = j;
}

ret = {
    path:[],
    found:false
}
r = 0;
c = 0;
function findPath(i,j,ret){
    if (i == r && c == j){
        ret.path.push(new Loc(i,j));
        ret.found = false;
        return;
    }else{
        if (!isLegal(i,j)) return
        ret.path.add(new Loc(i,j));

        findPath(r,c,i+1,j,ret)

        if (ret.found) return;

        findPath(r,c,i,j+1,ret);

        if (ret.found) return;
    }
}

function isLegal(i,j){
    return canVisit(i,j) && i < r && j < c;
}

function canVisit(i,j){
    return true;
}