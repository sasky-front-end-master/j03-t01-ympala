import { Selector } from 'testcafe';

fixture `funktio ympala`
    .page `../tehtava.html`;

test('Tulostetaan vaadittu teksti', async t => {
   const teksti = Selector("#teksti");

   await t
     .expect(teksti.textContent).match(/sade\s*1\s*--\s*ala\s*3.14/,'')
     .expect(teksti.textContent).match(/sade\s*4.5\s*--\s*ala\s*63.585/,'')
     .expect(teksti.textContent).match(/sade\s*0\s*--\s*ala\s*0/,'');
});
