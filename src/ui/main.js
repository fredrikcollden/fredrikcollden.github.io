import MenuWrapper from './components/menu/menuWrapper.jsx'

const components = [
    MenuWrapper(),
];

//Run init function (if exists) on all components
components.filter((component) => component.init).forEach((component) => component.init())
