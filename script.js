const cookie = document.getElementById("cookie");
const msg = document.getElementById("msg");

const fortunes = [
  "勇敢的人先享受世界",
  "你終會成為你想成為的人",
  "心想事成",
  "永遠幸運",
  "只要有心哪裡都不遠",
  "一切都會好的!"
];

cookie.onclick = function () {
  cookie.innerText = "🍀";

  const random = Math.floor(Math.random() * fortunes.length);
  msg.innerText = fortunes[random];

  setTimeout(() => {
    cookie.innerText = "🥠";
  }, 2000);
};