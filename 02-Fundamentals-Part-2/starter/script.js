// reviewing functions

const calcAge = function (birthYeah) {
  return 2022 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

yearsUntilRetirement(1983, 'Gonzalo')
yearsUntilRetirement(1931, 'Pedro')