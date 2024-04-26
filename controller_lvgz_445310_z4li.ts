const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
true - 19,20,26,42,78,84,42,45,81,4,59,86,53,51,85,77,19,63,22,14,17,72,92,27,85,33,93,99,43,74,69,72,67,44,51,89,55,64,34,61,1,62,32,50,94,89,85,76,93,48,0,9,70,96,84,7
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
6,68,5,37,59,77,77,85,64,73,65,41,96,73,17,87,75,24,87,70,38,74,13,10,1,33,36,0,19,24,23,65,11,74,31,2,16,71,49,64,90,35,36,5,94,94,23,19,79,96,88,52,50,40,33,92,29 + banana
const reverseString = str => str.split("").reverse().join("");

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
false - 84

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const variableName = getRandomNumber();
orange

const sum = (a, b) => a + b;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
true / banana
const findLargestNumber = numbers => Math.max(...numbers);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
53 - 39
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
