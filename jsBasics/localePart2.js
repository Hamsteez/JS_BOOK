function extractRegion(phrase) {
  console.log(phrase.charAt(3) + phrase.charAt(4));
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'