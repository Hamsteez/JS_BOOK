function extractLanguage(phrase) {
  console.log(phrase.charAt(0) + phrase.charAt(1));
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'