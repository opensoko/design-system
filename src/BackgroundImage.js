import sys from 'system-components'
import { style } from 'styled-system'

import { Border } from './Border'


const bgImage = style({
  prop: 'image',
  alias: 'src',
  cssProperty: 'backgroundImage',
  getter: n => `url(${n})`
})

export const BackgroundImage = sys(
  {
    is: Border,
    ratio: 3/4,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  bgImage,

  // background
  'ratio',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat'
)


BackgroundImage.displayName = 'BackgroundImage'


export default BackgroundImage
