function bringSingara(taka) {
    console.log('singara er dam', taka);
    console.log('mama singara den');
    var singaraprice = 10;
    var singaraQuantity = taka / singaraprice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);
bringSingara(money);
console.log('ai nen singara', singara);