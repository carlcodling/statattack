import * as document from "document";

import * as util from "../common/utils";

import clock from 'clock'
import { preferences } from 'user-settings'

import { FitFont } from 'fitfont'


// declaration of the FitFont objects
const timeLbl  = new FitFont({ id:'time',  font:'Manjari_52',  halign: 'middle'})

const updateClock = () => {
  const now = new Date()
  let hours = now.getHours()
  if (preferences.clockDisplay === '12h') {
    hours = hours % 12 || 12
  }
  const minutes = now.getMinutes()
  timeLbl.text = hours + ':' + ('0'+minutes).slice(-2)
}

clock.granularity = 'minutes'
clock.ontick = (evt) => updateClock()

updateClock()

const star1 = document.getElementById("star1");
const star2 = document.getElementById("stat2");
const star3 = document.getElementById("stat3");
const star4 = document.getElementById("stat4");
const star5 = document.getElementById("stat5");

const SMALL_STAR_RADIUS = 40;

let star2Coords = util.getPointOnCircle(342, 120, 168, 168);
star2.x = parseInt(star2Coords.x)-SMALL_STAR_RADIUS;
star2.y = parseInt(star2Coords.y)-SMALL_STAR_RADIUS;

let star3Coords = util.getPointOnCircle(54, 120, 168, 168);
star3.x = parseInt(star3Coords.x)-SMALL_STAR_RADIUS;
star3.y = parseInt(star3Coords.y)-SMALL_STAR_RADIUS;

let star4Coords = util.getPointOnCircle(126, 120, 168, 168);
star4.x = parseInt(star4Coords.x)-SMALL_STAR_RADIUS;
star4.y = parseInt(star4Coords.y)-SMALL_STAR_RADIUS;

let star5Coords = util.getPointOnCircle(198, 120, 168, 168);
star5.x = parseInt(star5Coords.x)-SMALL_STAR_RADIUS;
star5.y = parseInt(star5Coords.y)-SMALL_STAR_RADIUS;
