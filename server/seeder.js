Meteor.startup(function(){
    if (Words.find().count() === 0){
        var now = new Date().getTime();

        var Id = Meteor.users.insert({
            profile: { name: 'Default'}
        });
        var defaultUser = Meteor.users.findOne(Id);

        Words.insert({
            portuguese: 'Ontem eu aprendi português. Não é muito difícil. Agora eu posso falar algumas palavras. Depois vou tentar conversar com algumas garotas.',
            english: "Yesterday I have learnt portuguese. It's not very hard. Now I can speak some words. After I will try to talk with some girls.",
            chinese: 'zuo tian wo xue xi le pu tao ya yu. bu shi te bie nan. xian zai wo ke yi shuo yi xie ci hui. deng yi xia wo yao he ji ge nv sheng liao tian.',
            hanzi: '昨天我学习了葡萄牙语。不是特别难。现在我可以说一些词汇。等一下我要和几个女生聊天。',
            author: defaultUser.profile.name,
            created: new Date()
        });

        Words.insert({
            portuguese: 'Eu posso comer comida',
            english: 'I can eat food',
            chinese: 'wo ke yi chi fan',
            hanzi: '我可以吃饭',
            author: defaultUser.profile.name,
            created: new Date(now - 7 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Eu quero ir para casa de Lucas',
            english: "I want to go to Lucas's home",
            chinese: 'wo xiang qu Lucas jia',
            hanzi: '我想去Lucas家',
            author: defaultUser.profile.name,
            created: new Date(now - 6 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Eu vou tomar o suco',
            english: 'I will take the juice',
            chinese: 'wo yao he guo zhi',
            hanzi: '我要喝果汁',
            author: defaultUser.profile.name,
            created: new Date(now - 5 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Eu posso usar o banheiro?',
            english: 'I can use the bathroom?',
            chinese: 'wo ke yi yong xi shou jian me?',
            hanzi: '我可以用洗手间么？',
            author: defaultUser.profile.name,
            created: new Date(now - 4 * 3600 * 1000)
        });

        Words.insert({
            portuguese: 'Parabéns Franzé',
            english: 'Happy Birthday Franzé',
            chinese: 'shēng rì kuài lè Franzé',
            hanzi: '生日快乐Franzé',
            author: defaultUser.profile.name,
            created: new Date(now - 3 * 3600 * 1000)
        });
    }

});