module.exports = function(config) {
    config.set({

        basePath: '',

        // frameworks to use
        frameworks: ['mocha', 'chai'],
        //
        files: [
            'spec.bundle.js',
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // only specify one entry point
            // and require all tests in there
            'spec.bundle.js': ['webpack', 'sourcemap']
        },
        
        webpack: {
            // webpack configuration
            module: {
                loaders: [
                    { test: /\.js/, exclude: [/node_modules/], loader: 'babel' },
                    {
                        test: /\.html$/,
                        loader: 'raw'
                        // ,
                        // include: appPath
                    },
                    { test: /\.css$/, loader: "style!css"},
                    { test: /\.scss$/, loader: "style!css!sass"}
                ]
                // ,
                // postLoaders: [{
                //     test: /\.js/,
                //     exclude: /(test|node_modules|bower_components)/,
                //     loader: 'istanbul-instrumenter'
                // }]
            },
            resolve: {
                modulesDirectories: [
                    "",
                    "src",
                    "node_modules"
                ]
            }
        },

        webpackServer: {
            noInfo: true // prevent console spamming when running in Karma!
        },

        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            'mocha'
            // Reference: https://github.com/karma-runner/karma-coverage
            // 'coverage'
        ],
        //

        colors: true,
        
        logLevel: config.LOG_INFO,

        webpackServer: {
            noInfo: true // prevent console spamming when running in Karma!
        },
        //
        // webpackMiddleware: {
        //     // webpack-dev-middleware configuration
        //     noInfo: true
        // },

        plugins: [
            require("karma-webpack"),
            require("karma-mocha"),
            require("karma-chai"),
            require("karma-mocha-reporter"),
            require("karma-sourcemap-loader"),
            require("karma-phantomjs-launcher"),
            require("karma-chrome-launcher")

            // require("karma-spec-reporter")
        ],

        browsers: ['PhantomJS', 'Chrome']
    });
};