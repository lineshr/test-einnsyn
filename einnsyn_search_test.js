
Feature('Einnsyn search');

Scenario('test something', async (I) => {
    I.amOnPage('https://einnsyn.no/');
    let initial = await I.grabTextFrom('.search-count');
    I.say('initial');
    I.say(initial);
    I.wait(10);
    let numOriginal = await I.grabTextFrom('.search-count');
    I.say('step0');
    I.say(numOriginal);
    var assertNotEqual = require('assert');
    assertNotEqual(initial,numOriginal);

    I.checkOption('#Journalpost');
    I.wait(5);
    let numDokument = await I.grabTextFrom('.search-count');
    I.say('dokument');
    I.say(numDokument);
    assertNotEqual(numOriginal,numDokument);

    I.checkOption('#Saksmappe');
    I.wait(5);
    let numSaksmappe = await I.grabTextFrom('.search-count');
    I.say('Saksmappe');
    I.say(numSaksmappe);
    assertNotEqual(numOriginal,numSaksmappe);
    assertNotEqual(numDokument,numSaksmappe);

    I.checkOption('#Moeteregistrering');
    I.wait(5);
    let numMoeteregistrering = await I.grabTextFrom('.search-count');
    I.say('Moeteregistrering');
    I.say(numMoeteregistrering);
    assertNotEqual(numOriginal,numMoeteregistrering);
    assertNotEqual(numSaksmappe,numMoeteregistrering);

    I.checkOption('#Moetemappe');
    I.wait(5);
    let numMoetemappe = await I.grabTextFrom('.search-count');
    I.say('Moetemappe');
    I.say(numMoetemappe);
    assertNotEqual(numOriginal,numMoetemappe);
    assertNotEqual(numSaksmappe,numMoetemappe);
    assertNotEqual(numMoeteregistrering,numMoetemappe);

    var assertEqual = require('assert');
    assertEqual(numOriginal,numMoetemappe);



    I.fillField('form > input', 'luster');
    I.pressKey("Enter");
    I.wait(5);
    let numLusterSøk = await I.grabTextFrom('.search-count');
    I.say('numLusterSøk');
    I.say(numLusterSøk);
    assertNotEqual(numOriginal,numMoetemappe);
    assertNotEqual(numSaksmappe,numMoetemappe);
    assertNotEqual(numMoeteregistrering,numMoetemappe);
    assertNotEqual(numMoetemappe,numLusterSøk);


});
