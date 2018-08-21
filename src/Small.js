import sys from 'system-components'

import Text from './Text'


export const Small = sys(
  {
    is: Text,
    fontSize: '0.75em',
    fontFamily: 'inherit',
    lineHeight: 1.4
  }
)


Small.displayName = 'Small'


export default Small
