import sys from 'system-components'
import { style } from 'styled-system'

import Border from './Border'


export const Avatar = sys(
  {
    is: Border,
    size: 48,
    bg: '#0083FF',
    color: '#FFFFFF',
    display: 'flex',
    borderRadius: '99999px',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  'size'
)


Avatar.displayName = 'Avatar'


export default Avatar
