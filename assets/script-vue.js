/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/


const app =  Vue.createApp({
    mounted() {
        // this.StartSlide();
    },
    data() {
        return {
            timer: null,
            // stoptime: clearTimeout(showNextSlide, 1000),
            varBooleana: true,
            activeIndex: 0,
            arrImages: [
                
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp',

            ],
        };
    },
    methods: {
        
        // 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
        imgClick(i){
			this.activeIndex = i;
		},

        // interval btn

        StopSlide() {
            clearInterval(this.timer);
              
        },
		StartSlide() {
            this.timer = setInterval(this.showNextSlide, 1000);
          
		},
   


        showPrevSlide(){
            this.activeIndex--;
            if (this.activeIndex < 0) {
                this.activeIndex = this.arrImages.length - 1;
            }
        },
        showNextSlide() {
			// settiamo il nuovo valore di active index
			this.activeIndex++;
			if (this.activeIndex >= this.arrImages.length) {
				this.activeIndex = 0;
			}
		},
    },


});
app.mount('.container');