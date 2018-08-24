// Breakpoints are based on the different device sizes
export const breakpoints = [32, 48, 64, 80].map(n => n + 'em')

export const space = [0, 2, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 16, 21, 28, 37, 49, 65, 86]

export const fontWeights = {light: 100, regular: 400, bold: 700 }

export const defaultColors = { black: '#000000', white: '#FFFFFF', transparent: 'transparent' }

export const systemColors = {
  success: ['#2AB542', '#228F35', '#007314'],
  info: ['#A7D3FF', '#7EA8D2', '#5C89B7'],
  warning: ['#F7D38E', '#F5C260', '#E4B55A'],
  danger: ['#EA4547', '#DB484A', '#C71C1E']
}

export const colors = { ...defaultColors, ...systemColors }

export const radii = [ 0, 2, 4, 8]
export const borders = [0, '1px solid', '2px solid']

export const fonts = {
  0: 'Maax, system-ui, sans-serif',
  sans: 'system-ui, sans-serif',
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
}

export const shadows = ["none","0 0px 2px rgba(0,0,0,.08), 0 8px 8px rgba(0,0,0,.08), 0 16px 16px rgba(0,0,0,.08)", "0 0px 2px rgba(0,0,0,.08), 0 8px 8px rgba(0,0,0,.08), 0 16px 16px rgba(0,0,0,.08), 0 32px 32px rgba(0,0,0,.16)", "0 0px 2px rgba(0,0,0,.08), 0 8px 8px rgba(0,0,0,.08), 0 16px 16px rgba(0,0,0,.08), 0 32px 32px rgba(0,0,0,.16), 0 64px 64px rgba(0,0,0,.16)"]


export default {
  breakpoints,
  space,
  fontSizes,
  fontWeights,
  fonts,
  colors,
  radii,
  shadows
}
