const path = require('path')

// 使用@作为src路径
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Bill': path.resolve(__dirname, 'src/exercises/Bill')
    }
  }
}