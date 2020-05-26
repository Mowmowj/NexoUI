import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import '../../styles/index.scss'
import Icon from './icon'



const icon = () => (
  <>
  <h4>Static Icon</h4>
      <Icon icon='arrow-down' theme='primary' size='2x'/><span>  </span>
      <Icon icon="plane" theme='primary' size='2x'/><span>  </span>
      <Icon icon="tag" theme='info' size='2x'/><span>  </span>
      <Icon icon="star" theme='info' size='2x'/><span>  </span>
      <Icon icon="rocket" theme='secondary' size='2x'/><span>  </span>
      <Icon icon="truck" theme='secondary' size='2x'/><span>  </span>
      <Icon icon="arrows-alt" theme='success' size='2x'/><span>  </span>
      <Icon icon="expand" theme='success' size='2x'/><span>  </span>
      <Icon icon="backward" theme='warning' size='2x'/><span>  </span>
      <Icon icon="play" theme='warning' size='2x'/><span>  </span>
      <Icon icon="stop" theme='light' size='2x'/><span>  </span>
      <Icon icon="fast-forward" theme='dark' size='2x'/><span>  </span>
      <Icon icon="random" theme='danger' size='2x'/><span>  </span>
  <h4>Diff Size Icon</h4>
      <Icon icon='toggle-on' theme='success' size='3x'/><span>  </span>
      <Icon icon="toggle-off" theme='dark' size='4x'/><span>  </span>
      <Icon icon="flash" theme='warning' size='4x'/><span>  </span>
  <h4>Dynamic Icon</h4>
      <div className='a'>
      <Icon icon='hourglass-half' theme='danger' size='2x'/>
      </div>
      <div className='b'>
      <Icon icon='cog' theme='dark' size='2x'/>
      </div>
      <div className='c'>
      <Icon icon='male' theme='dark' size='4x'/>
      </div>
      <div className='d'>
      <Icon icon='key' theme='success' size='2x'/>
      </div>

  </>
)




// ,{info:{inline:false}}
storiesOf('Icon Component', module).add('Icon', icon,{info:{inline:false}})    
 