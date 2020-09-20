import VanMinh from './../database/VanMinh';

export default [
    {
        name : 'Royal Guard',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Royal_Guard.png'),
        atk : 220,
        def : 212,
        health : 216,
        VanMinh : VanMinh.Other
    },
    {
        name : 'Elite Throwing Axeman',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Elite_Throwing_Axeman.png'),
        atk : 221,
        def : 212,
        health : 227,
        VanMinh : VanMinh.France
    },
    {
        name : 'Elite Legionary',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Elite_Legionary.png'),
        atk : 221,
        def : 222,
        health : 216,
        VanMinh : VanMinh.Rome
    },
    {
        name : 'Elite Samurai',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Elite_Samurai.png'),
        atk : 232,
        def : 212,
        health : 216,
        VanMinh : VanMinh.Japan
    }
]