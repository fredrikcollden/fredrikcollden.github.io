import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Chapter from '../chapter/chapter.jsx';
import classNames from 'classnames';

const Book = (props) => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        setChapters(props.model)
        return () => {}
      }, []);

    return (
        <div className="book">
            {chapters.map((chapter, key) => {
                return (
                    <Chapter model={chapter} />
                )
            })}
        </div>
    )
}

Book.propTypes = {
    model: PropTypes.array,
}

export default Book;