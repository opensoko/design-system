import sys from 'system-components'
import { style } from 'styled-system'

import { Box } from './Box'


const overflow = style({
  prop: 'overflow',
  alias: 'overflow',
  cssProperty: 'overflow'
})


export const Border = sys(
  {
    is: Box,
    overflow: 'hidden',
    blacklist: ['borderRadius', 'boxShadow']
  },
  overflow,

  // borders
  'borders',
  'borderColor',
  'borderRadius',

  // effects
  'opacity',
  'boxShadow'
)


Border.displayName = 'Border'


export default Border
