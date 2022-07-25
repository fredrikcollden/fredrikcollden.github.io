import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import SvgFade from '../svgfade/svgfade.jsx';

const Chapter = (props) => {
    
    useEffect(() => {
        console.log(props)
        return () => {}
    }, []);

    const model = { ...props.model }

    const chapterClassNames = classNames('chapter', { 
        [`chapter--color-${model.color}`]: model.color, 
        [`chapter--align-${model.align}`]: model.align 
    })

    const chapterFadeWrapperClassNames = classNames('chapter__fade-wrapper', { 
        [`chapter__fade-wrapper--color-${model.color}`]: model.color 
    })

    return (
        <div className={chapterClassNames}>
            {model.bg && (
                <div className="chapter__bg-wrapper">
                    <div className="chapter__bg">
                        <img className="chapter__bg-img" src={model.bg} />
                        <div className={chapterFadeWrapperClassNames}>
                            <SvgFade color={model.color}/>
                        </div>
                    </div>
                </div>
            )}
            <div className="section">
                <div className="container">
                    <div className="chapter__content">
                        <h2 className="chapter__title">{model.title}</h2>
                        <div className="chapter__text" dangerouslySetInnerHTML={{__html: model.text}} />
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