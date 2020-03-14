export default {
    VuKhi: [
        {
            id : 1,
            name : 'Sharp Longsword',
            image : require('./../../assets/images/Equipment/Attack/sharp-longsword.png'),
            update : 'Cavalry Defense  (kỵ binh) +5%\nGathering Speed (thu gom) +2%',
            phongThuKyBinh : 5,
            tocDoThuGom : 2
        },
        {
            id : 2,
            name : 'Vanguard Halberd',
            image : require('./../../assets/images/Equipment/Attack/vanguard-halberd.png'),
            update : 'Cavalry Defense  (kỵ binh) +5%\nCavalry Health (kỵ binh) +4%',
            phongThuKyBinh : 5,
            sucManhKyBinh : 4
        },
        {
            id : 3,
            name : 'Staff of the Lost',
            image : require('./../../assets/images/Equipment/Attack/staff-of-the-lost.png'),
            update : 'Cavalry Defense  (kỵ binh) +3%\nInfantry Defense (bộ binh) +5%\nArcher Defense (cung thủ) +5%',
            phongThuKyBinh : 3,
            phongThuBoBinh : 5,
            phongThuCungThu : 5
        },
        {
            id : 4,
            name : 'Heart of the Saint',
            image : require('./../../assets/images/Equipment/Attack/heart-of-the-saint.png'),
            update : 'Cavalry Defense  (kỵ binh) +8%\nInfantry Health (bộ binh) +4%\nArcher Health (cung thủ) +6%',
            phongThuKyBinh : 8,
            sucManhBoBinh: 4,
            sucManhCungThu : 6
        }, 
        {
            id : 5,
            name : 'Golden Age',
            image : require('./../../assets/images/Equipment/Attack/golden-age.png'),
            update : 'Cavalry Attack (kỵ binh) +4%\nInfantry Defense (bộ binh) +6%\nArcher Defense (cung thủ) +8%',
            tanCongKyBinh : 4,
            phongThuBoBinh : 6,
            phongThuCungThu : 8
        },
        {
            id : 6,
            name : 'Trial of the Lost Kingdom',
            image : require('./../../assets/images/Equipment/Attack/trial-of-the-lost-kindgom.png'),
            update : 'Cavalry Defense  (kỵ binh) +8%\nInfantry Health (bộ binh) +5%\nArcher  Attack (cung thủ) +5%',
            phongThuKyBinh : 8,
            sucManhBoBinh : 6,
            tanCongCungThu : 5     
        }
        
        
    ],
    Mu : [
        {
            id : 1,
            name : 'Iron Helm',
            image : require('./../../assets/images/Equipment/Mu/iron-helm.png'),
            update : 'Infantry Attack (bộ binh) +3%',
            tanCongBoBinh : 3
        },
        {
            id : 2,
            name : 'Helm of Phoenix	',
            image : require('./../../assets/images/Equipment/Mu/helm-of-the-phoenix.png'),
            update : 'Damage to Barbarians (man rợ) +3%\nInfantry Health (bộ binh) +2%\nArcher Defense (cung thủ) +2%',
            satThuongManRo : 3,
            sucManhBoBinh : 2,
            phongThuCungThu :2
        },
        {
            id : 3,
            name : 'Abyssal Visage',
            image : require('./../../assets/images/Equipment/Mu/abyssal-visage.png'),
            update : 'Cavalry Attack (kỵ binh) +4%\nInfantry Attack (bộ binh) +3%\nArcher  Attack (cung thủ) +3%',
            tanCongKyBinh : 4,
            tanCongBoBinh : 3,
            tanCongCungThu : 3
        }
    ],
    Giap : [
        {
            id : 1,
            name : 'Chain Mail',
            image : require('./../../assets/images/Equipment/Giap/chain-mail.png'),
            update : 'Archer  Attack (cung thủ) +3%',
            tanCongCungThu : 3
        },
        {
            id : 2,
            name : 'Milanese Plate',
            image : require('./../../assets/images/Equipment/Giap/milanese-plate.png'),
            update : 'Archer  Attack (cung thủ) +2%\nCavalry Defense  (kỵ binh) +3%',
            tanCongCungThu : 2,
            phongThuKyBinh : 3
        },
        {
            id : 3,
            name : 'Infantry Breeastplate',
            image : require('./../../assets/images/Equipment/Giap/infantry-breastplate.png'),
            update : 'Infantry Defense (bộ binh) +2%\nCavalry Health (kỵ binh) +3%\nDamage to Barbarians (man rợ) +3%',
            sucManhKyBinh : 2,
            phongThuBoBinh : 2,
            satThuongManRo : 3
        },
        {
            id : 4,
            name : 'Commander\'s Heavy Armor',
            image : require('./../../assets/images/Equipment/Giap/commanders-heavy-armor.png'),
            update : 'Infantry Attack (bộ binh) +3%\nArcher Health (cung thủ) +3%\nNhận Commander EXP Gain (EXP) +3%',
            tanCongBoBinh : 3,
            sucManhCungThu : 3,
            kinhNghiemChiHuy : 3
        },
        {
            id : 5,
            name : 'Quinn\'s Soul',
            image : require('./../../assets/images/Equipment/Giap/quinns-soul.png'),
            update : 'Infantry Attack (bộ binh) +4%\nArcher Health (cung thủ) +4%\nDamage to Barbarians (man rợ) +5%',
            tanCongBoBinh : 4,
            sucManhCungThu : 4,
            satThuongManRo : 5
        },
        {
            id : 6,
            name : 'Unbreakable Shadow Legion Plate	',
            image : require('./../../assets/images/Equipment/Giap/unbreakable-shadow-legion-plate.png'),
            update : 'Cavalry Attack (kỵ binh) +5%\nInfantry Attack (bộ binh) +5%\nArcher  Attack (cung thủ) +5%',
            tanCongBoBinh : 5,
            sucManhCungThu : 5,
            tanCongKyBinh : 5
        },
    ],
    Giay : [
        {
            id : 1,
            name : 'Sturdy Boots',
            image : require('./../../assets/images/Equipment/Giay/sturdy-boots.png'),
            update : 'Archer Defense (cung thủ) +2%\nGathering Speed (thu gom) +1%',
            phongThuCungThu : 2,
            tocDoThuGom : 1
        },
        {
            id : 2,
            name : 'Edged Boots	',
            image : require('./../../assets/images/Equipment/Giay/edged-boots.png'),
            update : 'Cavalry Attack (kỵ binh) +1%\nArcher  Attack (cung thủ) +1%\nDamage to Barbarians (man rợ) +3%',
            tanCongKyBinh : 1,
            tanCongCungThu : 1,
            satThuongManRo : 3
        },
        {
            id : 3,
            name : 'Windswept Boots	',
            image : require('./../../assets/images/Equipment/Giay/windswept-boots.png'),
            update : 'Cavalry Health (kỵ binh) +2%\nInfantry Defense (bộ binh) +1%\nMarch Speed (speed) +3%',
            sucManhKyBinh : 2,
            phongThuBoBinh : 1,
            tocDoDieuHanh : 3
        },
        {
            id : 4,
            name : 'Cloud Racers',
            image : require('./../../assets/images/Equipment/Giay/cloud-racers.png'),
            update : 'Cavalry Attack (kỵ binh) +2%\nArcher Health (cung thủ) +2%\nGathering Speed (thu gom) +6%',
            tanCongKyBinh : 2,
            sucManhCungThu : 1,
            tocDoThuGom : 6
        },
        
    ],
    TrangSuc : [
        {
            id : 1,
            name : 'Lohar\'s Bone Necklace',
            image : require('./../../assets/images/Equipment/TrangSuc/lohars-bone-necklace.png'),
            update : 'Commander EXP Gain (EXP) +10%',
            kinhNghiemChiHuy : 10
        },
        {
            
            id : 2,
            name : 'Savage Totem',
            image : require('./../../assets/images/Equipment/TrangSuc/savage-totem.png'),
            update : 'Damage to Barbarians (man rợ) +10%',
            satThuongManRo : 10
        }
    ],
    Gang : [
        {
            id: 1,
            name : 'Cloth Gloves',
            image : require('./../../assets/images/Equipment/Gang/cloth-gloves.png'),
            update : 'Infantry Defense (bộ binh) +2%',
            phongThuBoBinh : 2
        },
        {
            id: 2,
            name : 'Saint\'s Song',
            image : require('./../../assets/images/Equipment/Gang/saint-song.png'),
            update : 'Cavalry Attack (kỵ binh) +2%\nArcher  Attack (cung thủ) +1%\nCommander EXP Gain (EXP) +3%',
            tanCongKyBinh : 2,
            tanCongCungThu : 1,
            kinhNghiemChiHuy :3
        },
        {
            id: 3,
            name : 'Windswept Bracers',
            image : require('./../../assets/images/Equipment/Gang/windswept-bracers.png'),
            update : 'Cavalry Health (kỵ binh) +2%\nInfantry Health (bộ binh) +1%\nMarch Speed (speed) +3%',
            sucManhKyBinh : 2,
            sucManhBoBinh : 1,
            tocDoDieuHanh :3
        }, {
            id: 4,
            name : 'Seth\'s Brutality',
            image : require('./../../assets/images/Equipment/Gang/seth-brutality.png'),
            update : 'Infantry Defense (bộ binh) +2%\nArcher Defense (cung thủ) +2%\nDamage to Barbarians (man rợ) +5%',
            phongThuBoBinh : 2,
            phongThuCungThu : 2,
            satThuongManRo : 5
        },
        {
            id: 5,
            name : 'Iset\'s Sufferancen ',
            image : require('./../../assets/images/Equipment/Gang/isets-sufferance.png'),
            update : 'Cavalry Attack (kỵ binh) +3%\nCavalry Health (kỵ binh) 3%',
            tanCongKyBinh : 3,
            sucManhKyBinh : 3
        },
        {
            id: 6,
            name : 'Ian\'s Choice	',
            image : require('./../../assets/images/Equipment/Gang/ians-choice.png'),
            update : 'Archer  Attack (cung thủ) +8%\nCommander EXP Gain (EXP) +5%',
            tanCongKyBinh : 8,
            sucManhKyBinh : 5
        },
        {
            id: 7,
            name : 'Sacred Grips',
            image : require('./../../assets/images/Equipment/Gang/sacred-grips.png'),
            update : 'Archer  Attack (cung thủ) +8%\nCommander EXP Gain (EXP) +5%',
            tanCongKyBinh : 8,
            sucManhKyBinh : 5
        },
    ],
    Quan : [
        {
            id: 1,
            name : 'Croarse Breeches',
            image : require('./../../assets/images/Equipment/Quan/coarse-breeches.png'),
            update : 'Cavalry Attack (kỵ binh) +3%\nGathering Speed (thu gom) 1%',
            tanCongKyBinh : 3,
            tocDoThuGom : 1
        },
        {
            id: 2,
            name : 'Vanguard Greaves',
            image : require('./../../assets/images/Equipment/Quan/ranger-trousers.png'),
            update : 'Infantry Attack (bộ binh) +2%\nArcher Defense (cung thủ) +2%\nDamage to Barbarians (man rợ) +3%',
            tanCongBoBinh : 3,
            phongThuCungThu : 2,
            satThuongManRo : 3
        },
        {
            id: 3,
            name : 'Windswept Bracers',
            image : require('./../../assets/images/Equipment/Quan/vanguard-greaves.png'),
            update : 'Cavalry Attack (kỵ binh) +4%\nCavalry Health (kỵ binh) +1%',
            tanCongKyBinh : 4,
            sucManhKyBinh : 1
        },
        {
            id: 4,
            name : 'Greaves of the Exile',
            image : require('./../../assets/images/Equipment/Quan/greaves-of-the-exile.png'),
            update : 'Infantry Defense (bộ binh) +3%\nArcher Defense (cung thủ) 3%\nCommander EXP Gain (EXP) +3%',
            phongThuBoBinh : 3,
            phongThuCungThu : 3,
            kinhNghiemChiHuy : 3
        },
        {
            id: 5,
            name : 'Kuruak\'s Humility',
            image : require('./../../assets/images/Equipment/Quan/karuaks-humility.png'),
            update : 'Cavalry Attack (kỵ binh) +5%\nCavalry Health (kỵ binh) +5%',
            tanCongKyBinh : 5,
            sucManhKyBinh : 5
        },
        {
            id: 6,
            name : 'Gladiator',
            image : require('./../../assets/images/Equipment/Quan/gladiator.png'),
            update : 'Cavalry Health (kỵ binh) +4%\nArcher Defense (cung thủ) +4%\nDamage to Barbarians (man rợ) +5%',
            sucManhKyBinh : 4,
            phongThuCungThu : 4,
            satThuongManRo : 5
        },
    ]

}