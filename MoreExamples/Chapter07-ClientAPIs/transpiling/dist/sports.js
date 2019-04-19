'use strict';

var sportsArray = [{ name: 'volleyball', duration: 'matches' }, { name: 'baseball', duration: 'innings' }, { name: 'football', duration: 'quarters' }, { name: 'hockey', duration: 'periods' }];

function logSports() {
    sportsArray.forEach(function (sport) {
        console.log('  ' + sport.name + ' is played in ' + sport.duration + ' \n        ');
    });
}

function returnSportsHTML() {
    var sportsInfo = '';
    sportsArray.forEach(function (sport) {
        sportsInfo += ' ' + sport.name + ' is played in ' + sport.duration + ' \n        <br>  ';
    });

    return sportsInfo;
}