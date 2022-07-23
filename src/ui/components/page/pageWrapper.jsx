
import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './page.jsx';

const PageWrapper = function () {
    const pageElementsName = 'page'
    const pageElements = document.querySelectorAll('[data-react-element="'+ pageElementsName + '"]')

    const self = {

        init() {
            pageElements.forEach((page) => {
                const pageType = page.dataset.pagetype;
                
                if (pageType) {
                    const root = ReactDOM.createRoot(page);
                    root.render(<Page pagetype={pageType} />);
                }
            })
        },
    }
    
    return self;

};

export default PageWrapper;