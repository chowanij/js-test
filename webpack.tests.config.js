const hostname = 'localhost';
const port = 4000;

module.exports = {
    entry: 'mocha-loader!./tests/index.js',
    output: {
        filename: 'test.build.js',
        path: '/tests/',
        publicPath: 'http://' + hostname + ':' + port + '/tests'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /(\.css|\.less)$/,
                loader: 'null-loader',
                exclude: [
                    /build/
                ]
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                loader: 'null-loader'
            }
        ]
    },
    devServer: {
        host: hostname,
        port: port,
    }
};