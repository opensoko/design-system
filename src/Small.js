import sys from 'system-components'

import Text from './Text'


export const Small = sys(
  {
    is: Text,
    fontSize: '0.75em',
    lineHeight: 1.4
  }
)


Small.displayName = 'Small'


export default Small
