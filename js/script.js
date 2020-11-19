// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// - un input permette all’utente di scrivere una “cosa da fare”;
// - un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// - una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

var app = new Vue ({

  el: '#app',
  data: {
    oggetto: '',
    oggetti: [],
    alertAttIns: 'invisibile',
    alertNoAtt: 'invisibile',
    listaAtt: 'invisibile',
  },
  methods: {
    aggiungiTodo: function () {
      if (this.oggetto === '') {
        this.alertNoAtt = 'visibile';

      } else if (this.oggetti.includes(this.oggetto)) {
        this.alertAttIns = 'visibile';

      } else {
        this.listaAtt = 'visibile';
        this.oggetti.push(this.oggetto);
        this.oggetto = '';
      }
    },
    eliminaTodo: function (index) {
      this.oggetti.splice(index, 1)
      if (this.oggetti == '') {
        this.listaAtt = 'invisibile';
      }
    },
    clickSpuntaOk: function () {
      this.oggetti.push(this.oggetto);
      this.oggetto = '';
      this.alertAttIns = 'invisibile';
    },
    clickSpuntaNo: function () {
      this.alertAttIns = 'invisibile';
      this.alertNoAtt = 'invisibile';
      this.oggetto = '';
    }
  }
});
