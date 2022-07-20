import React, { useState, useEffect } from 'react'
import xhr from '../../js/xhr.js'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Menu from '../menu/menu.jsx';
import StartPage from '../../pages/startpage/startpage.jsx';

const Page = (props) => {
    const [pageType, setPageType] = useState("");
    const [menuData, setMenuData] = useState([]);
    const [pageData, setPageData] = useState();

    useEffect(() => {
        if (props.pagetype) {
            setPageType(props.pagetype)
        }
        initPage()
        return () => {}
        }, []
    );
    
    const initPage = () => {
        xhr().sendGetRequest('pages').then(function (data) {
            setMenuData(data)
        });

        if (props.pagetype !== "") {
            xhr().sendGetRequest('pagedata_' + props.pagetype).then(function (data) {
                setPageData(data)
            });
        }   
    }; 

    return (
        <React.Fragment>
            <header class="header">
                <Menu model={menuData} menuCurrentItem={pageType} />
            </header>
            <main class="main">
                <div class="main__content">
                    {pageType === 'start' && pageData && (
                        <StartPage model={pageData} />
                    )}
                </div>
            </main>
            <footer class="footer">
                <div class="section">
                    <div class="container">
                        Footer
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

Page.propTypes = {
    pagetype: PropTypes.string
}

export default Page;