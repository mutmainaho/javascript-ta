// complete the function
function palindrom(str) {
  // code goes here
  str = str.lowerCase();
  var size = str.length - 1;
  for (var i = 0; i < Math.floor(size / 2); i++) {
    if (str[i] !== str[size]) {
      return false;
    }
    size--;
  }
  return true;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
