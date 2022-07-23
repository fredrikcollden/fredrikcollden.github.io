import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Chapter = (props) => {
    
    useEffect(() => {
        console.log(props)
        return () => {}
    }, []);

    const model = { ...props.model }

    return (
        <div className="chapter">
            {model.bg && (
                <img className="chapter__bg chapter__bg--fade" src={model.bg} />
            )}
            <div className="section">
                <div className="container">
                    <div className="chapter__content">
                        <p className="chapter__title">{model.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Chapter.propTypes = {
    model: PropTypes.object,
}

export default Chapter;