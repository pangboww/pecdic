Template.addWord.onCreated(function() {
    Session.set('addWordErrors', {});
});

Template.addWord.helpers({
    errorMessage: function(field) {
        return Session.get('addWordErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('addWordErrors')[field] ? 'has-error' : '';
    }
});
Template.addWord.events({
    'submit form': function(e){
        e.preventDefault();

        var word = {
            portuguese: $(e.target).find('[name=portuguese]').val(),
            english: $(e.target).find('[name=english]').val(),
            chinese: $(e.target).find('[name=chinese]').val()
        };

        var errors = validateWord(word);
        if (errors.portuguese || errors.english || errors.chinese)
            return Session.set('addWordErrors', errors);

        Meteor.call('wordInsert', word, function(error, result) {
            if (error)
                return throwError(error.reason);

            Router.go('home');
        });

    }
});

