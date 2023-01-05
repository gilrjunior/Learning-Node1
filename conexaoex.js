const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'admgil', {

    host: "localhost",
    dialect: 'mysql'

});

/*sequelize.authenticate().then(function () {

    console.log("Conectado ao banco!");

}).catch(function (erro) {

    console.log("Erro ao se conectar: " + erro);

});*/

const Postagens = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

});

/*Postagens.create({

    titulo: "PRIMEIRA POSTAGEM",
    conteudo: "asdklfhdklasfhklhdfsklfhksdlhfskldhfklhfklhdsfklhsdklfhsdklfhklsdhfkldshfklhdsklfhdkldfhsklhfklsdhfklhsdklfhsdklhfsdklf"

})*/

const Usuarios = sequelize.define('usuarios', {

    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})

//Usuarios.sync();

/*Usuarios.create({

    nome: "Gilmar",
    sobrenome: "Júnior",
    idade: 20,
    email: "gilmarjunioreis@gmail.com"

})*/

