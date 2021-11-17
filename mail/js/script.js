// trova se l'email dell' utente è nella lista email autorizzate
const email=['abc1@gmail.com','abc2@gmail.com','abc3@gmail.com','abc4@gmail.com','abc5@gmail.com','abc6@gmail.com','abc7@gmail.com','abc8@gmail.com','abc9@gmail.com','abcd@gmail.com',];
const userEmail=prompt('immetti il tuo indirizzo email: ');
let flag=false;

for (let i=0; i<email.length; i++) {
    const thisEmail=email[i];
    if (userEmail===thisEmail) {
        flag=true
    }
}
if (flag) {
    alert('l\'indirizzo email è autorizzato ad accedere')
}
else {
    alert('l\'indirizzo email NON è autorizzato ad accedere')
}