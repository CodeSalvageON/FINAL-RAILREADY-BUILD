const crosshair = document.getElementById("crosshair");
const gun_fire = document.getElementById("gun_fire");

const health_counter = document.getElementById("health-counter");
const ammo_counter = document.getElementById("ammo-counter");

let weapon_type = "pistol";
let rounds = 20;
let health = 100;
let is_firing = false;
let is_blocking = false;
let is_showing = false;

// Rockets

let is_rocket_1_active = true;
let is_rocket_2_active = false;
let is_rocket_3_active = false;

crosshair.style.width = "50px";
crosshair.style.height = "50px";
gun_fire.style.width = "50px";
gun_fire.style.height = "50px";

$("#gun_fire").hide();
let r_score = 0;

function parseCrosshair () {
  crosshair.src = crosshairTag;
  gun_fire.src = muzzleflashTag;
}

function countAmmo () {
  if (weapon_type === "pistol") {
    rounds = 20;
    ammo_counter.innerText = "Pistol Rounds: " + rounds;
  }

  else if (weapon_type === "assault_rifle") {
    rounds = 30;
    ammo_counter.innerText = "Assault Rifle Rounds: " + rounds;
  }
}

function countHealth () {
  health_counter.innerText = "Organ Functions: " + health + "%";
}

function fireGun () {
  $("#gun_fire").show();
  is_firing = true;

  if (weapon_type === "pistol") {
    setTimeout(function () {
      $("#gun_fire").hide();
      is_firing = false;
    }, 200);
  }

  else if (weapon_type === "assault_rifle") {
    setTimeout(function () {
      $("#gun_fire").hide();
      is_firing = false;
    }, 150);
  }

  if (weapon_type === "pistol") {
    rounds = rounds - 1;
    ammo_counter.innerText = "Pistol Rounds: " + rounds;

    if (rounds < 1) {
      game_mode = 11;
      ammo_counter.innerText = "Reloading...";

      setTimeout(function () {
        game_mode = 0;
        rounds = 20;
        ammo_counter.innerText = "Pistol Rounds: " + rounds;
      }, 3000);
    }
  }

  else if (weapon_type === "assault_rifle") {
    rounds = rounds - 1;
    ammo_counter.innerText = "Assault Rifle Rounds: " + rounds;

    if (rounds < 1) {
      game_mode = 11;
      ammo_counter.innerText = "Reloading...";

      setTimeout(function () {
        game_mode = 0;
        rounds = 30;
        ammo_counter.innerText = "Assault Rifle Rounds:" + rounds;
      }, 3000);
    }
  }
}

function block () {
  is_blocking = true;
}

setInterval(function () {
  is_blocking = false;
}, 1000);

$(document).mousemove(function (event) {
  $("#gun_fire").css({
    left : event.clientX,
    top : event.clientY
  });
  $("#crosshair").css({
    left : event.clientX,
    top : event.clientY
  });
});

$(document).keydown(function (event) {
  if (game_mode === 0) {
    if (event.which === 65) {
      if (is_firing === true) {
        return false;
      }

      plr16_sound.cloneNode(true).play();
      fireGun();
    }

    else if (event.which === 68) {
      block();
      r_score = r_score + 1;
    }
  }

  else if (game_mode === 5) {
    if (event.which === 83) {
      if (is_showing === true) {
        return false;
      }

      renderCh2_3();
      is_showing = true;
    }
  }

  else if (game_mode === 6) {
    if (event.which === 83) {
      if (is_rocket_1_active === true) {
        renderCh4_2();
      }

      else if (is_rocket_2_active === true) {
        renderCh4_3();
      }

      else if (is_rocket_3_active === true) {
        renderCh4_4();
      }
    }
  }

  else if (game_mode === 7) {
    if (event.which === 83) {
      renderCh4_6();
    }
  }

  else if (game_mode === 8) {
    if (event.which === 83) {
      renderCh4_8();
    }
  }
});

$(document).mousedown(function (event) {
  if (game_mode === 0) {
    plr16_sound.cloneNode(true).play();
    fireGun();
  }
});

const hpInt = setInterval(function () {
  if (health < 1) {
    clearInterval(hpInt);
    alert("Game Over....");
    location = "";
  }
}, 100);

parseCrosshair();
countAmmo();
countHealth();