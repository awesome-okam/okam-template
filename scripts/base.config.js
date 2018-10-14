/**
 * @file Build mini program base config
 * @author <author>
 */

'use strict';

const path = require('path');
const rider = require('rider');

const DEV_SERVER_PORT = 9090;

module.exports = {
    verbose: false,
    root: path.join(__dirname, '..'),
    output: {
        dir: 'dist',
        depDir: 'src/common'
    },
    component: {
        extname: 'vue',
        template: {
            transformTags: {
                // div p 将转为 view 标签
                view: ['div', 'p'],
                // a 将标签转为 navigator 标签，href 属性 转为 url 属性
                navigator: {
                    tag: 'a',
                    href: 'url'
                },
                // img 将转为 image 标签
                image: 'img'
            }
        }
    },
    framework: [
        'data'
        // 'ref'
    ],
    processors: {
        babel7: {
            extnames: ['js']
        },
        stylus: {
            options: {
                use(style) {
                    style.use(rider());
                }
            }
        },
        postcss: {
            extnames: ['styl'],
            options: {
                plugins: {
                    px2rpx: {
                        // 设计稿尺寸
                        designWidth: 1242
                    }
                }
            }
        }
    },

    server: { // 启用开发 Server
        port: DEV_SERVER_PORT,
        // 需要安装 mock 中间件 npm i autoresponse --save-dev
        middlewares: [
            // name: 'autoresponse',
            // options: {

            //}
        ]
    },

    dev: {
        rules: [
            {
                match: /\.(png|jpe?g|gif)(\?.*)?$/,
                processors: {
                    tinyimg: {
                        replaceRaw: true
                    }
                }
            }
            // {
            //     match: 'src/**/*.js',
            //     processors: [
            //         ['replacement', {
            //             'https://online.com': '${devServer}',
            //         }]
            //     ]
            // }
        ]
    }
};
