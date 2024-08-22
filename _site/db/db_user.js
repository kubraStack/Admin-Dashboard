var users = [
  {
    userId: 1,
    username: 'Mia',
    email: 'miaAdmin@info.com',
    password: '123456',
    image: '/images/profile-4.jpg'
  },
  {
    userId: 2,
    username: 'Mike',
    email: 'mikeAdmin@info.com',
    password: '123456',
    image: '/images/profile-1.jpg'
  },
  {
    userId: 3,
    username: 'Tomi',
    email: 'tomiAdmin@info.com',
    password: '123456',
    image: '/images/profile-2.jpg'
  },
  {
    userId: 4,
    username: 'Maya',
    email: 'mayaAdmin@info.com',
    password: '123456',
    image: '/images/profile-3.jpg'
  }
];


document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");

  if (loginForm) {
      loginForm.addEventListener("submit", function(e) {
          e.preventDefault();

          // Kullanıcı giriş bilgilerini kontrol et
          var enteredIdentifier = document.getElementById("userName").value;
          var enteredPassword = document.getElementById("password").value;

          var loggedInUser = users.find(user => (user.username === enteredIdentifier || user.email === enteredIdentifier) && user.password === enteredPassword);

          if (loggedInUser) {
              // Kullanıcı giriş yaptı, diğer sayfaya yönlendir
              localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser)); // Kullanıcı bilgilerini sakla
              window.location.href = '/index.html';
          } else {
              // Giriş başarısız
              Swal.fire({
                  title: "Error",
                  text: "Invalid username or password",
                  icon: "error",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK"
              });
          }
      });
  }
});
