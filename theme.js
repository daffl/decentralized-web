import { default as theme } from 'mdx-deck/themes'

export default {
  ...theme,
  // add a custom font
  font: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif',
  css: {
    fontSize: '30px',
    fontWeight: 200
  },
  // custom colors
  colors: {
    ...theme.colors,
    heading: '#4b4df1',
    link: '#e4517f'
  },
  h1: {
    color: '#4b4df1',
    fontWeight: 200
  }
}
