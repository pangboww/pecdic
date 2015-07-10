Template.wordItem.events({
    'click .portuguese': function(e){
        e.preventDefault();
        tts.speak(this.portuguese,'pt','com.br');
    },
    'click .english': function(e){
        e.preventDefault();
        tts.speak(this.english, 'en')
    },
    'click .chinese': function(e){
        e.preventDefault();
        tts.speak(this.hanzi, 'zh')
    },
    'click .hanzi': function(e){
        e.preventDefault();
        tts.speak(this.hanzi, 'zh')
    }
});
