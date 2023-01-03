import theme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index'

export default {
  ...theme,
  section_hero: {
//    display: 'none',
    mb: [5, 6, 6],
//    p: { fontSize: [1, 2, 3], mt: 2 }
  },
  section_bottom: {
    display: 'none'
  },
  header: {
    mb: [0, 0],
    mt: [12, 12, 12],
    display: 'none',
  }
}
