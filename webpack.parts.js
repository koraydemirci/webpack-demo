exports.devServer = ({host, port} = {}) => ({
    devServer: {
        stats: 'errors-only',
        host,
        port,
        overlay: true
    }
})