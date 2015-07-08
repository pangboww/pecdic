Meteor.startup(function(){
    if (Words.find().count() === 0){
        var now = new Date().getTime();

        var Id = Meteor.users.insert({
            profile: { name: 'Default'}
        });
        var defaultUser = Meteor.users.findOne(Id)

        Words.insert({
            portuguese: 'Eu posso comer comida',
            english: 'I can eat food',
            chinese: 'wo ke yi chi fan',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Eu quero ir para casa de Lucas',
            english: "I want to go to Lucas's home",
            chinese: 'wo xiang qu Lucas jia',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Eu vou tomar o suco',
            english: 'I will take the juice',
            chinese: 'wo yao he guo zhi',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Eu posso usar o banheiro?',
            english: 'I can use the bathroom?',
            chinese: 'wo ke yi yong xi shou jian me?',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        });



    }

});