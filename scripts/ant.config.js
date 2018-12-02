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
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
});
