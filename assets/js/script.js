import { Mobile } from "./modules/mobile/mobile.js"; // tem que colocar a extensão
import { SubMenu } from "./modules/submenu.js";
import { AnimeTitle } from "./modules/mobile/animeTitle.js";
import SlideNav from "./modules/slide/slide.js";
import { animaScroll } from "./modules/animaScroll.js";

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");

Mobile();
SubMenu();
AnimeTitle();
animaScroll();
