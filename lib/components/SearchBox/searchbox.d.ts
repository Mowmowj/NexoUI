import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/input';
export interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface SearchBoxProps extends Omit<InputProps, 'onSelect'> {
    searchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderModel?: (item: DataSourceType) => ReactElement;
}
export declare const SearchBox: FC<SearchBoxProps>;
export default SearchBox;
