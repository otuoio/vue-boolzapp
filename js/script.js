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



const app = new Vue (
    {
        el: '#app',
        data: {
            counter: 0,
            searchChat: '',
            newMsg: '',
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
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
    
                let dateTime = new Date();

    
                let obj = {
                    date: dateTime.toString().substr(5, 18),
                    text: this.newMsg,
                    status: "sent",
                    showInfo: false
                };

                const obj2 = {
                    date: dateTime.toString().substr(5, 18),
                    text: 'ok bella',
                    status: "received",
                    showInfo: false
                };
    
                array.push(obj);

                setTimeout(() => {
                    array.push(obj2);
                }, 1000);

                this.newMsg = '';
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
            deleteMsg: function(array, index) {
                
                array.splice(index, 1);
            },
            textLive: function(contact) {

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