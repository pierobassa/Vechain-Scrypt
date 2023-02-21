const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        popup: path.resolve('src/popup/index.tsx'),
        options: path.resolve('src/options/index.tsx'),
        background: path.resolve('src/background/background.ts'),
        contentScript: path.resolve('src/contentScript/index.tsx'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader', //Loader for typescript files into Javascript files. (Transpile)
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader', // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                type: 'assets/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/, //Importing images
            },
        ]
    },
    "plugins": [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/static'), //Copies from src/static
                to: path.resolve('dist') //into /dist
            }]
        }),
        ...getHtmlPlugins([
            'popup',
            'options',
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts'] //File extensions to resolve
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: { 
        splitChunks: { // this plugin solves code duplication, which can lead to redundant content loaded in the dist.
            chunks(chunk) {
                return chunk.name !== 'contentScript'; //We are splitting chunks but not for contentScript because it is applied to each DOM of a website we visit which matches the 'matches' value of the manifest.json
            }
        }
    }
}

function getHtmlPlugins(chunks) { //For each chunk return a HtmlPlugin object for that chunk
    return chunks.map(chunk => new HtmlPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}