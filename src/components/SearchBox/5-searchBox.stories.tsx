import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { SearchBox,DataSourceType } from './searchbox'


interface clipperPlayerProps {
  value: string;
  number: number;
}

const clipperssWithNumber = [
  {value: 'paul george', number: 9},
  {value: 'kawhi leonard', number: 8},
  {value: 'montrezl harrell', number: 4},
  {value: 'lou williams', number: 14},
  {value: 'jaMychal green', number: 5},
  {value: 'patrick beverley', number: 7},
  {value: 'rodney mcGruder', number: 3},
  {value: 'jerome robinson', number: 1},
]
const defaultSearchBox = () => {
  const handleFetch = (query: string) => {
    return clipperssWithNumber.filter(player => {
      return player.value.includes(query)})
  }
  const renderModel = (data: DataSourceType ) =>{
    const item = data as DataSourceType<clipperPlayerProps>
    return (
    <>
    <h4>name:{item.value}</h4>
    <p> number:{item.number}</p>
    </>
    )
  }
  return (
    <>
    <h6>尝试搜索NBA快船队队员(如paul):</h6>
    <h5>Use for search the NBA Clipper team players' name(such as paul):</h5>
    
    <SearchBox 
    searchSuggestions = { handleFetch }
      onSelect = { action('selected') }
      renderModel = { renderModel}
      style={{width: '300px'}}
      size='sm' 
    />
    </>
  )
}

const apiSerachbox = () =>{
  
  interface GithubUserIDProps {
    login: string;
    html_url: string;
  }

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)  //github name api
      .then(res => res.json())
      .then(({ items }) => {
        return items.slice(0, 8).map((item: any) => ({ value: item.login, ...item}))
      })
  }
  
  const renderModel = (item: DataSourceType) => {
    const githubItem = item as DataSourceType<GithubUserIDProps>
    return (
      <>
        <p> {githubItem.value}</p>
        <p>Userpage: {githubItem.html_url}</p>
      </>
    )
  }

  return(
    <>
    <h6>尝试搜索github用户名(如Mowmowj):</h6>
    <h5>Use for search the Github users' ID(such as Moswmowj):</h5>
    <SearchBox 
    searchSuggestions = { handleFetch }
      onSelect = { action('selected') }
      renderModel = { renderModel} 
      style={{width: '300px'}}
      size='sm'
    />
    </>
  )
}

storiesOf('SearchBox Component', module)
  .add('SearchBox', defaultSearchBox)
  .add('ApiSearchBox', apiSerachbox)