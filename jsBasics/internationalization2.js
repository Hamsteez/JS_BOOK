localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'


function localGreet(OgPhrase) {
  let lan = extractLanguage(OgPhrase);
  greet(lan, OgPhrase);
}


function greet(LanPhrase, OgPhrase) {
  switch (LanPhrase) {
    case 'en':
      let reg = extractRegion(OgPhrase);
      US(reg);
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    default:
      console.log('Haai!');
      break;
  }
}


function extractLanguage(phrase) {
  return (phrase.charAt(0) + phrase.charAt(1));
}
/*
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'
*/

function extractRegion(phrase) {
  return (phrase.charAt(3) + phrase.charAt(4));
}

function US(greeting) {
  switch (greeting) {
    case 'US':
      console.log('Hey!');
      break;
    case 'GB':
      console.log('Hello!');
      break;
    default:
      console.log('Howdy!');
      break;
  }
}
/*
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
*/