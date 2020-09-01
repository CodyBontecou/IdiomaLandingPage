import FacebookIcon from '~/components/FacebookIcon'

export default {
  treeShake: true,
  theme: {
    themes: {
      light: {
        primary: '#03BDF1',
        primaryTwo: '#02A6C3',
        'secondary-100': '#D5DF20',
        'secondary-200': '#EBEF90',
        background: '#f3f3f3',
      },
      dark: {
        background: '#f3f3f3',
      },
    },
  },
  icons: {
    values: {
      facebook: {
        component: FacebookIcon,
      },
    },
  },
}
