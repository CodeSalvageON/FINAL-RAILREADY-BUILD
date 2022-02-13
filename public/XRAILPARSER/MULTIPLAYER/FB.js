setInterval(function () {
  fetch ("/fb")
  .then(response => response.text())
  .then(data => {
    const data_thing = data.split("||");

    if (data_thing[0] === null || data_thing[0] === undefined || data_thing[0] === "") {
      document.getElementById("fb-global").innerText = "Current Opponent: Nobody Is Online!";
    }

    else {
      document.getElementById("fb-global").innerText = "Current Opponent: " + data_thing[0] + " with a score of " + data_thing[1];
    }
  })
  .catch(error => {
    throw error;
  });
}, 500);

$("#batter-up").click(function () {
  const random_num = Math.floor(Math.random() * 101);
  const fb_name = prompt("Screen Name: ");

  fetch ("/frog", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      score : random_num,
      name : fb_name
    })
  })
  .then(response => response.text())
  .then(data => {
    if (data === "win") {
      alert("You win!");

      document.getElementById("fb-status").innerText = "Dead Frog! Home Run!";
    }

    else {
      document.getElementById("fb-status").innerText = "Strike!";
    }
    
  })
  .catch(error => {
    throw error;
  });
});