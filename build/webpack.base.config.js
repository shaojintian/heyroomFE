const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CheckerPlugin} = require('awesome-typescript-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx','.vue'],
        alias:{
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                        
                ]
            },
            {

                test: /\.(png|jpg|gif|svg|ttf|woff)$/,
              
                loader: 'file-loader',
              
                options: {
              
                  name: '[name].[ext]?[hash]'
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        new CheckerPlugin(),
        new VueLoaderPlugin()
    ]
    
}
