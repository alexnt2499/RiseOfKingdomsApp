import VanMinh from './../database/VanMinh';

export default [
    {
        name : 'Knight',
        image : require('./../../assets/images/Troop/KiBinh/Troop_Knight.png'),
        atk : 187,
        def : 192,
        health : 192,
        VanMinh : VanMinh.Other
    },
    {
        name : 'Teutonic Knight',
        image : require('./../../assets/images/Troop/KiBinh/Troop_Teutonic_Knight.png'),
        atk : 187,
        def : 197,
        health : 197,
        VanMinh : VanMinh.Germany
    },
    {
        name : 'Conquistador',
        image : require('./../../assets/images/Troop/KiBinh/Troop_Conquistador.png'),
        atk : 197,
        def : 192,
        health : 192,
        VanMinh : VanMinh.Span
    },
    {
        name : 'Mamluk',
        image : require('./../../assets/images/Troop/KiBinh/Troop_Mamluk.png'),
        atk : 192,
        def : 192,
        health : 197,
        VanMinh : VanMinh.Span
    },
    {
        name : 'Cataphract',
        image : require('./../../assets/images/Troop/KiBinh/Troop_Cataphract.png'),
        atk : 187,
        def : 202,
        health : 192,
        VanMinh : VanMinh.Bi
    },

   
]