import MenuWrapper from './components/menu/menuWrapper.jsx'
import PageWrapper from './components/page/pageWrapper.jsx'

const components = [
    MenuWrapper(),
    PageWrapper(),
];

//Run init function (if exists) on all components
components.filter((component) => component.init).forEach((component) => component.init())
