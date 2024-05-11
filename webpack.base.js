

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
module.exports = {
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
              },
        ]
    },
    resolve: {
        extensions: [".js",".vue"],
        alias: {
            "@": path.resolve(process.cwd(), "./src")
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        // 全面拥抱vue3 Composition API
        new DefinePlugin({
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ :false,
            __VUE_OPTIONS_API__: false,
          }),
    ],

}