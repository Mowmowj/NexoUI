import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
import '../../styles/index.scss'

const ControllInput = () => {
  const [value, setValue] = useState('')
  return <Input style={{width: '300px'}} value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
}
const defaultInput = () => (
  <>
  <Input
    style={{width: '300px'}}
    placeholder="default holder"
    onChange={action('')}
  />
  <ControllInput />
  </>
)
const disabledInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="disabled input"
    disabled 
  />
)

const iconInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="input with icon"
    icon="search"
  />  
)

const diffsizeInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
  </>
)

const pendInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="github"
      append=".com"
    />
   
    
  </>
)


storiesOf('Input component', module)
  .add('Input', defaultInput)
  .add('Disabled Input', disabledInput)
  .add('Input with Icon', iconInput)
  .add('Diff Size Input', diffsizeInput)
  .add('Input with Pend', pendInput)
