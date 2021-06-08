import path from 'path'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
    mode: 'development',
    entry: src + '/index.tsx',

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                exclude: path.resolve(__dirname, 'node_modules', 'font-awesome'),
                use: ['babel-loader', 'react-svg-loader'],
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'node_modules', 'font-awesome'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        jsx: true,
                    },
                }],
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    plugins: []
}
