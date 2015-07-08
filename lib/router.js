Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

WordsListController = RouteController.extend({
    template: 'wordsList',
    sort: {_id: -1},
    findOptions: function() {
        return {sort: this.sort};
    },
    words: function(){
        return Words.find({}, this.findOptions());
    },
    subscriptions: function() {
        this.wordsSub = Meteor.subscribe('words', this.findOptions());
    },
    data: function(){
        var self = this;
        return {
            words: self.words()
        };
    }
});

Router.route('/', {
    name: 'home',
    controller: WordsListController
});

Router.route('/add', {name: 'addWord'});