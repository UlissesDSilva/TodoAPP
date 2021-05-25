const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //Extensões jsx para a ide reconhecer códigos react na aplicação
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port:8081,
        contentBase: './public'
    },
    resolve: {
        //Webpack por padrão não reconhece, quando importa os modules, a extensão .jsx
        extensions: ['', '.js', '.jsx'],
        alias: { modules: __dirname + '/node_modules' }, //Apenas para facilitar o acesso a pasta node_modules

    },
    plugins: [
        new ExtractTextPlugin('app.css'), //Nome do arquivo que será gerado a parti do paser feito em cima dos css
    ],
    module: {
        loaders: [
            {
                test: /.js[x]?$/, //quais extensões de arquivo receberam o parse
                loader: 'babel-loader', //loader responsável pelo parse
                exclude: '/node_modules/', // ignora a pasta para não ser feito nenhum parse
                query:{ //preset aplicados nos arquivos lidos a parti do loader
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },{
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
            }
        ]
    }
}