const plr16_sound = document.getElementById("plr16");

const plr16_sound_1 = soundeffectTag.split("||AUDIO [[NAME]] PLR16||");
const plr16_sound_2 = plr16_sound_1[1].split("||AUDIO [[NAME]] MOSSBERG 500||");
const plr16_sound_3 = plr16_sound_2[0];

plr16_sound.src = plr16_sound_3;