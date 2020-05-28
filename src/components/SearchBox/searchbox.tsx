import React, { FC, useState, ChangeEvent,KeyboardEvent, ReactElement, useEffect ,useRef } from 'react'
import classNames from 'classnames'
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
    const [ hightlightInex, sethightlightInex] = useState(-8)
    const toggleSearch = useRef(false)
    const debounceValue = useDebounce(inputValue,500)//自定义函数防抖hook
    useEffect(()=>{
        if(!!debounceValue&&toggleSearch.current){
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
        sethightlightInex(-8)
    },[debounceValue, searchSuggestions])
    
    const handleChange = (e: ChangeEvent< HTMLInputElement >) => {
        const value = e.target.value.trim()
        toggleSearch.current = true
        setInputValue(value)
    }
    const selectList = (index:number)=>{
        if(index<0) index = 0
        if (index >= suggestions.length) index = suggestions.length-1
         sethightlightInex(index)
    }
    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        switch (e.keyCode) {
            case 13:
                if (suggestions[hightlightInex]) {
                    handleSelect(suggestions[hightlightInex])
                }
                break;
            case 38:
                selectList(hightlightInex-1)
                break
            case 40:
                selectList(hightlightInex+1)
                break
            case 27:
                setSuggestions([])
                break
            default:
                break;
        }
    }
    const renderSetting = (item: DataSourceType) =>{
        return renderModel? renderModel(item) : item.value
    }
    const handleSelect= (item: DataSourceType) => {
        setInputValue(item.value)
        toggleSearch.current = false
        setSuggestions([])
        if(onSelect){
            onSelect(item)
        }
    }
    const dropDown = () => {
        return(
            <ul className="nexo-suggestion-list">
                {suggestions.map((item,index) => {
                    const classname = classNames('suggestion-item',{
                        'is-active' : index === hightlightInex
                    })
                    return (
                    <li key={index} className = {classname} onClick={()=>handleSelect(item)}>
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
            onKeyDown={handleKeyDown}
            />
            <div className="suggstions-loading-icon">
            { isLoading && <ul><Icon icon="spinner" spin/></ul> }
            </div>
            { !!suggestions && dropDown() }
        </div>
    )
    };
export default SearchBox;