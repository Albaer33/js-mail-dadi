// Math.floor(Math.random() * 10) + 1;
// generare 2 numeri random da 1 a 6 1 per il pc uno per l'utente
const myNumber=Math.floor(Math.random() * 6) + 1;
const pcNumber=Math.floor(Math.random() * 6) + 1;

alert('il tuo numero è:' + myNumber);
alert('il numero del pc è:' + pcNumber);
// confrontarli, il maggiore vince, stampare il vincitore
if (myNumber > pcNumber) {
    alert('ha vinto l\'utente');
}
else if(myNumber < pcNumber) {
    alert('haha ha vinto il PC');
}
else {
    alert('parità');
}