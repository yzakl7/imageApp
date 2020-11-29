export const getColors = () => {
  // we can add a layout contex, so that having a darkmode
  // would be done easily
  return { ...lightMode}
}

export const Typography = {
  md: 13,
  bg: 15,
  xl: 17,
  icon: 24
}

const lightMode = {
  danger: 'red',
  primary: 'black',
  active: 'tomato',
  backgroundColor: '#e7e7e7',
  backgroundLight: 'white',
  elementBackground: '#b8e1ff',
  disabledElementBackground: '#9fa4a6',
  borderColor: 'gray'
}