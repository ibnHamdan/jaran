const bands = ['the plot', 'the Devil', 'Pierce', 'Norma Jean',
'The Bleed', 'Say anything', 'The midway', 'we came',
'counterpatrs', 'oh, sleeper', 'A skitt', 'AnyWhere', 'An Old animal'];

function strip(bandName) {
    return bandName.replace(/^(a |The |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1 );

document.querySelector('#bands').innerHTML = 
sortedBands.map(band => `<li>${band}</li>`).join('');