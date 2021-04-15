import "regenerator-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import main from './script/view/main.js';
import './script/component/search-bar.js';
import './script/component/meal-list.js';
import './script/component/meal-item-detail.js';

document.addEventListener("DOMContentLoaded", main);