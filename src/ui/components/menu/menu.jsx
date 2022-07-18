import {xhr} from '../../js/xhr.js'

const menu = function () {

    const self = {

        init() {
            xhr().sendGetRequest('pages').then(function (data) {
                self.initMenu(data)
            });  
        },

        initMenu(menuData) {
            console.log('menuData', menuData)
        }
    }
    
    return self;

};

export {menu};