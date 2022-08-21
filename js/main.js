function getRandomPositiveInteger(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Not number in arguments (valid type for arguments - number)');
  }

  if (min < 0 || max < 0) {
    throw new Error('Negative number in arguments (valid numbers for arguments >= 0)');
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

getRandomPositiveInteger(4, 11);
checkStringLength('', 140);
