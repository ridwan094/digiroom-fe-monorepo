/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // config tailwind for components in packages
    '../../packages/shared/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: '320px',
        desktop: '1440px',
        'min-desktop': { min: '768px' },
        'md-max-w': { max: '767px' },
        'md-min-max-w': { max: '820px', min: '768px' },
        'wider-screen': '1600px',
      },
      colors: {
        hyperLink: '#036EBC',
        shadeRed: '#B50A0F',
        supportiveRed: '#CE181E',
        white: '#FFFEFE',
        reliableBlack3: '#F8F8F8',
        reliableBlack5: '#F4F4F4',
        reliableBlack10: '#E9E9E9',
        reliableBlack20: '#D3D2D2',
        reliableBlack30: '#BDBCBC',
        reliableBlack50: '#918F8F',
        reliableBlack60: '#7B7979',
        reliableBlack70: '#656263',
        reliableBlack80: '#4F4C4D',
        reliableBlack90: '#393536',
        reliableBlack: '#231F20',
      },
    },
  },
  plugins: [],
};
