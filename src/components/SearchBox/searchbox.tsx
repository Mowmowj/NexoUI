import React, { FC, useState, ChangeEvent, ReactElement, useEffect } from 'react'
import Input,{ InputProps } from '../Input/input';
import { Icon } from "../Icon/icon";
import  useDebounce  from "../../Hook/useDebounce";

export interface DataSourceObject {
    value: string
}
export type DataSourceType< T = {} > = T & DataSourceObject;
export interface SearchBoxProps extends Omit<InputProps,'onSelect'>{
    searchSuggestions: (str:string) => DataSourceType[]|Promise<DataSourceType[]>;
    onSelect?: (item:DataSourceType) => void;
    renderModel?: (item:DataSourceType) => ReactElement;
}

export const SearchBox: FC<SearchBoxProps> =(props)=>{
    const{
        searchSuggestions,
        onSelect,
        value,
        renderModel,
        ...restProps
    } = props

    const [ inputValue, setInputValue ] = useState(value as string) //搜索框内容
    const [ suggestions, setSuggestions ] = useState< DataSourceType[] > ([])//下拉框内容
    const [ isLoading, setisLoading] = useState(false)
    const debounceValue = useDebounce(inputValue,500)//自定义函数防抖hook
    useEffect(()=>{
        if(!!debounceValue){
            const searchResult = searchSuggestions(debounceValue)
            if (searchResult instanceof Promise) {
                // console.log('promise');
                setisLoading(true)
                searchResult.then( data=> {
                setisLoading(false)
                setSuggestions(data)
                })
            } else {
                setSuggestions(searchResult)
            }
        }else{
            setSuggestions([])
        }
    },[debounceValue])
    const handleChange = (e: ChangeEvent< HTMLInputElement >) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }

    const renderSetting = (item: DataSourceType) =>{
        return renderModel? renderModel(item) : item.value
    }
    const handleSelect= (item: DataSourceType) => {
        setInputValue(item.value)
        setSuggestions([])
        if(onSelect){
            onSelect(item)
        }
    }

    const dropDown = () => {
        return(
            <ul>
                {suggestions.map((item,index) => {
                    return (
                    <li key={index} onClick={()=>handleSelect(item)}>
                        {renderSetting(item)}
                    </li>
                    )
                })}
            </ul>
        )
    }
    return(
        <div className='nexo-searchbox'>
            <Input
            value={inputValue}
            {...restProps}
            onChange={handleChange}
            /> 
            { isLoading && <ul><Icon icon="spinner" spin/></ul> }
            { !!suggestions && dropDown() }
        </div>
    )
    };
export default SearchBox;