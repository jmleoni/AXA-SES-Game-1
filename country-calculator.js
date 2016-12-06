module.exports = Countries;

function Countries () {
var countryMap = {};
countryMap['EE'] = 13;
countryMap['LU'] = 13;
countryMap['GR'] = 06;
countryMap['DO'] = 13;
countryMap['IT'] = 12;
countryMap['BG'] = 11;
countryMap['IM'] = 12;
countryMap['HM'] = 07;
countryMap['SE'] = 12;
countryMap['GB'] = 11;
countryMap['PA'] = 16;
countryMap['PN'] = 12;
countryMap['QA'] = 16;
countryMap['RO'] = 13;
countryMap['TH'] = 16;
countryMap['KP'] = 69;
countryMap['LT'] = 07;
countryMap['UY'] = 16;
countryMap['FI'] = 08;
countryMap['HR'] = 13;
countryMap['LV'] = 06;
countryMap['IE'] = 11;
countryMap['MK'] = 16;
countryMap['FR'] = 10;
countryMap['MT'] = 12;
countryMap['PT'] = 05;
countryMap['CH'] = 37;
countryMap['NL'] = 07;
countryMap['EG'] = 09;
countryMap['MX'] = 16;
countryMap['CY'] = 16;
countryMap['BE'] = 09;
countryMap['ES'] = 11;
countryMap['TD'] = 13;
countryMap['WF'] = 15;
countryMap['DE'] = 08;
countryMap['SK'] = 07;
countryMap['AT'] = 09;
countryMap['ZA'] = 16;
countryMap['CZ'] = 12;
countryMap['DK'] = 12;
countryMap['SI'] = 08;
countryMap['PL'] = 14;
countryMap['HU'] = 11;
countryMap['TW'] = 16;
countryMap['UK'] = 11;
return {
    map : function (countryCode) {
            return countryMap[countryCode] || 0;
    }
};
};
