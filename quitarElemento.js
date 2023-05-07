let iceCreamFlavor = ['chocalate', 'varus', 'mint chip', 'neapolitan']

iceCreamFlavor.splice(2,1);
//quita algo con length-1
iceCreamFlavor[iceCreamFlavor.length-1] = 'your choice'
iceCreamFlavor.length
// agrega algo con push
iceCreamFlavor.push('mint chip');
console.log(iceCreamFlavor)