import VanMinh from './../database/VanMinh';

export default [
    {
        name : 'Long Swordsman',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Long_Swordsman.png'),
        atk : 192,
        def : 192,
        health : 187,
        VanMinh : VanMinh.Other
    },
    {
        name : 'Throwing Axeman',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Throwing_Axeman.png'),
        atk : 192,
        def : 192,
        health : 197,
        VanMinh : VanMinh.France
    },
    {
        name : 'Legionary',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Legionary.png'),
        atk : 192,
        def : 202,
        health : 187,
        VanMinh : VanMinh.Rome
    },
    {
        name : 'Samurai',
        image : require('./../../assets/images/Troop/BoBinh/Troop_Samurai.png'),
        atk : 202,
        def : 192,
        health : 187,
        VanMinh : VanMinh.Japan
    }
]