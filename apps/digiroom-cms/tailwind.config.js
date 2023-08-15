module.exports = {
  content: [
    '../../node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/shared/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
