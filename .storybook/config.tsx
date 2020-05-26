import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


import React from 'react'

import "../src/styles/index.scss"

library.add(fas)

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>Nexo Components Show</h3>
    <br/>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addDecorator(centered)
addParameters({info: { inline: true, header: false}})
// const loaderFn = () => {
//   const allExports = [require('../src/stories/0-Welcome.stories')];
//   const req = require.context('../src/components', true, /\.stories\.tsx$/);
//   req.keys().forEach(fname => allExports.push(req(fname)));
//   return allExports;
// };



// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/),module);
