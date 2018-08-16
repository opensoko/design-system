import sys from 'system-components'
import { style } from 'styled-system'

import Img from './Img'


export const Image = sys(
  {
    is: Img,
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  },
  // core
  'width'
)


Image.displayName = 'Image'


export default Image
