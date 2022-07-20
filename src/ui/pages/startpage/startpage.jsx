import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Book from '../../components/book/book.jsx';
import classNames from 'classnames';

const StartPage = (props) => {
    
    useEffect(() => {
        console.log('book: ', props.model)
        return () => {}
      }, []);

    return (
        <div className="startpage">
            <Book model={props.model.book}/>
        </div>
    )
}

StartPage.propTypes = {
    model: PropTypes.Object,
}

export default StartPage;