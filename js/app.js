var config = {
  apiKey: "AIzaSyDz6Bsp6T9TuR7gYIg5i-tTScsbIFeVyYo",
  authDomain: "laboratoria-2a397.firebaseapp.com",
  databaseURL: "https://laboratoria-2a397.firebaseio.com",
  projectId: "laboratoria-2a397",
  storageBucket: "laboratoria-2a397.appspot.com",
  messagingSenderId: "617399103792"
};

firebase.initializeApp(config);

var $btn = $('#butto');

var $user = null;

function signInGoogle() {
  console.log('hola')
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    $user = result.user;

    console.log($user);
  })
}

$btn.on('click', signInGoogle);
