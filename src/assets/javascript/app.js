/*
 * Needed for October's framework
 */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
var Flickity = require('flickity');
import { changeMenuOnScroll } from './modules/mobile_behavior.js';
import { launchAnimeOnScroll, animeClass } from './modules/animations_behavior.js';
import { checkMenu } from './modules/menu_behavior.js';
import './modules/modal_behavior.js';
/*
* Application
*/

changeMenuOnScroll();
launchAnimeOnScroll();
animeClass();
document.onclick = checkMenu;



