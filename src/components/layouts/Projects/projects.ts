/**Dependencies */
import path from 'path-browserify'

let dirname = path.dirname('/src/images')

export default [
  {
    githubLink: 'https://github.com/Ocholla-T/country',
    imageSource: path.resolve(dirname, '/src/images/flag-outline.svg'),
    projectDescription:
      'Integrates with the REST Countries V2 API to pull data and display it like in the provided designs',
    projectLink: 'https://countryinfo-ochollat.netlify.app/',
    projectTitle: 'Country Info',
    techUsed: ['Vuex', 'VueJS'],
  },
  {
    githubLink: 'https://github.com/Ocholla-T/shortly',
    imageSource: path.resolve(dirname, '/src/images/link-outline.svg'),
    projectDescription:
      'Integrates with the shrtcode API to create shortened URLs and display them like in the designs. Worked with browser storage to persist data.',
    projectLink: 'https://shortly-ochollat.netlify.app/',
    projectTitle: 'Shortly',
    techUsed: ['VueJS'],
  },
  {
    githubLink: 'https://github.com/Ocholla-T/ochollatonny.dev',
    imageSource: path.resolve(dirname, '/src/images/code-slash-outline.svg'),
    projectDescription:
      'Frontend Mentor challenge that integrates with the REST Countries V2 API to pull data and display it like in the provided designs',
    projectLink: 'https://countryinfo-ochollat.netlify.app/',
    projectTitle: 'ochollatonny.dev',
    techUsed: ['ReactJS', 'Typescript'],
  },
]
