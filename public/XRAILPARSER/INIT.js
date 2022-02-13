document.getElementById("view-window").style.backgroundImage = "url('" + coverTag + "')";
document.getElementById("airhub").style.backgroundImage = "url('" + bg2Tag + "')";
document.getElementById("lighthouse").style.backgroundImage = "url('" + lighthouseTag + "')";
document.getElementById("campaign").style.backgroundImage = "url('" + helicopterTag + "')";
document.getElementById("shooting-range").style.backgroundImage = "url('" + rangeTag + "')";
document.getElementById("arcade-room").style.backgroundImage = "url('" + bg2Tag + "')";

$("#start-menu").hide();
$("#airhub").hide();
$("#lighthouse").hide();
$("#campaign").hide();
$("#shooting-range").hide();
$("#arcade-room").hide();
$("#other-worlds").hide();
$("#multiplayer-layer").hide();
$("#rail-canvas-div").hide();
$("#wiiu-sprite1").hide();
$("#suicidebot-sprite1").hide();
$("#dicksucker-sprite1").hide();
$("#security-sprite1").hide();
$("#principal-sprite1").hide();

$(document).keydown(function (event) {
  if (game_mode === 1) {
    if (event.which === 88) {
      $("#view-window").fadeOut(2000);
      game_mode = 10;

      setTimeout(function () {
        document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

        $("#view-window").fadeIn(2000);
        $("#air-radio").show();
      }, 2000);
    }
  }

  else if (game_mode === 10) {
    if (event.which === 82) {
      $("#air-radio").show();
    }
  }
});

$("#close-air-radio").click(function () {
  $("#air-radio").fadeOut(2000);

  if (game_pos === 1) {
    setTimeout(function () {
      $("#start-menu").fadeIn(2000);
    }, 2000);
  }
});

$("#campaign-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";
    
    $("#campaign").fadeIn(2000);
    $("#campaign-scroller").fadeIn(2000);
    $("#view-window").fadeIn(2000);
  }, 2000);
});

$("#airhub-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";
    
    $("#airhub").fadeIn(2000);
    $("#airhub-scroller").fadeIn(2000);
    $("#view-window").fadeIn(2000);
  }, 2000);
});

$("#lighthouse-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";

    $("#lighthouse").fadeIn(2000);
    $("#view-window").fadeIn(2000);
    $("#lighthouse-scroller").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-campaign").click(function () {
  game_pos = 1;

  $("#campaign").fadeOut(2000);
  $("#campaign-scroller").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-railready1").click(function () {
  $("#railready1").fadeOut(2000);
  document.getElementById("railready1-frame").src = document.getElementById("railready1-frame").src;
});

$("#railready1-button").click(function () {
  $("#railready1").fadeIn(2000);
});

$("#railready2-button").click(function () {
  $("#campaign-scroller").hide();
  document.getElementById("campaign").style.backgroundImage = "url('')";

  $("#rail-canvas-div").show();
  renderCutSceneOne();
});

$("#go-back-from-reccenter").click(function () {
  $("#reccenter").fadeOut(2000);
});

$("#reccenter-button").click(function () {
  $("#reccenter").fadeIn(2000);
});

$("#telescreener-button").click(function () {
  $("#telescreener-iframe").show();
});

$("#sim-button").click(function () {
  $("#sim-iframe").show(); 
});

$("#go-back-from-sim").click(function () {
  $("#sim-iframe").hide();
});

$("#go-back-from-telescreener").click(function () {
  $("#telescreener-iframe").hide();
});

$("#go-back-from-wiki").click(function () {
  $("#wiki-iframe").hide();
});

$("#wiki-button").click(function () {
  window.open("https://iready.miraheze.org/wiki/Main_Page");
});

$("#go-back-from-airhub").click(function () {
  game_pos = 1;
  
  $("#airhub").fadeOut(2000);
  $("#airhub-scroller").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-lighthouse").click(function () {
  game_pos = 1;

  $("#lighthouse").fadeOut(2000);
  $("#lighthouse-scroller").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#shooting-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";

    $("#shooting-range").fadeIn(2000);
    $("#view-window").fadeIn(2000);
    $("#range-modal").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-range").click(function () {
  game_pos = 1;

  $("#shooting-range").fadeOut(2000);
  $("#range-modal").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#arcade-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";

    $("#arcade-room").fadeIn(2000);
    $("#view-window").fadeIn(2000);
    $("#arcade-modal").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-arcade").click(function () {
  game_pos = 1;

  $("#arcade-room").fadeOut(2000);
  $("#arcade-modal").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#worlds-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";

    $("#other-worlds").fadeIn(2000);
    $("#view-window").fadeIn(2000);
    $("#other-worlds-modal").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-other-worlds").click(function () {
  game_pos = 1;

  $("#other-worlds").fadeOut(2000);
  $("#other-worlds-modal").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#multiplayer-button").click(function () {
  game_pos = 10;

  $("#view-window").fadeOut(2000);
  $("#start-menu").hide();

  setTimeout(function () {
    view_window.style.backgroundImage = "";

    $("#multiplayer-layer").fadeIn(2000);
    $("#view-window").fadeIn(2000);
    $("#multiplayer-modal").fadeIn(2000);
  }, 2000);
});

$("#go-back-from-multiplayer").click(function () {
  game_pos = 1;

  $("#multiplayer-layer").fadeOut(2000);
  $("#multiplayer-modal").hide();

  setTimeout(function () {
    document.getElementById("view-window").style.backgroundImage = "url('" + bg1Tag + "')";

    $("#view-window").fadeIn(2000);
    $("#start-menu").fadeIn(2000);
  }, 2000);
});

$("#airtv-button").click(function () {
  $("#airtv-modal").show();
});

$("#go-back-from-airtv").click(function () {
  $("#airtv-modal").hide();
});

$("#mtv-button").click(function () {
  $("#mtv-modal").show();
});

$("#go-back-from-mtv").click(function () {
  $("#mtv-modal").hide();
});

$("#vidya-button").click(function () {
  $("#vidya-modal").show();
});

$("#go-back-from-vidya").click(function () {
  $("#vidya-modal").hide();
});

$("#mondas-button").click(function () {
  $("#mondas-modal").show();
});

$("#go-back-from-mondas").click(function () {
  $("#mondas-modal").hide();
});

$("#borg-button").click(function () {
  $("#borg-modal").show();
});

$("#go-back-from-borg").click(function () {
  $("#borg-modal").hide();
});

$("#pharmacy-button").click(function () {
  window.open("https://sites.google.com/view/gamepharmacy/");
});

$("#skynet-button").click(function () {
  window.open("https://skynetunblocker.codesalvageon.repl.co/");
});

$("#leaderboards-button").click(function () {
  $("#leaderboard-modal").show();
});

$("#go-back-from-leaderboard").click(function () {
  $("#leaderboard-modal").hide();
});

$("#challenges-button").click(function () {
  window.open("https://railready2.codesalvageon.repl.co/challenges");
});

$("#cf-button").click(function () {
  $("#cf-modal").show();
});

$("#go-back-from-cf").click(function () {
  $("#cf-modal").hide();
});

$("#fb-button").click(function () {
  $("#fb-modal").show();
});

$("#go-back-from-fb").click(function () {
  $("#fb-modal").hide();
});