import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/hanzi-physics.umd.js',
      format: 'umd',
      name: 'HanziPhysics'
    },
    {
      file: 'dist/hanzi-physics.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve({
      // 允许解析 node_modules 里的依赖
      browser: true,
      preferBuiltins: false
    }),
    commonjs(), // 将 CommonJS 模块转成 ES Module
    typescript({ tsconfig: './tsconfig.json' })
  ]
};