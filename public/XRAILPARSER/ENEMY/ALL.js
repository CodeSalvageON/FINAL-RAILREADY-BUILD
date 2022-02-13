let wiiu_owner_collision = false;
let suicide_bot_collision = false;
let dicksucker_collision = false;
let hatch_collision = false;
let security_collision = false;
let principle_collision = false;

const blood_sound = document.getElementById("bloody");
const ak_sound = document.getElementById("ak");
const blast_sound = document.getElementById("blast");
const metal_bounce = document.getElementById("metal_bounce");
const shotgun_sound = document.getElementById("shotgun");
const spray_sound = document.getElementById("spray");

// Enemy IDS 
let wiiu_owner_health = 100;
const wiiu_sprite = document.getElementById("wiiu-sprite1");
let wiiu_owner_active = false;

let suicide_bot_health = 250;
const suicide_bot_sprite = document.getElementById("suicidebot-sprite1");
let suicidebot_active = false;

let dicksucker_health = 100;
const dicksucker_sprite = document.getElementById("dicksucker-sprite1");
let dicksucker_active = false;

let hatch_health = 300;
let hatch_active = false;

let security_health = 320;
const security_sprite = document.getElementById("security-sprite1");
let security_active = false;

let principle_health = 350;
const principle_sprite = document.getElementById("principle-sprite1");
let principle_active = false;

let ceo_health = 100;

function wiiu_owner_DEATH () {
  wiiu_owner_active = false;
  usage_status.innerText = "+160 points";
  r_score = r_score + 160;
  $("#wiiu-sprite1").hide();

  setTimeout(function () {
    usage_status.innerText = "";
  }, 700);

  renderCh1_2();
}

function suicide_bot_DEATH () {
  suicidebot_active = false;
  usage_status.innerText = "+160 points";
  r_score = r_score + 160;
  $("#suicidebot-sprite1").hide();

  setTimeout(function () {
    usage_status.innerText = "";
    renderCh1_3();
  }, 700);
}

function dicksuckerDEATH () {
  dicksucker_active = false;
  usage_status.innerText = "+160 points";
  r_score = r_score + 160;

  setTimeout(function () {
    usage_status.innerText = "";
    renderCh2_2();
  }, 700);
}

function hatchDEATH () {
  hatch_active = false;
  usage_status.innerText = "+160 points";
  r_score = r_score + 160;
  renderCh2_4();

  setTimeout(function () {
    usage_status.innerText = "";
  }, 700);
}

function securityDEATH () {
  security_active = false;
  usage_status.innerText = "+160 points";
  r_score = r_score + 160;
  $("#security-sprite1").hide();

  setTimeout(function () {
    usage_status.innerText = "";
    renderCh3_2();
  }, 700);
}

function principalDEATH () {
  principle_active = false;
  usage_status.innerText = "+160 points";
  r_score = r_score + 160;
  $("#principal-sprite1").hide();

  setTimeout(function () {
    usage_status.innerText = "";
    renderCh3_3();
  }, 700);
}

function takeDamage (dmg) {
  health = health - parseInt(dmg);
  countHealth();

  window_canvas.classList.add("shake");

  setTimeout(function () {
    window_canvas.classList.remove("shake");
  }, 500);
}

setInterval(function () {
  if (collision($("#crosshair"), $("#wiiu-sprite1"))) {
    wiiu_owner_collision = true;
  }

  else {
    wiiu_owner_collision = false;
  }

  if (collision($("#crosshair"), $("#suicidebot-sprite1"))) {
    suicide_bot_collision = true;
  }

  else {
    suicide_bot_collision = false;
  }

  if (collision($("#crosshair"), $("#rail-canvas"))) {
    hatch_collision = true;
  }

  else {
    hatch_collision = false;
  }

  if (collision($("#crosshair"), $("#security-sprite1"))) {
    security_collision = true;
  }

  else {
    security_collision = false;
  }

  if (collision($("#crosshair"), $("#principal-sprite1"))) {
    principle_collision = true;
  }

  else {
    principle_collision = false;
  }

  if (is_firing === true && wiiu_owner_collision === true) {
    if (wiiu_owner_active === false) {
      return false;
    }

    if (weapon_type === "pistol") {
      wiiu_owner_health = wiiu_owner_health - 10;

      wiiu_sprite.filter = "brightness(1.75)";
      blood_sound.cloneNode(true).play();
      $("#wiiu-sprite1").hide();

      setTimeout(function () {
        wiiu_sprite.filter = "brightness(1.75)";
        
        if (wiiu_owner_health < 1 || wiiu_owner_active === false) {
          // PASS 
        }

        else {
          $("#wiiu-sprite1").show();
        }
      }, 100);

      if (wiiu_owner_health < 1) {
        wiiu_owner_DEATH();
      }
    }
  }

  if (is_firing === true && suicide_bot_collision === true) {
    if (suicidebot_active === false) {
      return false;
    }

    if (weapon_type === "pistol") {
      suicide_bot_health = suicide_bot_health - 10;

      blood_sound.cloneNode(true).play();
      $("#suicidebot-sprite1").hide();

      setTimeout(function () {
        
        if (suicide_bot_health < 1 || suicidebot_active === false) {
          // PASS 
        }

        else {
          $("#suicidebot-sprite1").show();
        }
      }, 100);

      if (suicide_bot_health < 1) {
        suicide_bot_DEATH();
      }
    }
  }

  if (is_blocking === true) {
    dicksucker_health = dicksucker_health - 5;

    if (dicksucker_health < 1) {
      dicksuckerDEATH();
    }
  }

  if (is_firing === true && hatch_collision === true) {
    if (weapon_type === "assault_rifle") {
      if (hatch_active === false) {
        // Do nothing
      }

      else {
        hatch_health = hatch_health - 20;
        metal_bounce.cloneNode(true).play();

        if (hatch_health < 1) {
          if (hatch_active === false) {
            return false;
          } 

          hatchDEATH();
        }
      }
    }
  }

  if (is_firing === true && security_collision === true) {
    if (security_active === false) {
      return false;
    }
  
    if (weapon_type === "assault_rifle") {
      security_health = security_health - 20;

      blood_sound.cloneNode(true).play();
      $("security-sprite1").hide();

      setTimeout(function () {
        if (security_health < 1 || security_active === false) {
          // PASS 
        }

        else {
          $("#security-sprite1").show();
        }
      }, 100);

      if (security_health < 1) {
        securityDEATH();
      }
    }
  }

  if (is_firing === true && principle_collision === true) {
    if (principle_active === false) {
      return false;
    }

    if (weapon_type === "assault_rifle") {
      principle_health = principle_health - 20;

      blood_sound.cloneNode(true).play();
      $("principal-sprite1").hide();

      setTimeout(function () {
        if (principle_health < 1 || principle_active === false) {
          // PASS 
        }

        else {
          $("#principal-sprite1").show();
        }
      }, 100);

      if (principle_health < 1) {
        principalDEATH();
      }
    }
  }
}, 100);

