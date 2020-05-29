import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export interface BaseButtonProps {
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
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
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
export declare const Button: FC<ButtonProps>;
export default Button;
