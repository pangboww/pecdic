Template.editWord.onCreated(function() {
    Session.set('editWordErrors', {});
});

Template.editWord.helpers({
    errorMessage: function(field) {
        return Session.get('editWordErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('editWordErrors')[field] ? 'has-error' : '';
    }
});

Template.editWord.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentWordId = this._id;

        var word = {
            portuguese: $(e.target).find('[name=portuguese]').val(),
            english: $(e.target).find('[name=english]').val(),
            chinese: $(e.target).find('[name=chinese]').val()
        };

        var errors = validateWord(word);
        if (errors.portuguese || errors.english || errors.chinese)
            return Session.set('editWordErrors', errors);


        Words.update(currentWordId, {$set: word}, function(error) {
            if (error) {
                throwError(error.reason);
            } else {
                Router.go('home');
            }
        });
    },

    'click .delete': function(e) {
        e.preventDefault();

        bootbox.confirm("<h4>Delete this word?</h4>", function(result) {
            if (result) {
                var currentPostId = this._id;
                Words.remove(currentPostId);
                Router.go('home');
            }
        });
    }
});
