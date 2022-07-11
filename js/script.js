const app = new Vue ({
    el : '#app',
    data: {
        indexActive: 0,
        newMessage: '',
        itemSearch: '',
        messageSearch: '',
        isVisible: false,
        menuActive: null,
        menuDeleteChat: false,
        searchIsShow: false,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        visible: true,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        visible: true,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        visible: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        visible: true,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        visble: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        visble: true,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        visble: true,
                    }
                ],
            }
        ]
    },
    methods: {
        getPathImg: function(index) {
            return './img/avatar' + this.contacts[index].avatar + '.jpg';
            
        },

        getCurrentAvatar: function(currentIndex) {
            console.log(currentIndex)
            this.indexActive = currentIndex;
        },

        sendReply: function(){
            const today = new Date();

            this.contacts[this.indexActive].messages.push({
                date: `${this.addZero(today.getDay())}/${this.addZero(today.getMonth())}/${today.getFullYear()} ${this.addZero(today.getHours())}:${this.addZero(today.getMinutes())}:${today.getSeconds()}`,
                message: 'ok',
                status: 'received',
                visble: true,
            })

        },

        newMessageToAdd: function() {

            const today = new Date();
           
            if (this.newMessage !== '') {
                this.contacts[this.indexActive].messages.push({
                    date: `${this.addZero(today.getDay())}/${this.addZero(today.getMonth())}/${today.getFullYear()} ${this.addZero(today.getHours())}:${this.addZero(today.getMinutes())}:${today.getSeconds()}`,
                    message: this.newMessage,
                    status: 'sent',
                    visble: true,
                })

                this.newMessage = ''

                setTimeout(() => {

                    this.sendReply()

                }, 1000);                

            }

           
        },

        searchUser: function() {

            for (let index = 0; index < this.contacts.length; index++) {
                
                let nameContacts = this.contacts[index].name.toLowerCase();
                let nameSearchUser = this.itemSearch.toLowerCase();

                if (nameContacts.includes(nameSearchUser)) {
                    this.contacts[index].visible = true;
                } else {
                    this.contacts[index].visible = false;
                }
                
            }
        },
        deleteMessage: function(currentIndex) {
            console.log(currentIndex)
            this.contacts[this.indexActive].messages.splice(currentIndex, 1);
            this.isVisible = false
        },
        menuShow: function(currentIndex){
                this.menuActive = currentIndex;
                this.isVisible = !this.isVisible
        },

        addZero: function(i) {
            if (i < 10) {i = "0" + i}
            return i;
        },

        menuDeleteChatShow: function(){
          this.menuDeleteChat = !this.menuDeleteChat
        },

        deleteChat: function(){
            this.contacts.splice(this.indexActive, 1)
            this.menuDeleteChat = false
        },

        searchToggleShow: function(){
          this.messageSearch = ''
          this.searchIsShow = !this.searchIsShow
        },

        searchUserMessage: function() {

            for (let index = 0; index < this.contacts[this.indexActive].messages.length; index++) {

                let messageUser = this.contacts[this.indexActive].messages[index].message.toLowerCase();
                let mesageSearchUser = this.messageSearch.toLowerCase();

                console.log(this.contacts[this.indexActive].messages[index].visible);
                if (messageUser.includes(mesageSearchUser)) {
                    this.contacts[this.indexActive].messages[index].visible = true;
                } else {
                    this.contacts[this.indexActive].messages[index].visible = false;
                }
            }
        }


    },

})


let now = moment("12-25-1995", "MM-DD-YYYY")

console.log(now)