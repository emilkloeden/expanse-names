// webpack.config.babel.js
import {join} from 'path'
const include = join(__dirname, 'src')

export default {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        // in the browser our module can be accessed 
        // as starWarsNames or window.starWarsNames
        library: 'expanseNames',
    },
    devtool: 'source-map',
    module: {
        loaders: [
             // only use babel loader on .js files in src directory
            {test: /\.js$/, loader: 'babel', include},
            // only use json loader on .json files in src directory
            {test: /\.json$/, loader: 'json', include},
        ]
    }
}