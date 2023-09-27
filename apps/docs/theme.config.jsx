export default {
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  logo: (
    <img
      src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1692404061/Full-logo_llsm3c.svg'
      className='w-[200px]'
    />
  ),
  darkMode: true,
  docsRepositoryBase: 'https://github.com/paulrvach/paperplane-ui-monorepo',
  logoLink:
    'https://res.cloudinary.com/dxmqknhgj/image/upload/v1692404061/Full-logo_llsm3c.svg',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – paperplane-ui'
    }
  },
  faviconGlyph: "✈️",
};
