import {menu} from './components/menu/menu.jsx'

const components = [
    menu(),
];

//Run init function (if exists) on all components
components.filter((component) => component.init).forEach((component) => component.init())
