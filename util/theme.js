const theme = {
  bp: {
    sm: style =>
      `@media only screen and (min-width: 480px) and (max-width: 767px) { ${style} }`,
    md: style =>
      `@media only screen and (min-width: 768px) and (max-width: 1279px) { ${style} }`,
    lg: style =>
      `@media only screen and (min-width: 1280px) and (max-width: 1560px) { ${style} }`,
    xl: style => `@media only screen and (min-width: 1560px) { ${style} }`,
  },

  colors: {
    primary900: '#530028',
    primary800: '#810036',
    primary700: '#B20055',
    primary600: '#D2146F',
    primary500: '#E72280',
    primary400: '#FF3B99',
    primary300: '#FF81BD',
    primary200: '#FFABD3',
    primary100: '#FFCBE4',
    primary050: '#FFEFF4',
    secondary900: '#0B2530',
    secondary800: '#123D40',
    secondary700: '#2A6565',
    secondary600: '#268686',
    secondary500: '#40A4A4',
    secondary400: '#54C7C7',
    secondary300: '#73DADA',
    secondary200: '#97E4E4',
    secondary100: '#BCEBEB',
    secondary050: '#D5F9F7',
    neutral900: '#0C0C0C',
    neutral800: '#222222',
    neutral700: '#444444',
    neutral600: '#666666',
    neutral500: '#878787',
    neutral400: '#A6A6A6',
    neutral300: '#C9C9C9',
    neutral200: '#DCDCDC',
    neutral100: '#EDE9E9',
    neutral050: '#F8F2F2',
    neutral000: '#FFFFFF',
    error3: '#B81818',
    error2: '#FB4242',
    error1: '#EF9696',
    success3: '#2E8E3D',
    success2: '#5DC36D',
    success1: '#89E597',
  },
}

export default theme
