module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { corejs: 3, targets: { node: true }, useBuiltIns: 'entry' }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
    ],
  };
};
