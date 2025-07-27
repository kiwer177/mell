<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hai Amel 💖</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(to right, #fce4ec, #f8bbd0);
      font-family: 'Comic Sans MS', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }

    .login-box {
      background: white;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      text-align: center;
      animation: pop 1s ease-out;
      position: relative;
    }

    .login-box h2 {
      color: #ec407a;
      margin-bottom: 20px;
      animation: fadeInDown 1s ease-out;
    }

    .login-box input {
      padding: 10px;
      width: 100%;
      margin-bottom: 15px;
      border-radius: 10px;
      border: 1px solid #ccc;
    }

    .login-box button {
      padding: 10px 20px;
      background: #ec407a;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
    }

    .login-box button:hover {
      background: #d81b60;
    }

    .romantic-message {
      margin-top: 20px;
      font-size: 14px;
      color: #555;
      animation: fadeIn 2s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    @keyframes fadeInDown {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes pop {
      0% {
        transform: scale(0.7);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .love {
      position: absolute;
      font-size: 25px;
      color: #ff4081;
      animation: float 4s linear infinite;
    }

    @keyframes float {
      0% {
        transform: translateY(100vh);
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0;
      }
    }
  </style>
</head>
<body>

  <div class="login-box">
    <h2>Login Dulu Ya Amel 💌</h2>
    <input type="text" placeholder="Masukkan nama kamu...">
    <input type="password" placeholder="Password rahasia...">
    <button onclick="alert('Selamat datang cintaku, Amel 💖')">Masuk</button>

    <div class="romantic-message">
      💬 "Cinta itu sederhana, seperti halaman ini... khusus aku buat hanya untuk kamu, Amel 💘"<br>
      💬 "Kamu bukan cuma pengunjung, tapi pemilik hati yang paling dalam."
    </div>
  </div>

  <!-- Hati-hati berterbangan -->
  <script>
    function createHearts() {
      const heart = document.createElement("div");
      heart.classList.add("love");
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }

    setInterval(createHearts, 500);
  </script>
</body>
</html>