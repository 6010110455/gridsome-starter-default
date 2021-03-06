// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  siteName: 'BENZ&NAY',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
          'https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes',
      },
    },
  ],

};