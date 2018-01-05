;(function(){
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNcFyocem97d1fF_ftgMG8j-XQWgUIjQY",
  authDomain: "laboratoria-test-a71b4.firebaseapp.com",
  databaseURL: "https://laboratoria-test-a71b4.firebaseio.com",
  projectId: "laboratoria-test-a71b4",
  storageBucket: "laboratoria-test-a71b4.appspot.com",
  messagingSenderId: "1002692745055"
};
firebase.initializeApp(config);


$btn = $('#butto');

$user = null;

function signInGoogle() {
  console.log('hola')
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    var user = result.user;
    // ...
    console.log($user);
  })
}


$btn.on('click', signInGoogle);

})();