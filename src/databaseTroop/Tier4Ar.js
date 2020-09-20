import VanMinh from './../database/VanMinh';

export default [
    {
        name : 'Crossbowman',
        image : require('./../../assets/images/Troop/CungThu/Troop_Crossbowman.png'),
        atk : 192,
        def : 192,
        health : 187,
        VanMinh : VanMinh.Other
    },
    {
        name : 'Longbowman',
        image : require('./../../assets/images/Troop/CungThu/Troop_Longbowman.png'),
        atk : 202,
        def : 192,
        health : 187,
        VanMinh : VanMinh.Britain
    },
    {
        name : 'Chu-Ko-Nu',
        image : require('./../../assets/images/Troop/CungThu/Troop_Chu-Ko-Nu.png'),
        atk : 197,
        def : 197,
        health : 187,
        VanMinh : VanMinh.China
    },
    {
        name : 'Hwarang',
        image : require('./../../assets/images/Troop/CungThu/Troop_Hwarang.png'),
        atk : 192,
        def : 202,
        health : 187,
        VanMinh : VanMinh.Korea
    },
    {
        name : 'Janissary',
        image : require('./../../assets/images/Troop/CungThu/Troop_Janissary.png'),
        atk : 197,
        def : 192,
        health : 192,
        VanMinh : VanMinh.Ottoman
    },
   
]