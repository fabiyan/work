const path = require('path');
const webpack = require('webpack');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry=require('./webpack_config/webpack_entry.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:'development',//若用production，则会将dist中的代码压缩
    entry:entry,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader'],
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },'postcss-loader']
                })
            },{
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.html$/i,
                loader:'html-withimg-loader'

            },{
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },{
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            hash:true,
            template:'./src/test.html',
            filename:'test.html'
        }),
        new ExtractTextPlugin('./test.css'),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
                paths: glob.sync(path.join(__dirname, 'src/*.html')),
            }),
        new webpack.BannerPlugin('hello hello'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyWebpackPlugin([{
            from:__dirname+"/src/txt",
            to:'./txt'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        // compress:true,
        port:8081,
        open:true,
        hot:true

    }
}