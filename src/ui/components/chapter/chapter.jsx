import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Chapter = (props) => {
    
    useEffect(() => {
        console.log(props)
        return () => {}
    }, []);

    return (
        <div className="chapter">
            <div className="section">
                <div className="container">
                    <p className="chapter__title">{props.model.title}</p>
                </div>
            </div>
        </div>
    )
}

Chapter.propTypes = {
    model: PropTypes.Object,
}

export default Chapter;