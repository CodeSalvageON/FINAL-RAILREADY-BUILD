setInterval(function () {
  fetch ("/cf")
  .then(response => response.text())
  .then(data => {
    document.getElementById("cf-global").innerText = "Highest Score: " + data;
  })
  .catch(error => {
    throw error;
  });
}, 500);

$("#reel-btn").click(function () {
  const random_num = Math.floor(Math.random() * 101);

  fetch ("/fish", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      score : random_num
    })
  })
  .then(response => response.text())
  .then(data => {
    if (data === "win") {
      alert("You now hold the top Couch Fishing score for today. Congrats!");
    }

    document.getElementById("cf-score").innerText = "Your Score: " + random_num;
  })
  .catch(error => {
    throw error;
  });
});