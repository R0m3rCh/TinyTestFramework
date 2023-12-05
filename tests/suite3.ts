import { Selector } from 'testcafe';

fixture('Third suite')
    .page('https://devexpress.github.io/testcafe/example');

test('Suite 3 - first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('Suite 3 - second test', async t => {
  await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('Suite 3 - third test', async t => {
  await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
