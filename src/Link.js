import sys from 'system-components'


export const Link = sys(
  {
    is: 'a',
    color: 'inherit'
  },
  {
    'text-decoration': 'none',
    'display': 'inline-block'
  },
  'space'
)

Link.displayName = 'Link'


export default Link
