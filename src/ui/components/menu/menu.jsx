import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

const Menu = (props) => {
    const [currentItem, setCurrentItem] = useState();
    
    useEffect(() => {
        return () => {}
      }, []);

    return (
        <div className="menu">
            {props.model.map((menuItem, key) => {
                return (
                    <div key={`menuitem${key}`} className={classNames('menu__item', { 'menu__item--selected': menuItem.page === props.menuCurrentItem })}>
                        <a className="menu__item-link" href={menuItem.url}>
                            <KeyboardArrowRightRoundedIcon className="menu__item-icon" />
                            {menuItem.name}
                            </a>
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