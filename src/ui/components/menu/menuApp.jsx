import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MenuApp = (props) => {

    return (
        
        <div>
            {props.menuData.map((menuItem, key) => {
                return <a href={menuItem.url}>{menuItem.name}</a>
            })}
        </div>
    )
}

MenuApp.propTypes = {
    menuData: PropTypes.array
}

export default MenuApp;