const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 



new Vue({
  el: '#flashcard-app',
    data: {
      cards: cards,
      newCard: {
        front: '',
        back: '',
        flipped: false
      },
      error: false
  },
  created() {
    // Vue.$toast.open({
    //   message: 'Oops! Flashcards need a front and a back.',
    //   type: 'error',
    //   position: 'top'
    // });

    },
    methods: {
      toogleCard(card) {
        // console.log('card', card)
        card.flipped = !card.flipped
      },
      addingCard() {
        if (this.newCard.front === '' || this.newCard.back === '') {
          //  return this.error = true
          return Vue.$toast.open({
            message: 'Oops! Flashcards need a front and a back.',
            type: 'error',
            position: 'top'
          });
        }
        this.cards.push({
          front: this.newCard.front,
          back: this.newCard.back,
          flipped: false
        })
        this.newCard.front = ""
        this.newCard.back = ""
        this.error = false
      },
      deleteCard(index) {
        console.log('Delete', index)
/* 
this.cards.splice(card)
knowing the index of the object we passed... this.cards.indexOf(card)
*/
      // if (this.cards.indexOf(card)) {
/*
splice takes the index of the element we're gonna delete, and as second parameter we pass the number of elements we're gonna delete
*/
        // this.cards.splice(this.cards.indexOf(card), 1)
        
        this.cards.splice(index, 1)
        Vue.$toast.success( 'Card deleted', {
          position: 'bottom'
        });
      // }
      }
    }
  });