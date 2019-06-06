import * as fs from 'fs';
import * as util from 'util';
import main from '../src/main';

describe('teste the translator-loader', () => {
  test('test the loader output', async () => {
    const readFileAsync = util.promisify(fs.readFile).bind(fs);

    let source = readFileAsync(`${__dirname}/input/test.yaml`, {
      encoding: 'utf8'
    });
    let expected = readFileAsync(`${__dirname}/expected/test-expected.js`, {
      encoding: 'utf8'
    });

    [source, expected] = await Promise.all([source, expected]);

    const newSource = await main(source);

    expect(newSource).toMatch(expected);
  });
});
