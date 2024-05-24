// const tintColorLight = '#DCF9E5';
// const tintColorDark = '#8464C2';

export const AppColors: { [key: string]: string } = {

  primary: '#DCF9E5',
  primaryDark: '#03AF44',

  secondary: '#8464C2',
  secondaryDark: '#400869',
  secondaryLight: '#E4D6FF',

  blue: '#3D73FF',
  red: '#FF3045',
  grey: '#EAEAEA',

  black: 'black',
  white: 'white',
}



export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: AppColors.primary,
    tabIconDefault: '#ccc',
    tabIconSelected: AppColors.primary,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: AppColors.secondary,
    tabIconDefault: '#ccc',
    tabIconSelected: AppColors.secondary,
  },
};
