import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type Themeprops = 'primary'|'secondary'|'success'|'info'|'warning'|'danger'|'light'|'dark'

export interface Iconprops extends FontAwesomeIconProps{
    theme?: Themeprops
    classNames?: string
}

/**
 * this Icon Component base on FrontAwesomeIcon Library
 * #### Install
 * ~~~js
 * import { Icon } from 'nexo'
 * ~~~
 */
export const Icon: React.FC<Iconprops> =(props)=>{
    const {className,theme,...restProps} =props
    const classes = classNames('nexo-icon',{
        [`icon-${theme}`] : theme ,  //传入theme 自动给他定义一个 icon-primary的值
    })
    return(
        <FontAwesomeIcon className={classes} {...restProps} /> 
    )
}

export default Icon;