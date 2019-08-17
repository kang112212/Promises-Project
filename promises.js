var newUserObj;
var indexI = newUserObj;

let guessValue;
let getUsers = () => {
  guessValue = document.getElementById('guessInput').value;

  $.get("http://jsonplaceholder.typicode.com/users", (data) => {
    let newUserObj = data.find((user) => {
      return user.username === guessValue;
    });
    var brettsID = "";
    $.get('http://jsonplaceholder.typicode.com/users', function(data) {
      brettsID = data[newUserObj.id - 1].username;

      let userName = document.getElementById("userName");

      if (guessValue == brettsID) {
        userName.innerHTML = data[newUserObj.id - 1].username;
      } else {
        userName.innerHTML = 'Wrong User';
      }
    });
    let userEl = document.getElementById("name");
    $.get('http://jsonplaceholder.typicode.com/users', function(data) {
      userEl.innerHTML = data[newUserObj.id - 1].name;
    });

    let albumEl = document.getElementById("albumTitle");
    $.get('http://jsonplaceholder.typicode.com/albums', function(data) {
      albumEl.innerHTML = data[newUserObj.id - 1].title;
    });

    let postEl = document.getElementById("postTitle");
    $.get('http://jsonplaceholder.typicode.com/posts', function(data) {
      console.log(data[newUserObj.id - 1].title);
      postEl.innerHTML = data[newUserObj.id - 1].title;
    });

    function please(result) {
      try {
        if ((newUserObj == undefined)) {
          throw ('New exception');
        }
      } catch (err) {
        userName.innerHTML = 'I believe you have entered the wrong username. Please try again.';
        userEl.innerHTML = "";
        albumEl.innerHTML = "";
        postEl.innerHTML = "";
      }
    }
    please();
  });
};
