import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type Themeprops = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface Iconprops extends FontAwesomeIconProps {
    theme?: Themeprops;
    classNames?: string;
}
/**
 * this Icon Component base on FrontAwesomeIcon Library
 */
export declare const Icon: React.FC<Iconprops>;
export default Icon;
