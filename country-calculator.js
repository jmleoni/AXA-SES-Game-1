module.exports = Countries;

function Countries () {
var countryMap = {};
countryMap['EE'] = 1.3;
countryMap['LU'] = 1.3;
countryMap['GR'] = 0.6;
countryMap['DO'] = 1.3;
countryMap['IT'] = 1.2;
countryMap['BG'] = 1.1;
countryMap['IM'] = 1.2;
countryMap['HM'] = 0.7;
countryMap['SE'] = 1.2;
countryMap['GB'] = 1.1;
countryMap['PA'] = 1.6;
countryMap['PN'] = 1.2;
countryMap['QA'] = 1.6;
countryMap['RO'] = 1.3;
countryMap['TH'] = 1.6;
countryMap['KP'] = 6.9;
countryMap['LT'] = 0.7;
countryMap['UY'] = 1.6;
countryMap['FI'] = 0.8;
countryMap['HR'] = 1.3;
countryMap['LV'] = 0.6;
countryMap['IE'] = 1.1;
countryMap['MK'] = 1.6;
countryMap['FR'] = 1.0;
countryMap['MT'] = 1.2;
countryMap['PT'] = 0.5;
countryMap['CH'] = 3.7;
countryMap['NL'] = 0.7;
countryMap['EG'] = 0.9;
countryMap['MX'] = 1.6;
countryMap['CY'] = 1.6;
countryMap['BE'] = 0.9;
countryMap['ES'] = 1.1;
countryMap['TD'] = 1.3;
countryMap['WF'] = 1.5;
countryMap['DE'] = 0.8;
countryMap['SK'] = 0.7;
countryMap['AT'] = 0.9;
countryMap['ZA'] = 1.6;
countryMap['CZ'] = 1.2;
countryMap['DK'] = 1.2;
countryMap['SI'] = 0.8;
countryMap['PL'] = 1.4;
countryMap['HU'] = 1.1;
countryMap['TW'] = 1.6;
countryMap['UK'] = 1.1;
return {
    map : function (countryCode) {
            return countryMap[countryCode] || 0;
    }
};
};
