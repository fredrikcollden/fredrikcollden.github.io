
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './page.jsx';

const PageWrapper = function () {
    const pageElementsName = 'page'
    const pageElements = document.querySelectorAll('[data-react-element="'+ pageElementsName + '"]')

    const self = {

        init() {
            pageElements.forEach((page) => {
                const pageType = page.dataset.pagetype;
                
                if (pageType) {
                    ReactDOM.render(<Page pagetype={pageType} />, page);
                }
            })
        },
    }
    
    return self;

};

export default PageWrapper;