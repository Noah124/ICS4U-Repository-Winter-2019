function rot13(str) { // LBH QVQ VG!
  
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
  str = str.split("");

  for(var i = 0; i <str.length; i++){
    for(var j = 0; j < alphabet.length; j++) {
      if(str[i] == alphabet[j]) {
        str[i] = alphabet[j+13];
        console.log(str)
        j = alphabet.length+1;
      }

    }
  }

  //console.log(str);

  str = str.join("");

  //console.log(str);

  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
