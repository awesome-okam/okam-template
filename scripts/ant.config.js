/**
 * @file Build ant mini program build config
 * @author <author>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'ant_dist',
        depDir: 'src/common'
    },

    // localPolyfill: ['async'],

    processors: {
        babel7: {
            options: {
                presets: [['@babel/preset-env', {
                    // exclude 这个转换，避免出现 babel helper typeof 自己引用自己问题
                    exclude: ['transform-typeof-symbol']
                }]],
                plugins: [
                    ['@babel/plugin-transform-runtime', {
                        corejs: false,
                        helpers: true,
                        regenerator: false,
                        useESModules: false
                    }]
                ]
            }
        }
    }
});
