logTitle("Rest parameters - arrays");

var cold = ['autumn', 'winter'];
var warm = ['spring', 'summer'];

var coldAndWarm = [...cold, ...warm];

//array clone
var coldWarmPushTest1 = [...cold];
var coldWarmPushTest2 = [...cold];

coldWarmPushTest1.push(...warm);
coldWarmPushTest2.push(warm);

log(coldAndWarm);
log(coldWarmPushTest1);
log(coldWarmPushTest2);


logTitle("Array destructure");

var seasons = ['winter', 'spring', 'summer', 'autumn'];
var coldSeason, otherSeasons;

[coldSeason, ...otherSeasons] = seasons;

log(seasons);
log(coldSeason);
log(otherSeasons);
