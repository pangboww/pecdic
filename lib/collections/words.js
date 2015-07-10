Words = new Mongo.Collection('words');

Words.allow({
    insert: function(){ return true},
    update: function(){ return true},
    remove: function(){ return true}
});

validateWord = function(word) {
    var errors = {};

    if(!word.portuguese)
        errors.portuguese = "Please fill in the Portuguese word";

    if(!word.english)
        errors.english = "Please fill in the English word";

    if(!word.chinese)
        errors.chinese = "Please fill in the Chinese word";

    if(!word.hanzi)
        errors.hanzi = "Please fill in the Han zi";
    return errors;
};

Meteor.methods({
    wordInsert: function(word) {
        check(this.userId, String);
        check(word, {
            portuguese: String,
            english: String,
            chinese: String,
            hanzi: String
        });

        var errors = validateWord(word);

        if (errors.portuguese || errors.english || errors.chinese || errors.hanzi)
            throw new Meteor.Error('invalid-word', "You must set the Portuguese, English and Chinese to this word");

        var user = Meteor.user();
        var wordToInsert = _.extend(word, {
            userID: user._id,
            author: user.username,
            created: new Date()
        });

        var wordId = Words.insert(wordToInsert);

        return {
            _id: wordId
        }
    }
});