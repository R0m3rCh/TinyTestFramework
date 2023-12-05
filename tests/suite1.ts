import { Selector } from 'testcafe';

fixture('First suite')
    .page('https://devexpress.github.io/testcafe/example');

test('Suite 1 - first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('Suite 1 - second test', async t => {
  await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
