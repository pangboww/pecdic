Meteor.startup(function(){
    if (Words.find().count() === 0){
        var now = new Data().getTime();

        var Id = Meteor.users.insert({
            profile: { name: 'Default'}
        })
        var defaultUser = Meteor.users.findOne(Id)

        Words.insert({
            portuguese: '',
            english: '',
            chinese: '',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        })

        Words.insert({
            portuguese: '',
            english: '',
            chinese: '',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        })

        Words.insert({
            portuguese: '',
            english: '',
            chinese: '',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        })

        Words.insert({
            portuguese: '',
            english: '',
            chinese: '',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        })

        Words.insert({
            portuguese: '',
            english: '',
            chinese: '',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        })

        Words.insert({
            portuguese: '',
            english: '',
            chinese: '',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        })

    }

});