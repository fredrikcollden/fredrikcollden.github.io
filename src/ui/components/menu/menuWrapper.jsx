import xhr from '../../js/xhr.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './menu.jsx';

const MenuWrapper = function () {
    const containerName = 'menu'
    const elements = document.querySelectorAll('[data-react-element="'+ containerName + '"]')

    const self = {

        init() {
            if (elements.length > 0) {
                xhr().sendGetRequest('pages').then(function (data) {
                    elements.forEach((element) => {
                        self.initMenu(element, data)
                    })
                    
                }); 
            }
        },

        initMenu(element, menuData) {
            ReactDOM.render(<Menu model={menuData} menuCurrentItem="main"/>, element);
        }
    }
    
    return self;

};

export default MenuWrapper;