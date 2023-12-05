import { Selector } from 'testcafe';

fixture('Second suite')
    .page('https://devexpress.github.io/testcafe/example');

test('Suite 2 - first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
