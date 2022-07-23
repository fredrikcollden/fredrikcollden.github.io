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
            xhr().getWpPosts('startpage').then(function (data) {
                setPageData(data)
            });
        }   
    }; 

    return (
        <React.Fragment>
            <header className="header">
                <Menu model={menuData} menuCurrentItem={pageType} />
            </header>
            <main className="main">
                <div className="main__content">
                    {pageType === 'start' && pageData && (
                        <StartPage model={pageData} />
                    )}
                </div>
            </main>
            <footer className="footer">
                <div className="section">
                    <div className="container">
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