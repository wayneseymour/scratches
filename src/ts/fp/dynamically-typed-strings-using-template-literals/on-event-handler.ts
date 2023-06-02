type ClickOrKeydown = 'Click' | 'Keydown'
const handler = (eventType: `on${ClickOrKeydown}`) => {
  console.log(`\n### handling eventType: \n  ${eventType}`);
}
handler('onClick');
handler('onKeydown');
handler('onWhateverzDude');
handler('whattheheck')
