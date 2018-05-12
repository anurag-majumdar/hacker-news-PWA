module.exports = {
    globDirectory: './dist/',
    globPatterns: [
        '**/*.{html,js,css,json,png,woff2}'
    ],
    swDest: './dist/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
        {
            urlPattern: new RegExp('https://hacker-news.firebaseio.com'),
            handler: 'staleWhileRevalidate'
        }
    ],
    globIgnores: [
        "../workbox-config.js",
        "3rdpartylicenses.txt",
        "worker-basic.min.js",
        "ngsw-worker.js",
        "ngsw.json",
        "safety-worker.js"
    ]
};