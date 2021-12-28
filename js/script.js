// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e dall’interlocutore(bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v -for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti

// BONUS 1 - evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

//BONUS 2 - A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano

//BONUS 3 - predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc

//BONUS 4 - visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto

//BONUS 5 - inserire l'orario corretto nei messaggi

//BONUS 6 - sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto

const app = new Vue (
    {
        el: '#app',
        data: {
            counter: 0,
            searchChat: '',
            newMsg: '',
            accessText: '',
            //predisporre una lista di frasi e/o citazioni
            pcAnswers: [
                'vai a mangiare il sapone',
                'non ci pensare',
                'cosa?',
                'chiamami quando puoi',
                'non ti va mai bene niente',
                'salutameli'
            ],
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                            showInfo: false
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                            showInfo: false
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                            showInfo: false
                        },
                    ],
                },

                {
                    name: "Samuele",
                    avatar: "_3",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                            showInfo: false
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                            showInfo: false
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            showInfo: false
                        },
                    ],
                },
                {
                    name: "Andonio",
                    avatar: "_5",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            showInfo: false
                        },
                    ],
                },
                {
                    name: "Peppe",
                    avatar: "_6",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            showInfo: false
                        },
                    ],
                },
                {
                    name: "Falafel",
                    avatar: "_7",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei un falafel",
                            status: "received",
                            showInfo: false
                        },
                    ],
                },
                {
                    name: "She",
                    avatar: "_8",
                    visible: true,
                    accessVisible: true,
                    writingOnline: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            showInfo: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            showInfo: false
                        },
                    ],
                }
            ]
        },
        methods: {
            add: function(index) {
                this.counter = index;
            },
            newMessage: function (array) {// Milestone 3
    
                if (this.newMsg.trim().length > 0) {// BONUS 1 - evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

                    let dateTime = new Date();

                    let obj = {
                        date: dateTime.toString().substr(5, 18),
                        text: this.newMsg,
                        status: "sent",
                        showInfo: false
                    };
                    
                    //scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc

                    // creare funzione che seleziona un indice random
                    
                    function getRandomIntInclusive(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min + 1) + min);
                    }

                    // creare variabile che contiene l'elemento random selezionato
                    const answer = this.pcAnswers[getRandomIntInclusive(0, this.pcAnswers.length - 1)];

                    const obj2 = {
                        date: dateTime.toString().substr(5, 18),
                        text: answer,
                        status: "received",
                        showInfo: false
                    };
        
                    array.push(obj);
    
                    setTimeout(() => {
                        array.push(obj2);
                    }, 4000);
    
                    this.newMsg = '';
                }
                
            },
            access: function (contact) { //BONUS 6 - sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
                
                setTimeout(() => {
                    
                    contact.accessVisible = false;
    
                    contact.writingOnline = true;

                    this.accessText = 'sta scrivendo...';

                    setTimeout(() => {
                        
                        this.accessText = 'online';

                        setTimeout(() => {
                            contact.accessVisible = true;

                            contact.writingOnline = false;
                        }, 2000);

                    }, 3000);

                }, 1000);

            },
            search: function () { // Milestone 4

                // imposto visible true di default
                this.contacts.forEach((contact, index) => {
                    contact.visible = true;
                });

                // creazione array con soli nomi
                let namesArray = this.contacts.map((contact) => {

                    return contact.name;

                });
                
                // creazione array dei nomi filtrati tramite la barra di ricerca
                let filteredNames = [];

                namesArray.forEach((element, index) => {
                    if (element.toLowerCase().includes(this.searchChat.toLowerCase())) {
                        filteredNames.push(element);
                    }
                });

                // cambio variabile visible ai contact che non sono presenti nell'array filtrato
                this.contacts.forEach((contact, index) => {
                    if (!filteredNames.includes(contact.name)) {
                        contact.visible = false;
                    };
                });
            },
            deleteMsg: function (array, index) { // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
                
                array.splice(index, 1);
            },
            textLive: function (contact) {// Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti

                let textMsg = '';

                if (contact.messages.length > 0) {
                    textMsg = contact.messages[contact.messages.length - 1].text;
                }
                
                return textMsg;
            },
            timeLive: function (contact) {

                let timeMsg = '';

                if (contact.messages.length > 0) {
                    timeMsg = contact.messages[contact.messages.length - 1].date;
                }
                
                return timeMsg;
            }
        },
        created() {
            
            
        }
    }
);