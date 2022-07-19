import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Menu = (props) => {
    const [currentItem, setCurrentItem] = useState();
    
    useEffect(() => {
        if (props.menuCurrentItem) {
            setCurrentItem(props.menuCurrentItem)
        }
        return () => {}
      }, []);

    return (
        <div className="menu">
            {props.model.map((menuItem, key) => {
                return (
                    <div className={classNames('menu__item', { 'menu__item--selected': menuItem.page === currentItem })}>
                        <a className="menu__item-link" href={menuItem.url}>{menuItem.name}</a>
                    </div>
                )
            })}
        </div>
    )
}

Menu.propTypes = {
    model: PropTypes.array,
    menuCurrentItem: PropTypes.string
}

export default Menu;