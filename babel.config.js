const babelPlugins = [
  ['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant'],
];
if (process.env.NODE_ENV === 'production') {
  babelPlugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant'],
  ],
};
