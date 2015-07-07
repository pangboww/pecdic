Meteor.publish('words', function(options){
    return Words.find({}, options);
})