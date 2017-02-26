var config = {
	entry: './main.js',
	output: {
      path:'/',
      filename: 'client.js',
	},
	devServer: {
      inline: true,
      port: 3000
   },
    module: {
      loaders: [
         {
			test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
    resolve: {
		extensions: ['.js', '.jsx'],
    }

}
module.exports = config;

process.noDeprecation = true;