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

    processors: {
        babel7: {
            hook: {
                before(file, options) {
                    if (file.path.indexOf('/@babel/runtime/helpers/') !== -1) {
                        options.plugins = [];
                        options.presets = [];
                    }
                }
            },
            options: {
                presets: ['@babel/preset-env'],
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
