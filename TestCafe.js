import { Selector, fixture, test } from 'testcafe';

const LOCAL_URL = 'file:///D:/pv/ISMT/2nd%20Year/1st%20Trimester/Agile%20and%20DevOps/pta2/bi95jv.html';

fixture `Local HTML Test`
    .page(LOCAL_URL);

test('Check H1 text in bi95jv.html', async t => {
    const heading = Selector('h1');
    await t.expect(heading.innerText).eql('bi95jv');
});