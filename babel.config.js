module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Adicione outros plugins aqui se necessário
    ],
  };
};
