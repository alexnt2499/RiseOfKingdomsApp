export default {
    VuKhi: [
        {
            id : 1,
            name : 'Kiếm dài sắc bén',
            image : require('./../../assets/images/Equipment/Attack/sharp-longsword.png'),
            update : 'Phòng thủ kỵ binh +5%\nTốc độ thu gom +2%',
            phongThuKyBinh : 5,
            tocDoThuGom : 2
        },
        {
            id : 2,
            name : 'Kích tiên phong',
            image : require('./../../assets/images/Equipment/Attack/vanguard-halberd.png'),
            update : 'Phòng thủ kỵ binh +5%\nSức khỏe kỵ binh +4%',
            phongThuKyBinh : 5,
            sucManhKyBinh : 4
        },
        {
            id : 3,
            name : 'Gậy mất mát',
            image : require('./../../assets/images/Equipment/Attack/staff-of-the-lost.png'),
            update : 'Phòng thủ kỵ binh +3%\nPhòng thủ bộ binh +5%\nPhòng thủ cung thủ +5%',
            phongThuKyBinh : 3,
            phongThuBoBinh : 5,
            phongThuCungThu : 5
        },
        {
            id : 4,
            name : 'Trái tim thánh nữ',
            image : require('./../../assets/images/Equipment/Attack/heart-of-the-saint.png'),
            update : 'Phòng thủ kỵ binh +8%\nSức khỏe bộ binh +4%\nSức khỏe cung thủ +6%',
            phongThuKyBinh : 8,
            sucManhBoBinh: 4,
            sucManhCungThu : 6
        }, 
        {
            id : 5,
            name : 'Thế hệ vàng',
            image : require('./../../assets/images/Equipment/Attack/golden-age.png'),
            update : 'Tấn công kỵ binh +4%\nPhòng thủ bộ binh +6%\nPhòng thủ cung thủ +8%',
            tanCongKyBinh : 4,
            phongThuBoBinh : 6,
            phongThuCungThu : 8
        },
        {
            id : 6,
            name : 'Bản thử vương quốc bị mất',
            image : require('./../../assets/images/Equipment/Attack/trial-of-the-lost-kindgom.png'),
            update : 'Phòng thủ kỵ binh +8%\nSức khỏe bộ binh +5%\nTấn công cung thủ +5%',
            phongThuKyBinh : 8,
            sucManhBoBinh : 6,
            tanCongCungThu : 5     
        }
        
        
    ],
    Mu : [
        {
            id : 1,
            name : 'Mũ sắt',
            image : require('./../../assets/images/Equipment/Mu/iron-helm.png'),
            update : 'Tấn công bộ binh +3%',
            tanCongBoBinh : 3
        },
        {
            id : 2,
            name : 'Mũ giáp phượng hoàng',
            image : require('./../../assets/images/Equipment/Mu/helm-of-the-phoenix.png'),
            update : 'Sát thương man rợ +3%\nSức khỏe bộ binh +2%\nPhòng thủ cung thủ +2%',
            satThuongManRo : 3,
            sucManhBoBinh : 2,
            phongThuCungThu :2
        },
        {
            id : 3,
            name : 'Sự u buồn vực thẳm',
            image : require('./../../assets/images/Equipment/Mu/abyssal-visage.png'),
            update : 'Tấn công kỵ binh +4%\nTấn công bộ binh +3%\nTấn công cung thủ +3%',
            tanCongKyBinh : 4,
            tanCongBoBinh : 3,
            tanCongCungThu : 3
        }
    ],
    Giap : [
        {
            id : 1,
            name : 'Thư chuỗi',
            image : require('./../../assets/images/Equipment/Giap/chain-mail.png'),
            update : 'Tấn công cung thủ +3%',
            tanCongCungThu : 3
        },
        {
            id : 2,
            name : 'Đĩa Milanese',
            image : require('./../../assets/images/Equipment/Giap/milanese-plate.png'),
            update : 'Tấn công cung thủ +2%\nPhòng thủ kỵ binh +3%',
            tanCongCungThu : 2,
            phongThuKyBinh : 3
        },
        {
            id : 3,
            name : 'Áo giáp bộ binh',
            image : require('./../../assets/images/Equipment/Giap/infantry-breastplate.png'),
            update : 'Phòng thủ bộ binh +2%\nSức khỏe kỵ binh +3%\nSát thương man rợ +3%',
            sucManhKyBinh : 2,
            phongThuBoBinh : 2,
            satThuongManRo : 3
        },
        {
            id : 4,
            name : 'Áo giáp năng của chỉ huy',
            image : require('./../../assets/images/Equipment/Giap/commanders-heavy-armor.png'),
            update : 'Tấn công bộ binh +3%\nSức khỏe cung thủ +3%\nNhận kinh nghiệm chỉ huy +3%',
            tanCongBoBinh : 3,
            sucManhCungThu : 3,
            kinhNghiemChiHuy : 3
        },
        {
            id : 5,
            name : 'Linh hồn của Quinn',
            image : require('./../../assets/images/Equipment/Giap/quinns-soul.png'),
            update : 'Tấn công bộ binh +4%\nSức khỏe cung thủ +4%\nSát thương man rợ +5%',
            tanCongBoBinh : 4,
            sucManhCungThu : 4,
            satThuongManRo : 5
        },
        {
            id : 6,
            name : 'Quả báo của quân đoàn bóng đêm',
            image : require('./../../assets/images/Equipment/Giap/unbreakable-shadow-legion-plate.png'),
            update : 'Tấn công kỵ binh +5%\nTấn công bộ binh +5%\nTấn công cung thủ +5%',
            tanCongBoBinh : 5,
            sucManhCungThu : 5,
            tanCongKyBinh : 5
        },
    ],
    Giay : [
        {
            id : 1,
            name : 'Giày cao gót chắc chắn',
            image : require('./../../assets/images/Equipment/Giay/sturdy-boots.png'),
            update : 'Phòng thủ cung thủ +2%\nTốc độ thu gom +1%',
            phongThuCungThu : 2,
            tocDoThuGom : 1
        },
        {
            id : 2,
            name : 'Giày có lưỡi chống bụi',
            image : require('./../../assets/images/Equipment/Giay/edged-boots.png'),
            update : 'Tấn công kỵ binh +1%\nTấn công cung thủ +1%\nSát thương man rợ +3%',
            tanCongKyBinh : 1,
            tanCongCungThu : 1,
            satThuongManRo : 3
        },
        {
            id : 3,
            name : 'Giày lộng gió',
            image : require('./../../assets/images/Equipment/Giay/windswept-boots.png'),
            update : 'Sức khỏe kỵ binh +2%\nPhòng thủ bộ binh +1%\nTốc độ diễu hành +3%',
            sucManhKyBinh : 2,
            phongThuBoBinh : 1,
            tocDoDieuHanh : 3
        },
        {
            id : 4,
            name : 'Tay đua trên mây',
            image : require('./../../assets/images/Equipment/Giay/cloud-racers.png'),
            update : 'Tấn công kỵ binh +2%\nSức khỏe cung thủ +2%\nTốc độ thu gom +6%',
            tanCongKyBinh : 2,
            sucManhCungThu : 1,
            tocDoThuGom : 6
        },
        
    ],
    TrangSuc : [
        {
            id : 1,
            name : 'Vòng cổ xương người',
            image : require('./../../assets/images/Equipment/TrangSuc/lohars-bone-necklace.png'),
            update : 'Kinh nghiệm chỉ huy +10%',
            kinhNghiemChiHuy : 10
        },
        {
            
            id : 2,
            name : 'Vật tố man rợ',
            image : require('./../../assets/images/Equipment/TrangSuc/savage-totem.png'),
            update : 'Sát thương man rợ +10%',
            satThuongManRo : 10
        }
    ],
    Gang : [
        {
            id: 1,
            name : 'Găng tay vải',
            image : require('./../../assets/images/Equipment/Gang/cloth-gloves.png'),
            update : 'Phòng thủ bộ binh +2%',
            phongThuBoBinh : 2
        },
        {
            id: 2,
            name : 'Bài thánh ca',
            image : require('./../../assets/images/Equipment/Gang/saint-song.png'),
            update : 'Tấn công kỵ binh +2%\nTấn công cung thủ +1%\nKinh nghiệm chỉ huy +3%',
            tanCongKyBinh : 2,
            tanCongCungThu : 1,
            kinhNghiemChiHuy :3
        },
        {
            id: 3,
            name : 'Giáp tay lộng gió',
            image : require('./../../assets/images/Equipment/Gang/windswept-bracers.png'),
            update : 'Sức khỏe kỵ binh +2%\nSức khỏe bộ binh +1%\nTốc độ diễu hành +3%',
            sucManhKyBinh : 2,
            sucManhBoBinh : 1,
            tocDoDieuHanh :3
        }, {
            id: 4,
            name : 'Sự tàn bạo của Seth',
            image : require('./../../assets/images/Equipment/Gang/seth-brutality.png'),
            update : 'Phòng thủ bộ binh +2%\nPhòng thủ cung thủ +2%\nSát thương man rợ +5%',
            phongThuBoBinh : 2,
            phongThuCungThu : 2,
            satThuongManRo : 5
        },
        {
            id: 5,
            name : 'Sự tàn đau đớn của Iset',
            image : require('./../../assets/images/Equipment/Gang/isets-sufferance.png'),
            update : 'Tấn công kỵ binh +3%\nSức khỏe kỵ binh 3%',
            tanCongKyBinh : 3,
            sucManhKyBinh : 3
        },
        {
            id: 6,
            name : 'Sự lựa chọn của Ian',
            image : require('./../../assets/images/Equipment/Gang/ians-choice.png'),
            update : 'Tấn công cung thủ +8%\nKinh nghiệm chỉ huy +5%',
            tanCongKyBinh : 8,
            sucManhKyBinh : 5
        },
        {
            id: 7,
            name : 'Kìm linh thiêng',
            image : require('./../../assets/images/Equipment/Gang/sacred-grips.png'),
            update : 'Tấn công cung thủ +8%\nKinh nghiệm chỉ huy +5%',
            tanCongKyBinh : 8,
            sucManhKyBinh : 5
        },
    ],
    Quan : [
        {
            id: 1,
            name : 'Quần ống túm thô',
            image : require('./../../assets/images/Equipment/Quan/coarse-breeches.png'),
            update : 'Tấn công kỵ binh +3%\nTốc độ thu gom 1%',
            tanCongKyBinh : 3,
            tocDoThuGom : 1
        },
        {
            id: 2,
            name : 'Quần lính cảnh binh',
            image : require('./../../assets/images/Equipment/Quan/ranger-trousers.png'),
            update : 'Tấn công bộ binh +2%\nPhòng thủ cung thủ +2%\nSát thương man rợ +3%',
            tanCongBoBinh : 3,
            phongThuCungThu : 2,
            satThuongManRo : 3
        },
        {
            id: 3,
            name : 'Ống chân của quân tiên phong',
            image : require('./../../assets/images/Equipment/Quan/vanguard-greaves.png'),
            update : 'Tấn công kỵ binh +4%\nSức khỏe kỵ binh +1%',
            tanCongKyBinh : 4,
            sucManhKyBinh : 1
        },
        {
            id: 4,
            name : 'Tù đầy biệt xứ',
            image : require('./../../assets/images/Equipment/Quan/greaves-of-the-exile.png'),
            update : 'Phòng thủ bộ binh +3%\nPhòng thủ cung thủ 3%\nKinh nghiệm chỉ huy +3%',
            phongThuBoBinh : 3,
            phongThuCungThu : 3,
            kinhNghiemChiHuy : 3
        },
        {
            id: 5,
            name : 'Sự nhân văn của Karuak',
            image : require('./../../assets/images/Equipment/Quan/karuaks-humility.png'),
            update : 'Tấn công kỵ binh +5%\nSức khỏe kỵ binh +5%',
            tanCongKyBinh : 5,
            sucManhKyBinh : 5
        },
        {
            id: 6,
            name : 'Đấu sĩ',
            image : require('./../../assets/images/Equipment/Quan/gladiator.png'),
            update : 'Sức khỏe kỵ binh +4%\nPhòng thủ cung thủ +4%\nSát thương man rợ +5%',
            sucManhKyBinh : 4,
            phongThuCungThu : 4,
            satThuongManRo : 5
        },
    ]

}