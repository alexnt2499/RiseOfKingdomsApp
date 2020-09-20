import VanMinh from './../database/VanMinh';

export default [
    {
        name : 'Royal Crossbowman',
        image : require('./../../assets/images/Troop/CungThu/Troop_Royal_Crossbowman.png'),
        atk : 220,
        def : 216,
        health : 212,
        VanMinh : VanMinh.Other
    },
    {
        name : 'Elite Longbowman',
        image : require('./../../assets/images/Troop/CungThu/Troop_Elite_Longbowman.png'),
        atk : 232,
        def : 216,
        health : 211,
        VanMinh : VanMinh.Britain
    },
    {
        name : 'Elite Chu-Ko-Nu',
        image : require('./../../assets/images/Troop/CungThu/Troop_Elite_Chu-Ko-Nu.png'),
        atk : 227,
        def : 222,
        health : 212,
        VanMinh : VanMinh.China
    },
    {
        name : 'Elite Hwarang',
        image : require('./../../assets/images/Troop/CungThu/Troop_Elite_Hwarang.png'),
        atk : 212,
        def : 227,
        health : 212,
        VanMinh : VanMinh.Korea
    },
    {
        name : 'Elite Janissary',
        image : require('./../../assets/images/Troop/CungThu/Troop_Elite_Janissary.png'),
        atk : 227,
        def : 216,
        health : 216,
        VanMinh : VanMinh.Ottoman
    },
   
]