setInterval(function () {
  if (is_firing === false && wiiu_owner_collision === false) {
    if (wiiu_owner_active === false) {
      return false;
    }

    ak_sound.cloneNode(true).play();

    wiiu_sprite.src = "/RAILREADY/ENEMIES/WIIUOWNER/ch1_enemy_1_frame2.png";

    setTimeout(function () {
      wiiu_sprite.src = "/RAILREADY/ENEMIES/WIIUOWNER/ch1_enemy_1_frame1.png";
    }, 500);

    takeDamage(10);
  }

  else if (is_firing === false && wiiu_owner_collision === true) {
    if (wiiu_owner_active === false) {
      return false;
    }

    ak_sound.cloneNode(true).play();

    wiiu_sprite.src = "/RAILREADY/ENEMIES/WIIUOWNER/ch1_enemy_1_frame2.png";

    setTimeout(function () {
      wiiu_sprite.src = "/RAILREADY/ENEMIES/WIIUOWNER/ch1_enemy_1_frame1.png";
    }, 500);

    takeDamage(10);
  }

  else if (is_firing === true && wiiu_owner_collision === true) {
    if (wiiu_owner_active === false) {
      return false;
    }

    ak_sound.cloneNode(true).play();

    wiiu_sprite.src = "/RAILREADY/ENEMIES/WIIUOWNER/ch1_enemy_1_frame2.png";

    setTimeout(function () {
      wiiu_sprite.src = "/RAILREADY/ENEMIES/WIIUOWNER/ch1_enemy_1_frame1.png";
    }, 500);

    takeDamage(10);
  }
}, 2000);

setInterval(function () {
  if (is_firing === false && suicide_bot_collision === true) {
    if (suicidebot_active === false) {
      return false;
    }

    blast_sound.cloneNode(true).play();

    $("#suicidebot-sprite1").hide();
    takeDamage(20);

    suicidebot_active = false;
    suicide_bot_DEATH();
  }

  else if (is_firing === true && suicide_bot_collision === false) {
    if (suicidebot_active === false) {
      return false;
    }

    blast_sound.cloneNode(true).play();

    $("#suicidebot-sprite1").hide();
    takeDamage(20);

    suicidebot_active = false;
    suicide_bot_DEATH();
  }

  else if (is_firing === false && suicide_bot_collision === false) {
    if (suicidebot_active === false) {
      return false;
    }

    blast_sound.cloneNode(true).play();

    $("#suicidebot-sprite1").hide();
    takeDamage(20);

    suicidebot_active = false;
    suicide_bot_DEATH();
  }
}, 10000);

setInterval(function () {
  if (is_blocking === false) {
    if (dicksucker_active === false) {
      return false;
    }

    blood_sound.cloneNode(true).play(); 
    takeDamage(15);
  }
}, 2000);


setInterval(function () {
  if (security_active === false) {
      return false;
    }

    shotgun_sound.cloneNode(true).play();

    security_sprite.src = "/RAILREADY/ENEMIES/SECURITY/securityguard2.png";

    setTimeout(function () {
      wiiu_sprite.src = "/RAILREADY/ENEMIES/SECURITY/securityguard.png";
    }, 500);

    takeDamage(30);
}, 2000);

setInterval(function () {
  if (principle_active === false) {
    return false;
  }

  spray_sound.cloneNode(true).play(); 

  takeDamage(20);
}, 2000);