const bcrypt = require('bcryptjs');
const mypwds = require('./passwords.json');

const hashPwd = bcrypt.hashSync("titok");

console.log(hashPwd);

const keresBody = {
    email : "titok@gmail.com",
    jelszo : "totik"
}

//ORM esetén egyszerű findOne kell
for( let i=0; i< mypwds.length; i++){
    if( mypwds[i].email === keresBody.email &&
        bcrypt.compareSync(keresBody.jelszo, mypwds[i].pwd)){
            console.log(`Szia ${mypwds[i].id} azonosítójú felhasználó!`);
        } else{
            console.log("Te nem ezt a felhasználót keresed!");
        }
}