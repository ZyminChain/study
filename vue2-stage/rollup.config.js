import babel from 'rollup-plugin-babel';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue.js', // 输出文件
    format: 'umd', // 通用模块定义
    name: 'Vue', // 全局变量名 global.Vue
    sourcemap: true // 调试源代码
  },
  plugins: [
    commonjs(), // 处理 CommonJS 模块
    babel({
      exclude: 'node_modules/**', // 忽略 node_modules 目录
      presets: ['@babel/preset-env']
    }),
    serve(),
    livereload({
      watch: 'dist/**', // 监视 dist 目录下的所有文件
      port: 12345,
      delay: 300,
    }),

  ]
}