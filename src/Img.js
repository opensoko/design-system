import sys from 'system-components'
import { style } from 'styled-system'


const overflow = style({
  prop: 'overflow',
  alias: 'overflow',
  cssProperty: 'overflow'
})


export const Img = sys(
  {
    is: 'img',
    overflow: 'hidden',
    blacklist: ['borderRadius']
  },
  overflow,
  
  // core
  'space',
  'color',

  // borders
  'borders',
  'borderColor',
  'borderRadius'
)

Img.displayName = 'Img'


export default Img
