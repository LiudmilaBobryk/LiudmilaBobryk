const deepClone = obj => JSON.parse(JSON.stringify(obj));
60 + 59,57,31,82,71,44,68
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
