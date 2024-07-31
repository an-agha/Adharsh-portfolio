# Portfolio Template

### Getting Started
- Fork the repository
- Install dependencies
  `npm i`
- To start the development server
  `npm run dev`
- To build the production files
  `npm run generate`

### Tech Used
- [Nuxt](https://nuxt.com/)
- [UnoCSS](https://unocss.dev/)
- [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
- [Animate on Scroll](https://nuxt.com/modules/aos)
- [Nuxt Image](https://image.nuxt.com/)
- [Nuxt Icon](https://nuxt.com/modules/icon)

#### Data   
Portfolio data is taken from the files present in the `data` directory, replace them with the desired content.
The files are to be put in the `public` directory if a local image is needed to be used, a relative path is to be used in the data files. If an online image is needed to be used, just use the image URL in the data files.
The icon for the `contacts.json` file has to be a valid iconify icon, you can browse them [here](https://icon-sets.iconify.design/).

### Theming
The UI colors are taken from the `color.json` file in the `theme` directory, it can be changed as desired.
- `primary` is the background color of the page.
- `secondary` is the color of the text, links & buttons etc.
- `accent` color is used for certain indication.

Make sure the primary contrasts with the secondary and the secondary contrasts with the primary when switching up the theme.
