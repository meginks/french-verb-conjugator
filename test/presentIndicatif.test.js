const { regularErPresent } = require('../presentIndicatif.js'); 

describe('present indicatif', () => {

    test('regular ER verbs in Present Indicative', () => {
        expect(regularErPresent('demander', 'elle')).toBe('demande'); 
        expect(regularErPresent('demander', 'elles')).toBe('demandent');
    })

})