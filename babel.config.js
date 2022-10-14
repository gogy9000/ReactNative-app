// @generated: @expo/next-adapter@4.0.12
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
    presets: ['@expo/next-adapter/babel'],
    plugins: [
        ['styled-components', { ssr: true }],
        'react-native-reanimated/plugin',
        // ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ]
};
