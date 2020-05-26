import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  /**设置 Button 的类名 */
  className?: string;
  /**设置 Button 的状态 */
  disabled?: boolean;
  /**设置 Button 的大小 */
  size?: ButtonSize;
  /**设置 Button 的类别 */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**设置 Button 的跳转 */
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**  
 * 
 * **The buttons of the Nexo UI include the following features:**
 * + Multiple sizes
 * + Multiple types
 * + Can be set to disable
 * 
 * **Nexo组件库的按钮包括以下特点： **     
 * + **多种尺寸**  
 * + **多种类型**
 * + **可设置禁用**
 * 
 * ##### Reference Methods
 * 
 * ~~~js
 * import { Button } from 'nexo'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { 
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;