import sys from 'system-components'


export const Text = sys(
  {
    m: 0,
    fontFamily: 'inherit'
  },
  'space',
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight'
)


Text.displayName = 'Text'


export default Text
