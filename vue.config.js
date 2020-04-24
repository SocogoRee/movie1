//静态资源配置
module.exports = {
	publicPath : '/movie1',
	devServer : {
		proxy : {
			'/api' : {
				target : 'http://39.97.33.178',
				changeOrigin : true
			}
		}
	}
}