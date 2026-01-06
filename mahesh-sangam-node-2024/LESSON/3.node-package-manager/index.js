const lodash = require('lodash');

const names = ['Mahesh', 'Sangam', 'Node', 'JS'];

const upperCase = lodash.map(names, lodash.upperCase);
console.log('upperCase Names:', upperCase);