var avegofnumbers = function (chkavg) {
    var Avg = 0;
    for (var i = 0; i = chkavg.length - 1; i++) {
        Avg += chkavg[i];
    }
    return Avg / chkavg.length;
};
console.log("Average of list :" + avegofnumbers([10, 55, 25, 5, 6]));
