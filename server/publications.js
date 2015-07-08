Meteor.publish('words', function(options){
    return Words.find({}, options);
});

Meteor.publish('singleWord', function(id) {
    check(id, String);
    return Words.find(id);
});

