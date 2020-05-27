import React, { FC, useState, ChangeEvent } from 'react'
import Input,{ InputProps } from '../Input/input'
import { action } from '@storybook/addon-actions';


interface SearchBoxProps extends Omit<InputProps,'onSelect'>{
    searchSuggestions: (str:string) => string[];
    onSelect?: (item:string) => void;
    renderModel?: (item:string) => void
}

export const SearchBox: FC<SearchBoxProps> =(props)=>{

    const{
        searchSuggestions,
        onSelect,
        value,
        renderModel,
        ...restProps
    } = props

    const [ inputValue, setInputValue ] = useState(value) //搜索框内容
    const [ suggestions, setSuggestions ] = useState<string[]> ([])//下拉框内容

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
        if(!!value){
            const searchResult = searchSuggestions(value)
            setSuggestions(searchResult)
        }else{
            setSuggestions([])
        }
    }
    
    const render = (item:string) =>{
        
    }
    const handleSelect= (item:string) => {
        setInputValue(item)
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
                     {item}
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
            onSelect={action('selected')}
            /> 
            {!!suggestions && dropDown()}
        </div>
    )
};
export default SearchBox;