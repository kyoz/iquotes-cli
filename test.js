import test from 'ava';
import execa from 'execa';

test('get random quote', async t => {
  const {stdout} = await execa('./cli.js');
  t.true(stdout.length > 0);
});

test('get random life quote', async t => {
  const {stdout} = await execa('./cli.js', ['--life']);
  t.true(stdout.length > 0);
});

test('get random love quote', async t => {
  const {stdout} = await execa('./cli.js', ['--love']);
  t.true(stdout.length > 0);
});

test('get random dev quote', async t => {
  const {stdout} = await execa('./cli.js', ['--dev']);
  t.true(stdout.length > 0);
});
