const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const dotenv = require('dotenv')

module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            new DefinePlugin({
                'process.env': JSON.stringify(dotenv.config().parsed)
            })
        ]
    },
    transpileDependencies: true,
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
})
