
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-backgrounds/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use:[
        {
          loader: require.resolve('babel-loader'),
          options: {
          presets: [['react-app', { flow: false, typescript: true }]],
            }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),//用于支持写文档
          options: {
            shouldExtractLiteralValuesFromEnum: true, //接收枚举
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')//不要html自带element
              }
              return true            
            }
          }
        } 
        ]
  });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
