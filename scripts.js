// Configuração do Firebase (substitua com suas próprias configurações)
var firebaseConfig = {
    apiKey: "AIzaSyBrRuiOk8rjxO6jH91v--LPuwwyIrZPiH8",
    authDomain: "bdreporttec.firebaseapp.com",
    databaseURL: "https://bdreporttec-default-rtdb.firebaseio.com",
    projectId: "bdreporttec",
    storageBucket: "bdreporttec.appspot.com",
    messagingSenderId: "153475202057",
    appId: "1:153475202057:web:2fa40b7f784e765b940cd8",
    measurementId: "G-LX51TDQBJM"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

// Referência do Firestore
var db = firebase.firestore();

// Função para enviar dados do formulário
document.getElementById('bullyingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar os valores dos campos
    var victimName = document.getElementById('victimName').value;
    var bullyingType = document.getElementById('bullyingType').value;
    var description = document.getElementById('description').value;
    var status = "Pendente"

    // Adicionar documento ao Firestore com o status inicial "Pendente"
    db.collection("reports").add({
        victimName: victimName,
        bullyingType: bullyingType,  // Salva a modalidade de bullying
        description: description,
        status: status,  // Define o status inicial como "Pendente"
        timestamp: new Date()
    }).then(function() {
        alert('Reporte enviado com sucesso!');
        document.getElementById('bullyingForm').reset();
    }).catch(function(error) {
        alert('Erro ao enviar reporte: ' + error.message);
    });
});
