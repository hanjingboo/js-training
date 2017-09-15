const babel = require('babel-core');
const _import = require('./import.js');

const test = `import { ButtonIcon } from 'antd';`;

let {
  code
} = babel.transform(test, {
  plugins: [
    [_import, {
      libraryName: 'elem'
    }]
  ]
});

console.log(code);