module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      /*Activo el modul react-native-dotenv i modifiquem les característiques: nom, pat, etc*/
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      "react-native-reanimated/plugin", // Plugin para arreglar error de librerias de navegacion
    ],
  };
};
