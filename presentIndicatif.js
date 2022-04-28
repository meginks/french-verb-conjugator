const irregularVerbsPresentIndicatifER = [

];

// Subject Pronouns = 
const je = 'je' || 'Je';  
const tu = 'tu' || 'Tu';  
const il = 'il' || 'Il';  
const elle = 'elle' || 'Elle';  
const on = 'on' || 'On'; 
const nous = 'nous' || 'Nous';
const vous = 'vous' || 'Vous'; 
const ils = 'ils' || 'Ils'; 
const elles = 'elles' || 'Elles'; 


function regularErPresent(erVerb, subjPronoun) {
    // check if -er verb
        if (erVerb.slice(-2) !== 'er') {
            return "Not an -er verb"
        } else if (irregularVerbsPresentIndicatifER.includes(erVerb)) {
            return "Irregular!"
        }

    switch (subjPronoun) {
        case je:  
            return erVerb.substring(0, (erVerb.length-1)); 
        case tu:
            return erVerb.substring(0, (erVerb.length-1))+'s';
        case il:  
            return erVerb.substring(0, (erVerb.length-1));
        case elle:  
            return erVerb.substring(0, (erVerb.length-1));
        case on:  
            return erVerb.substring(0, (erVerb.length-1));
        case nous: 
            return erVerb.substring(0, (erVerb.length-2)) + 'ons';
        case vous: 
            return erVerb.substring(0, (erVerb.length-1))+'z';
        case ils:
        case elles: 
            return erVerb.substring(0, (erVerb.length-2)) + 'ent';
        default: 
            console.log('Hmm');
    }
} 

module.exports = {
    regularErPresent 
}