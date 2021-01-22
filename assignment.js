// https://github.com/svn5969/assignment-js
/* 1:- Kilometer TO Meter */

function kilometerToMeter(kilometer){
    var meter = kilometer/1000
    return meter
}
var svnMeter = kilometerToMeter(1500)
console.log(svnMeter)

/* 2:- Budget Calculator */
function budgetCalculator(watch,phone,laptop){
    var total=(50*20) + (100*10) + (150*5)
    return total
}
var totalprice = budgetCalculator()
console.log(totalprice)

/* 3:- Hotel Price */

function hotelCost(slot){
    cost = 100;
    if( slot <= 10){
        cost = slot * 100;
    }
    else if( slot <= 20){
        var firstSlot = 10 * 100;
        var remainingSlot = slot - 10; 
        var secondSlot = remainingSlot * 80;
        cost = firstSlot + secondSlot;
    }
    else{
        var firstSlot = 10 * 100;
        var secondSlot = 10 * 80;
        var remainingSlot = slot - 20;
        var lastPeriodDays = remainingSlot * 50;
        cost = firstSlot + secondSlot + lastPeriodDays;
    }
    return cost;
    }

/* 4:- Mega Friend */
function megaFriend(names){
    var bignamefrnd=[0]
    for(var i=0;i<names.length;i++){
        var element=names[i]
    if(element.length>bignamefrnd.length){
        bignamefrnd =element;
    }

}
return bignamefrnd
}
var showname = megaFriend(["jack","robart","illiana"])
console.log(showname)
  /* end */
  






