import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import '../../styles/index.scss'
import Button from './button'


const defaultButton = () => (
  <Button onClick={action('clicked')}> Normal </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> L size </Button>
    <br/>
    <br/>
    <Button size="sm"> S size </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary </Button>
    <br/>
    <br/>
    <Button btnType="danger"> Danger </Button>
    <br/>
    <br/>
    <Button btnType="link" size='lg' href="https://google.com"> Link  </Button>
    <br/>
    <br/>
    <Button btnType="link" disabled = {true}  href="https://google.com"> Disabled Link  </Button>
  </>
)


storiesOf('Button Component', module)
    // .addParameters({
    //     info: {
    //         inline: true 
    //     }
    // })  //添加说明
    // .addDecorator(withInfo)//展示源码按钮插件
    // .addDecorator(CenterDecorator)//调用css
    .add('Button', defaultButton)    
    .add('Diff Size Buttons', buttonWithSize)
    .add('Diff Type Buttons', buttonWithType)