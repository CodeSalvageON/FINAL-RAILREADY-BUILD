const window_canvas = document.getElementById("rail-canvas");
const window_render = window_canvas.getContext("2d");

const usage_status = document.getElementById("usage-status");
const ak_sound_1 = document.getElementById("ak");
const knife_throw = document.getElementById("knife_throw");
const kids_screaming = document.getElementById("kids_screaming");
const car_crash = document.getElementById("car_crash");
const missile_sound = document.getElementById("missile");
const xplode_sound = document.getElementById("xplode");
const fire_sound = document.getElementById("ch4_fire");
const glass_sound = document.getElementById("ch4_glass");

// Cutscene One Audio 

const guncrowd = document.getElementById("guncrowd");

function clearScreen () {
  window_render.clearRect(0, 0, window_canvas.width, window_canvas.height);
}

// Cutscene Four Audio

const mm1 = document.getElementById("mm1");
const mm2 = document.getElementById("mm2");

// Render Cut Scenes

function renderCutSceneOne () {
  const satireNotice = new Image(); 

  satireNotice.onload = function () {
    window_render.drawImage(satireNotice, 0, 0, 1000, 800);
  }
  satireNotice.src = "/RAILREADY/railready2notice.PNG";

  setTimeout(function () {
    $("#rail-canvas-div").fadeOut(2000);

    setTimeout(function () {
      clearScreen();

      const chapterOne = new Image();

      chapterOne.onload = function () {
        window_render.drawImage(chapterOne, 0, 0, 1000, 800);
      }
      chapterOne.src = "/RAILREADY/chapter1.PNG";

      $("#rail-canvas-div").fadeIn(2000);

      setTimeout(function () {
        $("#rail-canvas-div").fadeOut(2000);

        setTimeout(function () {
          clearScreen();
          $("#rail-canvas-div").fadeIn(2000);

          const frame1 = new Image();

          frame1.onload = function () {
            window_render.drawImage(frame1, 0, 0, 1000, 800);
          }
          frame1.src = "/RAILREADY/CUTSCENE1/wiiuframe1.PNG";

          setTimeout(function () {

            const frame2 = new Image();

            frame2.onload = function () {
              window_render.drawImage(frame2, 0, 0, 1000, 800);
            }
            frame2.src = "/RAILREADY/CUTSCENE1/wiiuframe2.PNG";

            setTimeout(function () {

              const frame3 = new Image();

              frame3.onload = function () {
                window_render.drawImage(frame3, 0, 0, 1000, 800);
              }
              frame3.src = "/RAILREADY/CUTSCENE1/wiiuframe3.PNG";

              setTimeout(function () {

                const frame4 = new Image();

                frame4.onload = function () {
                  window_render.drawImage(frame4, 0, 0, 1000, 800);
                }
                frame4.src = "/RAILREADY/CUTSCENE1/wiiuframe4.PNG";

                setTimeout(function () {

                  const frame5 = new Image();

                  frame5.onload = function () {
                    window_render.drawImage(frame5, 0, 0, 1000, 800);
                  }
                  frame5.src = "/RAILREADY/CUTSCENE1/wiiuframe5.PNG";

                  setTimeout(function () {

                    const frame6 = new Image();

                    frame6.onload = function () {
                      window_render.drawImage(frame6, 0, 0, 1000, 800);
                    }
                    frame6.src = "/RAILREADY/CUTSCENE1/wiiuframe6.PNG";

                    setTimeout(function () {

                      const frame5 = new Image();

                      frame5.onload = function () {
                        window_render.drawImage(frame5, 0, 0, 1000, 800);
                      }
                      frame5.src = "/RAILREADY/CUTSCENE1/wiiuframe7.PNG";

                      setTimeout(function () {
                        const frame8 = new Image(); 

                        frame8.onload = function () {
                          window_render.drawImage(frame8, 0, 0, 1000, 800);
                        }
                        frame8.src = "/RAILREADY/CUTSCENE1/wiiuframe8.PNG";

                        setTimeout(function () {
                          const frame9 = new Image();

                          frame9.onload = function () {
                            window_render.drawImage(frame9, 0, 0, 1000, 800);
                          }
                          frame9.src = "/RAILREADY/CUTSCENE1/wiiuframe9.PNG";

                          setTimeout(function () {
                            $("#rail-canvas-div").fadeOut(2000);

                            guncrowd.play();

                            setTimeout(function () {
                              $("#rail-canvas-div").fadeIn(2000);

                              clearScreen();

                              const objective1 = new Image();

                              objective1.onload = function () {
                                window_render.drawImage(objective1, 0, 0, 1000, 800);
                              }
                              objective1.src = "/RAILREADY/OBJECTIVES/objective1.PNG";

                              setTimeout(function () {
                                $("#rail-canvas-div").fadeOut(2000);

                                setTimeout(function () {
                                  $("#rail-canvas-div").fadeIn(2000);
                                  renderCh1();
                                }, 2000);
                              }, 5000);
                            }, 3000);
                          }, 1000);
                        }, 1000);
                      }, 10000);
                    }, 500);
                  }, 500);
                }, 500);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 5000);
    }, 2000);
  }, 23000);
}

function renderCutSceneTwo () {
  const helicopter_frame = new Image();

  helicopter_frame.onload = function () {
    window_render.drawImage(helicopter_frame, 0, 0, 1000, 800);
  }
  helicopter_frame.src = "/RAILREADY/CUTSCENE3/helicopter_frame1.jpeg";

  $("#rail-canvas-div").fadeIn(2000);

  setTimeout(function () {
    $("#rail-canvas-div").fadeOut(2000);

    setTimeout(function () {
      const helicopter_frame = new Image();

      helicopter_frame.onload = function () {
        window_render.drawImage(helicopter_frame, 0, 0, 1000, 800);
      }
      helicopter_frame.src = "/RAILREADY/CUTSCENE3/helicopter_frame2.png";

      setTimeout(function () {
        const helicopter_frame = new Image();

        helicopter_frame.onload = function () {
          window_render.drawImage(helicopter_frame, 0, 0, 1000, 800);
        }
        helicopter_frame.src = "/RAILREADY/CUTSCENE3/helicopter_frame3.png";

        weapon_type = "assault_rifle";
        countAmmo();

        setTimeout(function () {
          usage_status.innerText = "Rapidly press D to block attacks for a period of time.";

          $("#rail-canvas-div").fadeOut(2000);

          setTimeout(function () {
            renderCh2();
          }, 2000);
        }, 5000);
      }, 2000);

      $("#rail-canvas-div").fadeIn(2000);
    }, 2000);
  }, 3000);
}

function renderCutSceneThree () {
  clearScreen();

  const frame = new Image(); 

  frame.onload = function () {
    window_render.drawImage(frame, 0, 0, 1000, 800);
  }
  frame.src = "/RAILREADY/CUTSCENE5/frame1.jpeg";

  setTimeout(function () {
    const frame = new Image(); 

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CUTSCENE5/frame2.jpeg";

    setTimeout(function () {
      const frame = new Image(); 

      frame.onload = function () {
        window_render.drawImage(frame, 0, 0, 1000, 800);
      }
      frame.src = "/RAILREADY/CUTSCENE5/frame3.jpeg";

      setTimeout(function () {
        const frame = new Image(); 

        frame.onload = function () {
          window_render.drawImage(frame, 0, 0, 1000, 800);
        }
        frame.src = "/RAILREADY/CUTSCENE5/frame4.jpeg";

        setTimeout(function () {
          const frame = new Image(); 

          frame.onload = function () {
            window_render.drawImage(frame, 0, 0, 1000, 800);
          }
          frame.src = "/RAILREADY/CUTSCENE5/frame5.jpeg";

          setTimeout(function () {
            $("#rail-canvas-div").fadeOut(2000);

            setTimeout(function () {
              $("#rail-canvas-div").fadeIn(2000);

              objective = new Image();

              objective.onload = function () {
                window_render.drawImage(objective, 0, 0, 1000, 800);
              }
              objective.src = "/RAILREADY/OBJECTIVES/objective4.jpeg";

              setTimeout(function () {
                $("#rail-canvas-div").fadeOut(2000);

                setTimeout(function () {
                  $("#rail-canvas-div").fadeIn(2000);

                  renderCh4();
                }, 2000);
              }, 5000);
            }, 2000);
          }, 3000);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}

// Render enemies and the backgrounds 

function renderCh1 () {
  clearScreen();

  const ch1_render = new Image();

  ch1_render.onload = function () {
    window_render.drawImage(ch1_render, 0, 0, 1000, 800);
  }
  ch1_render.src = "/RAILREADY/CH1/ch1_frame1.jpg";

  const ch1_render2 = new Image();

  ch1_render2.onload = function () {
    window_render.drawImage(ch1_render2, 1000, 0, 1000, 800);
  }
  ch1_render2.src = "/RAILREADY/CH1/ch1_frame2.PNG";

  setTimeout(function () {
    plr16_sound.cloneNode(true).play();

    const ch1_render = new Image();

    ch1_render.onload = function () {
      window_render.drawImage(ch1_render, 400, 400, 170, 95);
    }
    ch1_render.src = "/RAILREADY/BLOOD/blood1.png";

    setTimeout(function () {
      let ch1_render_x = 0;
      let ch1_render2_x = 1000;
      let ch1_sprite_x = 400;

      const movementInterval = setInterval(function () {
        clearScreen();

        ch1_render_x = ch1_render_x - 5;
        ch1_render2_x = ch1_render2_x - 5;
        ch1_sprite_x = ch1_sprite_x - 5;

        const ch1_render = new Image();

        ch1_render.onload = function () {
          window_render.drawImage(ch1_render, ch1_render_x, 0, 1000, 800);
        }
        ch1_render.src = "/RAILREADY/CH1/ch1_frame1.jpg";

        const ch1_srender = new Image();

        ch1_srender.onload = function () {
          window_render.drawImage(ch1_srender, ch1_sprite_x, 400, 170, 95);
        }
        ch1_srender.src = "/RAILREADY/BLOOD/blood1.png";

        const ch1_render2 = new Image();

        ch1_render2.onload = function () {
          window_render.drawImage(ch1_render2, ch1_render2_x, 0, 1000, 800);
        }
        ch1_render2.src = "/RAILREADY/CH1/ch1_frame2.PNG";
      }, 100);

      setTimeout(function () {
        clearInterval(movementInterval);

        setTimeout(function () {
          game_mode = 0;

          let ch1_render2_x = 0;
          let ch1_render3_x = 1000;

          const ch1_render2 = new Image();

          ch1_render2.onload = function () {
            window_render.drawImage(ch1_render2, 0, 0, 1000, 800);
          }
          ch1_render2.src = "/RAILREADY/CH1/ch1_frame3.PNG";

          usage_status.innerText = "Click to fire and hold A for automatic fire."

          const ch1_render3 = new Image();

          ch1_render3.onload = function () {
            window_render.drawImage(ch1_render3, 1000, 0, 1000, 800);
          }
          ch1_render3.src = "/RAILREADY/CH1/ch1_frame4.png";

          setTimeout(function () {
            let ch1_render3_x = 1000;

            const movementInterval = setInterval(function () {
              clearScreen();

              ch1_render2_x = ch1_render2_x - 5;
              ch1_render3_x = ch1_render3_x - 5;

              const ch1_render2 = new Image();

              ch1_render2.onload = function () {
                window_render.drawImage(ch1_render2, ch1_render2_x, 0, 1000, 800);
              }
              ch1_render2.src = "/RAILREADY/CH1/ch1_frame3.PNG";

              const ch1_render3 = new Image();

              ch1_render3.onload = function () {
                window_render.drawImage(ch1_render3, ch1_render3_x, 0, 1000, 800);
              }
              ch1_render3.src = "/RAILREADY/CH1/ch1_frame4.png";
            }, 100);

            setTimeout(function () {
              clearInterval(movementInterval);
              $("#wiiu-sprite1").show();
              wiiu_owner_active = true;
            }, 20000);
          }, 1000);
        }, 1000);
      }, 19500);
    }, 2000);
  }, 2000);
}

function renderCh1_2 () {
  let ch1_render3_x = 0;
  let ch1_render4_x = 1000;
  let ch1_render5_x = 2000;
  let ch1_render6_x = 3000;
  let ch1_render7_x = 4000;
  let ch1_render8_x = 5000;

  const movementInterval = setInterval(function () {
    clearScreen();

    ch1_render3_x = ch1_render3_x - 5;
    ch1_render4_x = ch1_render4_x - 5;
    ch1_render5_x = ch1_render5_x - 5;
    ch1_render6_x = ch1_render6_x - 5;
    ch1_render7_x = ch1_render7_x - 5;
    ch1_render8_x = ch1_render8_x - 5;

    const ch1_render3 = new Image();

    ch1_render3.onload = function () {
      window_render.drawImage(ch1_render3, ch1_render3_x, 0, 1000, 800);
    }
    ch1_render3.src = "/RAILREADY/CH1/ch1_frame4.png";

    const ch1_render4 = new Image();

    ch1_render3.onload = function () {
      window_render.drawImage(ch1_render4, ch1_render4_x, 0, 1000, 800);
    }
    ch1_render4.src = "/RAILREADY/CH1/ch1_frame5.jpg";

    const ch1_render5 = new Image();

    ch1_render5.onload = function () {
      window_render.drawImage(ch1_render5, ch1_render5_x, 0, 1000, 800);
    }
    ch1_render5.src = "/RAILREADY/CH1/ch1_frame6.PNG";

    const ch1_render6 = new Image();

    ch1_render6.onload = function () {
      window_render.drawImage(ch1_render6, ch1_render6_x, 0, 1000, 800);
    }
    ch1_render5.src = "/RAILREADY/CH1/ch1_frame7.jpg";

    const ch1_render7 = new Image();

    ch1_render7.onload = function () {
      window_render.drawImage(ch1_render7, ch1_render7_x, 0, 1000, 800);
    }
    ch1_render7.src = "/RAILREADY/CH1/ch1_frame8.PNG";

    const ch1_render8 = new Image();

    ch1_render8.onload = function () {
      window_render.drawImage(ch1_render8, ch1_render8_x, 0, 1000, 800);
    }
    ch1_render8.src = "/RAILREADY/CH1/ch1_frame9.jpeg";
  }, 100);

  setTimeout(function () {
    clearInterval(movementInterval);
    $("#suicidebot-sprite1").show(); 
    suicidebot_active = true;
  }, 100000);

  setTimeout(function () {
    usage_status.innerText = "Shoot Victor before his bomb vest goes off.";
  }, 8000);
}

function renderCh1_3 () {
  let og_ch_render_x = 0;
  let ch_render_x_1 = 1000;
  let ch_render_exit_x = 2000;

  const movementInterval = setInterval(function () {
    clearScreen();

    og_ch_render_x = og_ch_render_x - 5;
    ch_render_x_1 = ch_render_x_1 - 5;
    ch_render_exit_x = ch_render_exit_x - 5;
    const ch1_render3 = new Image();

    ch1_render3.onload = function () {
      window_render.drawImage(ch1_render3, og_ch_render_x, 0, 1000, 800);
    }
    ch1_render3.src = "/RAILREADY/CH1/ch1_frame9.jpeg";

    const ch1_render4 = new Image();

    ch1_render4.onload = function () {
      window_render.drawImage(ch1_render4, ch_render_x_1, 0, 1000, 800);
    }
    ch1_render4.src = "/RAILREADY/CH1/ch1_frame10.PNG";

    const ch1_render5 = new Image();

    ch1_render5.onload = function () {
      window_render.drawImage(ch1_render5, ch_render_exit_x, 0, 1000, 800);
    }
    ch1_render4.src = "/RAILREADY/CH1/ch1_frame11.PNG";
  }, 100);

  setTimeout(function () {
    clearInterval(movementInterval);

    $("#rail-canvas-div").fadeOut(2000);

    setTimeout(function () {
      $("#rail-canvas-div").fadeIn(2000);

      const cutscene_render = new Image();

      cutscene_render.onload = function () {
        window_render.drawImage(cutscene_render, 0, 0, 1000, 800);
      }
      cutscene_render.src = "/RAILREADY/CUTSCENE2/suicideframe1.jpeg";

      setTimeout(function () {
        const cutscene_render = new Image();

        cutscene_render.onload = function () {
          window_render.drawImage(cutscene_render, 0, 0, 1000, 800);
        }
        cutscene_render.src = "/RAILREADY/CUTSCENE2/suicideframe2.jpeg";

        setTimeout(function () {
          const cutscene_render = new Image();

          cutscene_render.onload = function () {
            window_render.drawImage(cutscene_render, 0, 0, 1000, 800);
          }
          cutscene_render.src = "/RAILREADY/CUTSCENE2/suicideframe3.jpeg";

          setTimeout(function () {
            const cutscene_render = new Image();

            cutscene_render.onload = function () {
              window_render.drawImage(cutscene_render, 0, 0, 1000, 800);
            }
            cutscene_render.src = "/RAILREADY/CUTSCENE2/suicideframe4.jpeg";

            ak_sound_1.cloneNode(true).play();

            $("#rail-canvas-div").fadeOut(2000);

            setTimeout(function () {
              const objective_2 = new Image();

              objective_2.onload = function () {
                window_render.drawImage(objective_2, 0, 0, 1000, 800);
              }
              objective_2.src = "/RAILREADY/OBJECTIVES/objective2.PNG";

              $("#rail-canvas-div").fadeIn(2000);

              setTimeout(function () {
                $("#rail-canvas-div").fadeOut(2000);

                setTimeout(function () {
                  clearScreen(); 

                  renderCutSceneTwo();
                }, 2000);
              }, 5000);
            }, 2000);
          }, 500);
        }, 500);
      }, 5000);
    }, 2000);
  }, 20000);
}

function renderCh2 () {
  const ch2_render = new Image();

  ch2_render.onload = function () {
    window_render.drawImage(ch2_render, 0, 0, 1000, 800);
  }
  ch2_render.src = "/RAILREADY/CH2/ch2_frame1.jpg";

  $("#rail-canvas-div").fadeIn(2000);

  setTimeout(function () {
    usage_status.innerText = "Advise you jam the D key to hold off attacks!";

    const ch2_render = new Image();

    ch2_render.onload = function () {
      window_render.drawImage(ch2_render, 0, 0, 1000, 800);
    }
    ch2_render.src = "/RAILREADY/CH2/ch2_frame2.PNG";

    dicksucker_active = true;
  }, 3000);
}

function renderCh2_2 () {
  game_mode = 11;

  const ch2_render = new Image();

  ch2_render.onload = function () {
    window_render.drawImage(ch2_render, 0, 0, 1000, 800);
  }
  ch2_render.src = "/RAILREADY/CH2/ch2_frame3.PNG";

  setTimeout(function () {
    const ch2_render = new Image();

    ch2_render.onload = function () {
      window_render.drawImage(ch2_render, 0, 0, 1000, 800);
    }
    ch2_render.src = "/RAILREADY/CH2/ch2_frame4.PNG";

    setTimeout(function () {
      const ch2_render = new Image();

      ch2_render.onload = function () {
        window_render.drawImage(ch2_render, 0, 0, 1000, 800);
      }
      ch2_render.src = "/RAILREADY/CH2/ch2_frame5.PNG";

      knife_throw.cloneNode(true).play();

      setTimeout(function () {
        const ch2_render = new Image();

        ch2_render.onload = function () {
          window_render.drawImage(ch2_render, 0, 0, 1000, 800);
        }
        ch2_render.src = "/RAILREADY/CH2/ch2_frame6.PNG";

        setTimeout(function () {
          const ch2_render = new Image();

          ch2_render.onload = function () {
            window_render.drawImage(ch2_render, 0, 0, 1000, 800);
          }
          ch2_render.src = "/RAILREADY/CH2/ch2_frame7.PNG";

          setTimeout(function () {
            const ch2_render = new Image();

            ch2_render.onload = function () {
              window_render.drawImage(ch2_render, 0, 0, 1000, 800);
            }
            ch2_render.src = "/RAILREADY/CH2/ch2_frame8.PNG";

            setTimeout(function () {
              const ch2_render = new Image();

              ch2_render.onload = function () {
                window_render.drawImage(ch2_render, 0, 0, 1000, 800);
              }
              ch2_render.src = "/RAILREADY/CH2/ch2_frame9.PNG";

              setTimeout(function () {
                const ch2_render = new Image();

                ch2_render.onload = function () {
                  window_render.drawImage(ch2_render, 0, 0, 1000, 800);
                }
                ch2_render.src = "/RAILREADY/CH2/ch2_frame10.PNG";

                usage_status.innerText = "Press S to hijack the bus.";
                game_mode = 5;
              }, 5000);
            }, 2000);
          }, 3000);
        }, 800);
      }, 500);
    }, 500);
  }, 500);
}

function renderCh2_3 () {
  const ch2_render = new Image();

  ch2_render.onload = function () {
    window_render.drawImage(ch2_render, 0, 0, 1000, 800);
  }
  ch2_render.src = "/RAILREADY/CH2/ch2_frame11.PNG";

  kids_screaming.play();

  setTimeout(function () {
    const ch2_render = new Image();

    ch2_render.onload = function () {
      window_render.drawImage(ch2_render, 0, 0, 1000, 800);
    }
    ch2_render.src = "/RAILREADY/CH2/ch2_frame12.PNG";

    setTimeout(function () {
      clearScreen();

      car_crash.play();

      setTimeout(function () {
        const ch2_render = new Image();

        ch2_render.onload = function () {
          window_render.drawImage(ch2_render, 0, 0, 1000, 800);
        }
        ch2_render.src = "/RAILREADY/CH2/ch2_frame13.jpg";

        usage_status.innerText = "Shoot the emergency hatch to escape!";
        game_mode = 0;
        hatch_active = true;
      }, 8000);
    }, 3000);
  }, 3000);
}

function renderCh2_4 () {
  const ch2_render = new Image();

  ch2_render.onload = function () {
    window_render.drawImage(ch2_render, 0, 0, 1000, 800);
  }
  ch2_render.src = "/RAILREADY/CH2/ch2_frame14.PNG";

  setTimeout(function () {
    const ch2_render = new Image();

    ch2_render.onload = function () {
      window_render.drawImage(ch2_render, 0, 0, 1000, 800);
    }
    ch2_render.src = "/RAILREADY/CH2/ch2_frame15.PNG";

    setTimeout(function () {
      $("#rail-canvas-div").fadeOut(2000);

      setTimeout(function () {
        $("#rail-canvas-div").fadeIn(2000);

        const ch2_render = new Image();

        ch2_render.onload = function () {
          window_render.drawImage(ch2_render, 0, 0, 1000, 800);
        }
        ch2_render.src = "/RAILREADY/OBJECTIVES/objective3.PNG";

        setTimeout(function () {
          $("#rail-canvas-div").fadeOut(2000);

          setTimeout(function () {
            $("#rail-canvas-div").fadeIn(2000);

            renderCh3();
          }, 2000);
        }, 5000);
      }, 2000);
    }, 2000);
  }, 1000);
}

function renderCh3 () {
  let ch3_frame1_x = 0;
  let ch3_frame2_x = 1000;
  let ch3_frame3_x = 2000;
  let ch3_frame4_x = 3000;

  const movementInterval = setInterval(function () {
    clearScreen();
    
    ch3_frame1_x = ch3_frame1_x - 5;
    ch3_frame2_x = ch3_frame2_x - 5;
    ch3_frame3_x = ch3_frame3_x - 5;
    ch3_frame4_x = ch3_frame4_x - 5;

    const ch3_frame1 = new Image();

    ch3_frame1.onload = function () {
      window_render.drawImage(ch3_frame1, ch3_frame1_x, 0, 1000, 800);
    }
    ch3_frame1.src = "/RAILREADY/CH3/ch3_frame1.jpg";

    ch3_frame2 = new Image();

    ch3_frame2.onload = function () {
      window_render.drawImage(ch3_frame2, ch3_frame2_x, 0, 1000, 800);
    }
    ch3_frame2.src = "/RAILREADY/CH3/ch3_frame2.jpg";

    ch3_frame3 = new Image();

    ch3_frame3.onload = function () {
      window_render.drawImage(ch3_frame3, ch3_frame3_x, 0, 1000, 800);
    }
    ch3_frame3.src = "/RAILREADY/CH3/ch3_frame3.jpg";

    ch3_frame4 = new Image();

    ch3_frame4.onload = function () {
      window_render.drawImage(ch3_frame4, ch3_frame4_x, 0, 1000, 800);
    }
    ch3_frame4.src = "/RAILREADY/CH3/ch3_frame4.jpg";
  }, 100);

  setTimeout(function () {
    clearInterval(movementInterval);

    const cutscene_frame = new Image();

    cutscene_frame.onload = function () {
      window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
    }
    cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare1.jpeg";

    setTimeout(function () {
      const cutscene_frame = new Image();

      cutscene_frame.onload = function () {
        window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
      }
      cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare2.jpeg";

      setTimeout(function () {
        const cutscene_frame = new Image();

        cutscene_frame.onload = function () {
          window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
        }
        cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare3.jpeg";

        setTimeout(function () {
          const cutscene_frame = new Image();

          cutscene_frame.onload = function () {
            window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
          }
          cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare4.jpeg";

          setTimeout(function () {
            const cutscene_frame = new Image();

            cutscene_frame.onload = function () {
              window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
            }
            cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare5.jpeg";

            setTimeout(function () {
              const cutscene_frame = new Image();

              cutscene_frame.onload = function () {
                window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
              }
              cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare6.jpeg";

              setTimeout(function () {
                const cutscene_frame = new Image();

                cutscene_frame.onload = function () {
                  window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
                }
                cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare7.jpeg";

                setTimeout(function () {
                  const cutscene_frame = new Image();

                  cutscene_frame.onload = function () {
                    window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
                  }
                  cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare8.jpeg";

                  setTimeout(function () {
                    const cutscene_frame = new Image();

                    cutscene_frame.onload = function () {
                      window_render.drawImage(cutscene_frame, 0, 0, 1000, 800);
                    }
                    cutscene_frame.src = "/RAILREADY/CUTSCENE4/daycare9.jpeg";

                    mm1.play();
                    mm2.play();

                    setTimeout(function () {
                      const ch3_frame = new Image();

                      ch3_frame.onload = function () {
                        window_render.drawImage(ch3_frame, 0, 0, 1000, 800);
                      }
                      ch3_frame.src = "/RAILREADY/CH3/ch3_frame5.jpeg";

                      $("#security-sprite1").show();
                      usage_status.innerText = "Hey! What are you doing in here?";

                      setTimeout(function () {
                        usage_status.innerText = "Firearms are forbidden here! I'll take you down myself!";

                        setTimeout(function () {
                          usage_status.innerText = "Kill the security guard.";
                          security_active = true;
                        }, 5000);
                      }, 3000);
                    }, 6000);
                  }, 500);
                }, 5000);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, 5000);

  }, 80000);
}

function renderCh3_2 () {
  let ch3_frame5_x = 0;
  let ch3_frame6_x = 1000;
  let ch3_frame7_x = 2000;

  const movementInterval = setInterval(function () {
    ch3_frame5_x = ch3_frame5_x - 5;

    const ch3_frame5 = new Image();

    ch3_frame5.onload = function () {
      window_render.drawImage(ch3_frame5, ch3_frame5_x, 0, 1000, 800);
    }
    ch3_frame5.src = "/RAILREADY/CH3/ch3_frame5.jpeg";

    ch3_frame6_x = ch3_frame6_x - 5;

    const ch3_frame6 = new Image();

    ch3_frame6.onload = function () {
      window_render.drawImage(ch3_frame6, ch3_frame6_x, 0, 1000, 800);
    }
    ch3_frame6.src = "/RAILREADY/CH3/ch3_frame6.jpeg";

    ch3_frame7_x = ch3_frame7_x - 5;

    const ch3_frame7 = new Image();

    ch3_frame7.onload = function () {
      window_render.drawImage(ch3_frame7, ch3_frame7_x, 0, 1000, 800);
    }
    ch3_frame7.src = "/RAILREADY/CH3/ch3_frame7.jpeg";
  }, 100);

  setTimeout(function () {
    clearInterval(movementInterval);

    usage_status.innerText = "Where the hell does this lead to?";

    setTimeout(function () {
      usage_status.innerText = "Ahhh! Someone sprayed fucking mace at me!";

      takeDamage(0);

      setTimeout(function () {
        $("#principal-sprite1").show();

        principle_active = true;
      }, 3000);
    }, 2000);
  }, 60000);
}

function renderCh3_3 () {
  usage_status.innerText = "The school board member's illusion must be gone...";

  const frame = new Image();

  frame.onload = function () {
    window_render.drawImage(frame, 0, 0, 1000, 800);
  }
  frame.src = "/RAILREADY/CH3/ch3_frame8.jpeg";

  setTimeout(function () {
    $("#rail-canvas-div").fadeOut(2000);

    setTimeout(function () {
      clearScreen();

      $("#rail-canvas-div").fadeIn(2000);

      const objective = new Image();

      objective.onload = function () {
        window_render.drawImage(objective, 0, 0, 1000, 800);
      }
      objective.src = "/RAILREADY/OBJECTIVES/objective4.jpeg";

      setTimeout(function () {
        $("#rail-canvas-div").fadeOut(2000);

        setTimeout(function () {
          $("#rail-canvas-div").fadeIn(2000);
          renderCutSceneThree();
        }, 2000);
      }, 5000);
    }, 2000);
  }, 5000);
}

function renderCh4 () {
  let ch4_frame1_x = 0;
  let ch4_frame2_x = 1000;

  const movementInterval = setInterval(function () {
    ch4_frame1_x = ch4_frame1_x - 5;
    ch4_frame2_x = ch4_frame2_x - 5;

    const frame1 = new Image();

    frame1.onload = function () {
      window_render.drawImage(frame1, ch4_frame1_x, 0, 1000, 800);
    }
    frame1.src = "/RAILREADY/CH4/frame1.jpeg";

    const frame2 = new Image();

    frame2.onload = function () {
      window_render.drawImage(frame2, ch4_frame2_x, 0, 1000, 800);
    }
    frame2.src = "/RAILREADY/CH4/frame2.jpeg";
  }, 100);

  setTimeout(function () {
    clearInterval(movementInterval);

    usage_status.innerText = "Press S to launch rockets.";
    game_mode = 6;
  }, 20000);
}

function renderCh4_2 () {
  missile_sound.play();
  game_mode = 11;

  setTimeout(function () {
    xplode_sound.play();

    const frame = new Image();

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CH4/frame3.jpeg";

    setTimeout(function () {
      const frame = new Image();

      frame.onload = function () {
        window_render.drawImage(frame, 0, 0, 1000, 800);
      }
      frame.src = "/RAILREADY/CH4/frame4.jpeg";

      is_rocket_1_active = false;
      is_rocket_2_active = true;

      game_mode = 6;
    }, 200);
  }, 4000);
}

function renderCh4_3 () {
  missile_sound.play();
  game_mode = 11;

  setTimeout(function () {
    xplode_sound.play();

    const frame = new Image();

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CH4/frame5.jpeg";

    setTimeout(function () {
      const frame = new Image();

      frame.onload = function () {
        window_render.drawImage(frame, 0, 0, 1000, 800);
      }
      frame.src = "/RAILREADY/CH4/frame6.jpeg";

      is_rocket_2_active = false;
      is_rocket_3_active = true;
      
      game_mode = 6;
    }, 200);
  }, 4000);
}

function renderCh4_4 () {
  missile_sound.play();
  game_mode = 11;

  setTimeout(function () {
    xplode_sound.play();

    const frame = new Image();

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CH4/frame7.jpeg";

    setTimeout(function () {
      const frame = new Image();

      frame.onload = function () {
        window_render.drawImage(frame, 0, 0, 1000, 800);
      }
      frame.src = "/RAILREADY/CH4/frame8.jpeg";

      is_rocket_3_active = false;
      
      game_mode = 0;
      renderCh4_5();
    }, 200);
  }, 2000);
}

function renderCh4_5 () {
  let frame_x = 0;
  let frame_2_x = 1000;

  const movementInterval = setInterval(function () {
    frame_x = frame_x - 5;
    frame_2_x = frame_2_x - 5;

    const frame = new Image();

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CH4/frame8.jpeg";

    const frame2 = new Image();

    frame2.onload = function () {
      window_render.drawImage(frame2, 0, 0, 1000, 800);
    }
    frame2.src = "/RAILREADY/CH4/frame9.jpeg";
  }, 100);

  usage_status.innerText = "Hold your fire- wait 10 seconds as to not trigger the alarm.";
  game_mode = 11;

  setTimeout(function () {
    clearInterval(movementInterval);

    usage_status.innerText = "Press S to place the smoke machine.";
    game_mode = 7;
  }, 10000);
}

function renderCh4_6 () {
  clearScreen();
  game_mode = 0;

  const frame = new Image();

  frame.onload = function () {
    window_render.drawImage(frame, 0, 0, 1000, 800);
  }
  frame.src = "/RAILREADY/CH4/frame10.jpeg";

  setTimeout(function () {
    const frame = new Image();

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CH4/frame11.jpeg";

    setTimeout(function () {
      renderCh4_7();
    }, 3000);
  }, 2000);
}

function renderCh4_7 () {
  let frame1_x = 0;
  let frame2_x = 1000;

  const movementInterval = setInterval(function () {
    frame1_x = frame1_x - 5;
    frame2_x = frame2_x - 5;

    clearScreen();

    const frame1 = new Image();

    frame1.onload = function () {
      window_render.drawImage(frame1, frame1_x, 0, 1000, 800);
    }
    frame1.src = "/RAILREADY/CH4/frame11.jpeg";

    const frame2 = new Image();

    frame2.onload = function () {
      window_render.drawImage(frame2, frame2_x, 0, 1000, 800);
    }
    frame2.src = "/RAILREADY/CH4/frame12.jpeg";
  }, 100);

  setTimeout(function () {
    clearInterval(movementInterval);

    usage_status.innerText = "Press S to throw a molotov.";
    game_mode = 8;
  }, 20000);
}

function renderCh4_8 () {
  fire_sound.play();
  glass_sound.play();

  game_mode = 11;

  const frame = new Image();

  frame.onload = function () {
    window_render.drawImage(frame, 0, 0, 1000, 800);
  }
  frame.src = "/RAILREADY/CH4/frame13.jpeg";

  setTimeout(function () {
    const frame = new Image();

    frame.onload = function () {
      window_render.drawImage(frame, 0, 0, 1000, 800);
    }
    frame.src = "/RAILREADY/CH4/frame14.jpeg";

    setTimeout(function () {
      $("#rail-canvas-div").fadeOut(2000);

      setTimeout(function () {
        clearScreen();
        $("#rail-canvas-div").fadeIn(2000);

        const frame = new Image();

        frame.onload = function () {
          window_render.drawImage(frame, 0, 0, 1000, 800);
        }
        frame.src = "/RAILREADY/CH4/frame15.jpeg";

        setTimeout(function () {
          usage_status.innerText = '"As the new CEO of Curriculum Associates, I knew this would happen..."';

          setTimeout(function () {
            usage_status.innerText = '"Eh, whatever. I consider myself to be a more hands-off guy."';

            setTimeout(function () {
              usage_status.innerText = '"In the streets...AND in the sheets."';

              setTimeout(function () {
                usage_status.innerText = `"I don't want to be a Satanic priest so...thanks I suppose?"`;

                setTimeout(function () {
                  clearScreen();

                  xplode_sound.play();

                  setTimeout(function () {
                    const credit1 = new Image();

                    credit1.onload = function () {
                      window_render.drawImage(credit1, 0, 0, 1000, 800);
                    }
                    credit1.src = "/RAILREADY/CREDITS/1.jpeg";

                    setTimeout(function () {
                      const credit2 = new Image();

                      credit2.onload = function () {
                        window_render.drawImage(credit2, 0, 0, 1000, 800);
                      }
                      credit2.src = "/RAILREADY/CREDITS/2.jpeg";

                      setTimeout(function () {
                        const credit3 = new Image();

                        credit3.onload = function () {
                          window_render.drawImage(credit3, 0, 0, 1000, 800);
                        }
                        credit3.src = "/RAILREADY/CREDITS/3.jpeg";

                        setTimeout(function () {
                          const credit4 = new Image();

                          credit4.onload = function () {
                            window_render.drawImage(credit4, 0, 0, 1000, 800);
                          }
                          credit4.src = "/RAILREADY/CREDITS/4.jpeg";

                          setTimeout(function () {
                            alert("You have finished the game.");
                            location = "";

                            fetch ("/rscore")
                            .then(response => response.text())
                            .then(data => {
                              const parsedNum = parseInt(data);

                              if (r_score < parsedNum) {
                                location = "";
                              }

                              else if (r_score === parsedNum) {
                                location = "";
                              }

                              else if (r_score > parsedNum) {
                                alert("You hold the new high score!");
                                const name = prompt("Screen name: ");

                                fetch ("/rscore", {
                                  method : "POST",
                                  headers : {
                                    "Content-Type" : "application/json"
                                  },
                                  body : JSON.stringify({
                                    username : name,
                                    score : "wiiuownercaughttouchinglittlekids??" + r_score
                                  })
                                })
                                .then(response => response.text())
                                .then(data => {
                                  alert("Uploaded your score!");
                                  location = "";
                                })
                                .catch(error => {
                                  throw error;
                                });
                              }
                            })
                            .catch(error => {
                              throw error;
                            });
                          }, 5000);
                        }, 5000);
                      }, 5000);
                    }, 5000);
                  }, 4000);
                }, 5000);
              }, 3000);
            }, 5000);
          }, 5000);
        }, 3000);
      }, 2000);
    }, 2000);
  }, 200);
}