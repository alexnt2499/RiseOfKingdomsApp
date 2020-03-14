import VanMinhImage from './../database/VanMinh';
import TalentIcon from './../database/Icon';
export default [
    {
        id: 1,
        name : 'Baibars',
        image : require('./../../assets/images/Commander/Epic/Baibars/Baibars.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Baibars/tuongBaibars.png'),
        about : 'Baibars là Quốc vương Ai Cập và Syria thứ tư trong triều đại Mamluk. Vào tháng 9 năm 1260, ông đánh bại quân đội Mông Cổ xâm lược tại Trận Ain Jalut - đây là thất bại lớn đầu tiên mà quân Mông Cổ phải gánh chịu. Trong trận chiến, Baibars đã thực hiện chiến lược tấn công và chạy trốn, khiến cho lực lượng Mông Cổ rơi vào một cuộc phục kích tàn khốc. Baibars nổi tiếng cả về những chiến thắng của ông chống lại quân Mông Cổ và Thập tự quân, và cho những cải cách hành chính mà ông đã thực hiện trong thời kỳ sultanate. Một nhà lãnh đạo quân sự đầy tham vọng, Baibars đã tổ chức một đội quân và tái cấu trúc lực lượng hải quân hiện có. Ông đã quyên góp rất nhiều cho các công trình công cộng, bao gồm xây dựng đường sá, nhà thờ Hồi giáo, trường học và bưu điện, cũng như các dự án thủy lợi để tăng sản lượng ngũ cốc của đất nước. Triều đại của Baibars đã đẩy quân Thập tự chinh ra khỏi lãnh thổ Mamluk một lần và mãi mãi, và bắt đầu một thời đại mới của quyền lực tối cao Mamluk ở Đông Địa Trung Hải.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill1.png'),
                type : 'Chủ động',
                name : 'Bão cát',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lớn (Damage Factor 300) cho kẻ địch trong khu vực hình quạt hướng về phía trước (tối đa 3 mục tiêu) và giảm 30% tốc độ diễu hành của mục tiêu hiện tại trong 2 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 300/375/450/600/750\nGiảm tốc độ hành quân: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill2.png') ,
                name : 'Hiệp sĩ Ả Rập',
                type : 'Bị động',
                rage : '',
                about : 'Tăng 8% tấn công của các đơn vị kỵ binh. ',
                update : 'Thưởng tấn công cho Kỵ binh: 8% / 10% / 12% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill3.png') ,
                name : 'Không lối thoát',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các thành phố, các cuộc tấn công thông thường có 100% cơ hội giảm 1% tấn công đồn trú và phòng thủ 1%.',
                update : 'Giảm tấn công: 1% / 2% / 3% / 5% / 7%\nGiảm phòng thủ: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill4.png') ,
                name : 'Chúa tể',
                type : 'Bị động',
                rage : '',
                about : 'Khi rời khỏi trận chiến (Nhưng không phải khi được định tuyến), chữa lành một phần các đơn vị bị thương nhẹ (Yếu tố chữa bệnh 75) và tăng tốc độ diễu hành thêm 20% trong 10 giây tiếp theo.',
                update : 'Hệ số chữa lành: 75/100/125/150/200\nThưởng tốc độ hành quân: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill5.png') ,
                name : 'Làm mờ mặt trời',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương lớn (Hệ số sát thương 1000) cho kẻ địch trong khu vực hình quạt hướng về phía trước (tối đa 5 mục tiêu) và giảm 50% tốc độ diễu hành của mục tiêu hiện tại trong 2 giây tiếp theo.',

            },

        ],
        VanMinh : VanMinhImage.Arabia,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/baibars-talent-tree-1024x578.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/baibars-talent-tree-2-1024x578.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/baibars-cavalry-1024x576.jpg'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 2,
        name : 'Belisarius',
        image : require('./../../assets/images/Commander/Epic/Belisarius/Belisarius.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Belisarius/tuongBelisarius.png'),
        about : 'Flavius ​​Belisarius là một vị tướng Byzantine sống trong thế kỷ thứ 6 sau Công nguyên. Ông thường được coi là một trong những vị tướng vĩ đại nhất của Đế quốc Byzantine. Belisarius được biết đến là một trong những người cuối cùng của người La Mã, một trong những cá nhân cuối cùng thể hiện những đức tính của Đế chế La Mã. Flavius ​​đóng một vai trò quan trọng trong kế hoạch của Hoàng đế Justinian, nhằm chiếm lại lãnh thổ Địa Trung Hải trước đây do Đế quốc La Mã phương Tây kiểm soát, lãnh đạo quân đội đế quốc chống lại đế chế Sasanian (Ba Tư), vương quốc Vandal của Bắc Phi, xâm chiếm Constantinople. Ban đầu là một thành viên trong đội cận vệ của Justinian, Flavius ​​đã sớm được hoàng đế chú ý và được ban cho mệnh lệnh đầu tiên ở tuổi 25. Không biết nhiều về cuộc sống cá nhân của Belisarius, nhưng hai người chính tôi đã hướng dẫn hành động của mình: trung thành với Hoàng đế và tình yêu dành cho vợ, Antonia. Bất chấp sự đối xử không nhất quán mà anh ta nhận được từ Justinian, lòng trung thành của Belisarius, không bao giờ bị dao động, và lòng trung thành của anh ta đã đi vào lịch sử như một trong những yếu tố cao quý nhất của kỷ nguyên Justinian.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill1.png'),
                type : 'Chủ động',
                name : 'Lừa dối ',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Giảm 10% tấn công mục tiêu và 10% phòng thủ trong 2 giây tiếp theo, sau đó gây sát thương lớn (Damage Factor 150) cho mục tiêu ở lượt tiếp theo.',
                update : 'Giảm tấn công: 10% / 15% / 20% / 25% / 30%\nGiảm phòng thủ: 10% / 15% / 20% / 25% / 30%\nHệ số thiệt hại trực tiếp: 150/210/270/360450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill2.png') ,
                name : 'Không thể cưỡng lại',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương gây ra cho những kẻ man rợ và các đơn vị trung lập khác thêm 5%.',
                update : 'Thiệt hại cho người man rợ: 5% / 10% / 17% / 25% / 35%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill3.png') ,
                name : 'Bucellarii',
                type : 'Bị động',
                rage : '',
                about : 'Tăng phòng thủ cho các đơn vị kỵ binh thêm 5%. Tăng tốc độ diễu hành thêm 10% trong 10 giây sau khi rời trận chiến.',
                update : 'Thưởng phòng thủ kỵ binh: 10% / 15% / 20% / 25% / 30%\nTiền thưởng tốc độ tháng 3: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill4.png') ,
                name : 'Chiến thuật xiên',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội mục tiêu đã giảm xuống dưới 50% sức mạnh, tăng 10% lực sát thương gây ra cho mục tiêu của quân đội Belisarius.',
                update : 'Phần thưởng thiệt hại: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill5.png') ,
                name : 'Bloodthristy Bucellarii',
                type : 'Bị động',
                rage : '',
                about : 'Tăng 30% phòng thủ cho các đơn vị kỵ binh. Tăng tốc độ diễu hành thêm 50% trong 10 giây sau khi rời trận chiến.',

            },

        ],
        VanMinh : VanMinhImage.Bi,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Peacekeeping,
            TalentIcon.Mobility,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/belisarius-talent-build-1024x578.jpg'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 3,
        name : 'Boudica',
        image : require('./../../assets/images/Commander/Epic/Boudica/Boudica.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Boudica/tuongBoudica.png'),
        about : 'Boudica là một nữ hoàng của bộ tộc Celtic Iceni của Anh, người đã lãnh đạo một cuộc nổi dậy chống lại các lực lượng chiếm đóng của Đế chế La Mã vào năm 60 hoặc 61. Tuy nhiên, thống đốc La Mã Gaius Suetonius Paulinus, chiến thắng cuối cùng của Boudica đã khẳng định sự kiểm soát của La Mã đối với tỉnh này. Boudica sau đó tự sát để tránh bị bắt hoặc chết vì bệnh. Sự quan tâm đến những sự kiện này đã hồi sinh trong thời Phục hưng Anh và dẫn đến sự nổi tiếng của Boudica trong thời đại Victoria. Boudica vẫn là một biểu tượng văn hóa quan trọng ở Vương quốc Anh. Sự vắng mặt của văn học Anh bản địa trong phần đầu của thiên niên kỷ thứ nhất có nghĩa là kiến ​​thức về cuộc nổi loạn của Boudica chỉ xuất hiện trong các tác phẩm của người La Mã.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill1.png'),
                type : 'Chủ động',
                name : 'Than thở của phe nổi dậy',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lớn cho mục tiêu và giảm cơn thịnh nộ của nó. Giảm tấn công quân đội của mục tiêu trong 2 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 225/300/375/450/600\nGiảm tấn công: 10% / 13% / 16% / 20% / 25%\nGiảm cơn thịnh nộ: 50/60/70/80/100'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill2.png') ,
                name : 'Trận chiến nhóm',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương gây ra cho những kẻ man rợ và các đơn vị trung lập khác bởi quân đội do chỉ huy này lãnh đạo và tăng 20% ​​kinh nghiệm chỉ huy thu được từ các mục tiêu này.',
                update : 'Thiệt hại cho người man rợ: 5% / 10% / 15% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill3.png') ,
                name : 'Dòng máu Celtic',
                type : 'Bị động',
                rage : '',
                about : 'Boudica phục hồi cơn thịnh nộ và chữa lành một số đơn vị bị thương nhẹ trong quân đội của cô bất cứ khi nào cô sử dụng một kỹ năng.',
                update : 'Cơn thịnh nộ được khôi phục: 10/20/30/40/50\nYếu tố chữa lành: 150/200/250/300/400'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill4.png') ,
                name : 'Nữ hoàng của xứ Wales',
                type : 'Bị động',
                rage : '',
                about : 'Quân đội tấn công bình thường có cơ hội tăng sát thương gây ra cho kẻ thù.',
                update : 'Thưởng thiệt hại (Cơ hội 5%): 10% / 20% / 30% / 40% / 50%\nThưởng thiệt hại (Cơ hội 3%): 20% / 40% / 60% / 80% / 100%\nThưởng thiệt hại (Cơ hội 2%): 30% / 60% / 90% / 120% / 150%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill5.png') ,
                name : 'Tiếng gầm của quân nổi dậy',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương lớn (Hệ số sát thương 1000) cho mục tiêu và giảm cơn thịnh nộ của nó xuống 100. Giảm 25% đòn tấn công của quân mục tiêu trong 2 giây tiếp theo.',

            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Peacekeeping,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/boudica-talent-tree-1024x578.jpg'
            }
        ],
        partner : [],
        trangBi : 'man rợ'
    },
    {
        id: 4,
        name : 'Eulji Mundeok',
        image : require('./../../assets/images/Commander/Epic/Mundeok/Mundeok.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Mundeok/tuongMundeok.png'),
        about : 'Boudica là một nữ hoàng của bộ tộc Celtic Iceni của Anh, người đã lãnh đạo một cuộc nổi dậy chống lại các lực lượng chiếm đóng của Đế chế La Mã vào năm 60 hoặc 61. Tuy nhiên, thống đốc La Mã Gaius Suetonius Paulinus, chiến thắng cuối cùng của Boudica đã khẳng định sự kiểm soát của La Mã đối với tỉnh này. Boudica sau đó tự sát để tránh bị bắt hoặc chết vì bệnh. Sự quan tâm đến những sự kiện này đã hồi sinh trong thời Phục hưng Anh và dẫn đến sự nổi tiếng của Boudica trong thời đại Victoria. Boudica vẫn là một biểu tượng văn hóa quan trọng ở Vương quốc Anh. Sự vắng mặt của văn học Anh bản địa trong phần đầu của thiên niên kỷ thứ nhất có nghĩa là kiến ​​thức về cuộc nổi loạn của Boudica chỉ xuất hiện trong các tác phẩm của người La Mã.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill1.png'),
                type : 'Chủ động',
                name : 'Trận tấn công nước',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Tấn công mục tiêu và gây sát thương lớn. Giảm phòng thủ của mục tiêu trong 2 giây.',
                update : 'Hệ số thiệt hại trực tiếp: 300/375/450/600/750\nGiảm phòng thủ: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill2.png') ,
                name : 'Địch không còn cơ hội',
                type : 'Bị động',
                rage : '',
                about : 'Tăng phòng thủ đồn trú khi chỉ huy này phục vụ với tư cách chỉ huy đồn trú.',
                update : 'Thưởng phòng thủ: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill3.png') ,
                name : 'Trận chiến Salsu',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sự tấn công của các đơn vị bộ binh và phòng thủ các đơn vị bộ binh.',
                update : 'Thưởng tấn công bộ binh: 4% / 5% / 6% / 8% / 10%\nThưởng phòng thủ cho Bộ binh: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill4.png') ,
                name : 'Phản công ',
                type : 'Bị động',
                rage : '',
                about : 'Khi bị tấn công, Eulji Mundeok có 10% cơ hội tăng sát thương cho quân đội của mình ở lượt tiếp theo.',
                update : 'Thưởng thiệt hại: 20% / 40% / 60% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill5.png') ,
                name : 'Chiến tranh và hòa bình',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Tăng 15% tấn công của các đơn vị bộ binh và phòng thủ 15% cho các đơn vị bộ binh.',

            },

        ],
        VanMinh : VanMinhImage.Korea,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Attack,
        ],
        talentTree : [],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 5,
        name : 'Hermann',
        image : require('./../../assets/images/Commander/Epic/Hermann/Hermann.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Hermann/tuongHermann.png'),
        about : 'Arminius, được biết đến với tên tiếng Đức Hermann, là một thủ lĩnh của bộ tộc Cherusci người Đức, người nổi tiếng đã dẫn dắt một liên minh các bộ lạc Đức đến chiến thắng quyết định chống lại ba quân đoàn La Mã trong Trận chiến rừng Teutoburg năm 9 sau Công nguyên. Một trung úy phụ tá của tướng quân La Mã Publius Quincilius Varus, Arminius đã sử dụng kiến ​​thức về chiến thuật của La Mã để ambus và tiêu diệt các quân đoàn. Thất bại tại Teutoburg sẽ kết thúc cuộc rút quân chiến lược vĩnh viễn của Đế chế La Mã khỏi Magna Germania, và người La Mã không còn nỗ lực phối hợp nào để chinh phục và giữ Germania bên kia sông Rhine. Các nhà sử học hiện đại đã coi chiến thắng của Arminius là "thất bại lớn nhất của Rome" và là một trong những trận chiến quyết định nhất trong lịch sử.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill1.png'),
                type : 'Chủ động',
                name : 'Phục kích',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lớn cho mục tiêu, giảm cơn thịnh nộ của mục tiêu và làm câm lặng mục tiêu trong 2 giây.',
                update : 'Hệ số thiệt hại trực tiếp: 300/375/450/600/750\nGiảm cơn thịnh nộ: 50/60/70/80/100'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill2.png') ,
                name : 'Thiên tài quân sự',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tốc độ tấn công và diễu hành của các đơn vị cung thủ.',
                update : 'Phần thưởng Tấn công cung thủ: 3% / 4,5% / 6% / 8% / 10% \nPhần thưởng tốc độ hành quân cung thủ: 1,5% / 3% / 5% / 7% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill3.png') ,
                name : 'Truyền thuyết về Teutoburger',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công đồn trú và canh gác khi chỉ huy này đang phục vụ như là chỉ huy đồn trú.',
                update : 'Thưởng tấn công Đồn trú / Tháp canh: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill4.png') ,
                name : 'Anh hùng dân tộc',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương tấn công bình thường của quân đội. Tấn công có cơ hội cấp thêm 100 cơn thịnh nộ.',
                update : 'Phần thưởng sát thương tấn công thông thường: 3% / 4,5% / 6% / 8% / 10%\nCơ hội kích hoạt: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill5.png') ,
                name : 'Đường cùng',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương lớn (Hệ số sát thương 1150) cho mục tiêu, giảm 100 cơn thịnh nộ của mục tiêu và làm câm lặng mục tiêu trong 2 giây.',

            },

        ],
        VanMinh : VanMinhImage.Germany,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 26,
        name : 'Joan of Arc',
        image : require('./../../assets/images/Commander/Epic/Joan/Joan.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Joan/tuongJoan.png'),
        about : 'Joan of Arc được coi là một nữ anh hùng của Pháp vì vai trò của cô trong giai đoạn Lancastrian trong Chiến tranh Trăm năm, và được phong thánh thành một vị thánh Công giáo La Mã. Vào ngày 23 tháng 5 năm 1430, cô bị bắt tại Compiègne và sau đó bị đưa ra xét xử. Sau khi Đức Giám mục Pierre Cauchon tuyên bố có tội, cô đã bị thiêu tại cọc vào ngày 30 tháng 5 năm 1431, chết vào khoảng mười chín tuổi. Năm 1456, một tòa án điều tra đã kiểm tra phiên tòa, gỡ bỏ các cáo buộc chống lại cô, tuyên bố cô vô tội và tuyên bố cô là một người tử vì đạo. Vào thế kỷ 16, cô đã trở thành một biểu tượng của Liên minh Công giáo, và vào năm 1803, cô được tuyên bố là một biểu tượng quốc gia của Pháp theo quyết định của Napoleon Bonaparte.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Joan/skill1.png'),
                type : 'Chủ động',
                name : 'Khải huyền',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Trong 2 giây tiếp theo, Joan of Arc cấp cho quân đội của chính cô và lực lượng thân thiện gần đó một lực lượng mạnh mẽ giúp tăng sức khỏe cho các đơn vị bộ binh, tăng khả năng phòng thủ của các đơn vị kỵ binh, tăng sức tấn công của các đơn vị cung thủ và tăng thêm cơn thịnh nộ mỗi giây.',
                update : 'Thưởng cho sức khỏe bộ binh: 10% / 15% / 20% / 25% / 30%\nThưởng phòng thủ kỵ binh: 10% / 15% / 20% / 25% / 30%\nPhần thưởng Tấn công cung thủ: 10% / 15% / 20% / 25% / 30%\nCơn thịnh nộ được khôi phục: 15/20/25/30/40'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill2.png') ,
                name : 'Thiên tài quân sự',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tốc độ tập hợp của quân đội và tăng tải quân đội.',
                update : 'Phần thưởng tốc độ thu thập: 5% / 10% / 15% / 20% / 25%\nPhần thưởng tải quân đội: 5% / 10% / 15% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill3.png') ,
                name : 'Người hầu gái của thành phố Orleans',
                type : 'Bị động',
                rage : '',
                about : 'Đòn tấn công thông thường của quân lính có 10% cơ hội chữa lành một số đơn vị bị thương nhẹ. Hiệu ứng chỉ có thể kích hoạt cứ sau 5 giây.',
                update : 'Hệ số chữa lành: 150/200/250/350/450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill4.png') ,
                name : 'Thánh',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương tấn công bình thường.',
                update : 'Thưởng sát thương tấn công thông thường: 10% / 13% / 16% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill5.png') ,
                name : 'Hậu duệ của nữ thần',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Trong 4 giây tiếp theo, Joan of Arc cấp cho quân đội của chính cô và lực lượng thân thiện gần đó một lực lượng mạnh mẽ tăng 30% sức khỏe của các đơn vị bộ binh, tăng 30% phòng thủ của các đơn vị kỵ binh tăng 30% tấn công của các đơn vị cung thủ, và tăng 30% thêm 50 cơn thịnh nộ mỗi giây.',

            },

        ],
        VanMinh : VanMinhImage.France,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Support,
        ],
        talentTree : [],
        partner : [],
        trangBi : ''
    },
    {
        id: 16,
        name : 'Kusunoki Masashige',
        image : require('./../../assets/images/Commander/Epic/Kusunoki/Kusunoki.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Kusunoki/tuongKusunoki.png'),
        about : 'Kusunoki Masashige là một samurai thế kỷ 14, người đã chiến đấu cho Hoàng đế Go-Daigo trong Chiến tranh Genkō, nỗ lực giành quyền cai trị Nhật Bản khỏi Mạc phủ Kamakura và được nhớ đến là lý tưởng của lòng trung thành của samurai. Nguồn gốc của ông chưa được xác thực và chỉ sáu năm kể từ khi bắt đầu chiến dịch quân sự vào năm 1331 và sự sụp đổ của ông vào năm 1336. Ông đã nhận được sự trang trí cao nhất từ ​​chính phủ Meiji của Nhật Bản vào năm 1880. Truyền thuyết kể rằng Hoàng đế Go-Daigo đã có một giấc mơ trong đó anh ta đang trú ẩn dưới gốc cây long não ("kusunoki"), và giấc mơ này đã đưa anh ta đến họ của chiến binh sẽ hỗ trợ anh ta. Kusunoki Masashige là một anh hùng bởi vì anh ta "đứng trong lịch sử của đất nước mình như một nhân vật lý tưởng của một chiến binh, nhỏ gọn trong các đức tính dân sự và quân sự ở một mức độ cao."',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill1.png'),
                type : 'Chủ động',
                name : 'Shichisei Hōkoku',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Loại bỏ tất cả các hiệu ứng tiêu cực và kiểm soát khỏi quân đội của Kusunoki Masashige. Ngoài ra, gây sát thương trực tiếp lên tối đa 3 mục tiêu trong khu vực hình quạt, sau đó gây thêm sát thương cho mục tiêu mỗi giây trong 2 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 150/180/210/250/300\nHệ số thiệt hại bổ sung: 100/130/160/200/250'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill2.png') ,
                name : 'Những người đàn ông xứng đáng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương phản công đồn trú khi chỉ huy này phục vụ với tư cách chỉ huy đồn trú.',
                update : 'Thưởng sát thương phản công của đồn trú: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill3.png') ,
                name : 'Dũng cảm và Trí tuệ',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sự tấn công của các đơn vị cung thủ và phòng thủ của các đơn vị cung thủ.',
                update : ' Thưởng Tấn công cung thủ: 4% / 5% / 6% / 8% / 10%\nThưởng phòng thủ cung thủ: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill4.png') ,
                name : 'Bi kịch kết thúc',
                type : 'Bị động',
                rage : '',
                about : 'Các cuộc tấn công thông thường của quân đội có một sự thay đổi để gây thêm sát thương mỗi giây cho mục tiêu trong 2 giây.',
                update : 'Hệ số sát thương bổ sung: 150/200/250/350/450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill5.png') ,
                name : 'Linh hồn của Samurai',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Tăng sức tấn công của các đơn vị cung thủ thêm 15% và phòng thủ của các đơn vị cung thủ thêm 15%.',

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Gathering,
            TalentIcon.Skill,
        ],
        talentTree : [],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 50,
        name : 'Lohar',
        image : require('./../../assets/images/Commander/Epic/Lohar/Lohar.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Lohar/tuongLohar.png'),
        about : 'Lohar, sinh ra trong một pháo đài man rợ từ xa, đã cho thấy một tài năng chiến đấu tuyệt vời vượt quá tuổi của mình. Ông huấn luyện rất nghiêm ngặt như là một phần của lực lượng chính để bảo vệ pháo đài. Một tuổi thơ vất vả khiến anh chán nản trong việc luyện tập thậm chí là ghét, nhưng một khi anh trải qua một cuộc chiến tàn khốc chống lại một pháo đài khác và rơi vào một đám cháy lớn. Anh hứa rằng một ngày nào đó anh sẽ phát triển đủ mạnh để bảo vệ pháo đài của mình bất kể chi phí là bao nhiêu. Khi trở thành một nhà lãnh đạo vĩ đại, anh ta đã gặp kẻ thù đốt cháy pháo đài của mình, anh ta đã giành được chiến thắng nhưng đã không đạt được sự trả thù. Ông kết hợp hai lực lượng một cách thân thiện và biến lực lượng này thành một thế lực mạnh mẽ trên vùng đất của mình.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill1.png'),
                type : 'Chủ động',
                name : 'Lực lượng áp đảo',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp vào một mục tiêu duy nhất và chữa lành một phần các đơn vị bị thương nhẹ của quân đội bạn.',
                update : 'Hệ số thiệt hại trực tiếp: 150/200/250/350/450\nHệ số chữa lành: 150/200/250/350/450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill2.png') ,
                name : 'Phê chuẩn',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương gây ra cho mọi rợ và các đơn vị trung lập khác.',
                update : 'Thưởng Thiệt hại người man rợ: 5% / 10% / 17% / 25% / 35%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill3.png') ,
                name : 'Phiên tòa của Lohar',
                type : 'Bị động',
                rage : '',
                about : 'Tăng kinh nghiệm nhận được bởi tất cả các chỉ huy trong quân đội hiện tại.',
                update : 'Thưởng kinh nghiệm: 10% / 20% / 30% / 50% / 70%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill4.png') ,
                name : 'Máu bất chính',
                type : 'Bị động',
                rage : '',
                about : 'Chữa lành một số đơn vị bị thương nhẹ khi rời khỏi một trận chiến.',
                update : 'Hệ số chữa lành: 500/600/700/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill5.png') ,
                name : 'Tinh thần bất khuất',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Chữa lành một số đơn vị bị thương nhẹ (Hệ số chữa lành 2000) khi rời khỏi trận chiến.',

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Peacekeeping,
            TalentIcon.Support,
        ],
        talentTree : [],
        partner : [],
        trangBi : 'man rợ'
    },
    {
        id: 51,
        name : 'Osman I',
        image : require('./../../assets/images/Commander/Epic/Osman/Osman.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Osman/tuongOsman.png'),
        about : 'Osman Gazi, còn được gọi là Osman I, là người lãnh đạo của Thổ Nhĩ Kỳ Ottoman và người sáng lập vương triều đã thành lập và cai trị Đế chế Ottoman. Sau cái chết của cha mình vào năm 1281, lúc đó Osman mới 23 tuổi, ông đã nắm quyền lãnh đạo của tộc Kayi. Ngay sau đó, những người lính đánh thuê từ khắp nơi trên thế giới Hồi giáo bắt đầu đi vào vương quốc của anh ta để tham gia cuộc chiến chống lại Đế chế Chính thống. Năm 1301, Osman đã đánh bại thành công một lực lượng Byzantine lớn và bắt đầu gây áp lực lên các khu vực do Byzantine kiểm soát. Điều này đã báo động Byzantines, những người nhanh chóng chạy trốn khỏi vùng nông thôn Anatilian. Các nhà lãnh đạo của Byzantium đã quyết tâm ngăn Osman vượt qua châu Âu và cố gắng kiểm tra sự bành trướng về phía tây của anh ta. Osman tiếp tục nhấn vào, tuy nhiên, và sớm chiếm được thành phố Ephesus của Byzantine. Điều này đã đưa một dòng người di cư, chiến binh và nhà thám hiểm khổng lồ khác vào lãnh thổ Ottoman. Osman vừa là một chỉ huy lành nghề vừa là một quản trị viên có khả năng. Ông mở rộng lãnh địa của mình thông qua các chính sách khoan dung và hợp tác với các Kitô hữu Hy Lạp. Người Hy Lạp hoan nghênh trật tự, sự ổn định và an ninh mà sự cai trị của Osman mang lại, vào thời điểm chính quyền trung ương ở Constantinople đang dần rơi vào tình trạng hỗn loạn. Không có sự can thiệp của chính phủ, người Hy Lạp và Thổ Nhĩ Kỳ bắt đầu kết hôn và tạo dựng gia đình, và cuối cùng, một số lượng lớn Kitô hữu đã chấp nhận đức tin Hồi giáo. Lòng khoan dung tôn giáo trở thành đặc điểm xác định của Đế chế Ottoman trong 600 năm tới.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Osman/skill1.png'),
                type : 'Chủ động',
                name : 'Đế chế thức tỉnh',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Chém một đòn mạnh mẽ với Sword of Osman, gây sát thương lớn cho mục tiêu.',
                update : 'Hệ số thiệt hại trực tiếp: 400/500/600/700/850'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill2.png') ,
                name : 'Rạng rỡ của Bursa',
                type : 'Bị động',
                rage : '',
                about : 'Sau khi tấn công một thành phố trong hơn 30 giây, tăng tấn công quân trong thời gian 120 giây.',
                update : 'Thưởng tấn công: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill3.png') ,
                name : 'Thanh kiếm của Osman',
                type : 'Bị động',
                rage : '',
                about : 'Sau khi sử dụng một kỹ năng chủ động, gây thêm sát thương cho mục tiêu ở lượt tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 150/200/250/300/400'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill4.png') ,
                name : 'Vinh quang của vua',
                type : 'Bị động',
                rage : '',
                about : 'Tăng năng lực đoàn quân.',
                update : 'Tăng tối đa quân đội: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill5.png') ,
                name : 'Đế chế đang trỗi dậy',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Chém một đòn mạnh mẽ với Sword of Osman, gây sát thương lớn (Damage Factor 1100) cho mục tiêu.',

            },

        ],
        VanMinh : VanMinhImage.Ottoman,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [],
        partner : [],
        trangBi : ''
    },
    {
        id: 52,
        name : 'Pelagius',
        image : require('./../../assets/images/Commander/Epic/Pelagius/Pelagius.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Pelagius/tuongPelagius.png'),
        about : 'Pelagius là một nhà quý tộc Visigothic, người đã thành lập Vương quốc Asturias, cai trị nó từ năm 718 cho đến khi ông qua đời vào năm 737. Thông qua chiến thắng tại Trận Covadonga, ông được ghi nhận là người bắt đầu Reconquista, cuộc tái chiếm Kitô giáo của bán đảo Iberia từ Moors. Ông thành lập một nhà nước Kitô giáo độc lập để chống lại quyền bá chủ của người Moor. Các nguồn chính cho cuộc đời và sự nghiệp của Pelagius là hai biên niên sử Latinh được viết vào cuối thế kỷ thứ chín tại vương quốc do ông sáng lập. Cái trước là Chronica Albeldensia, được viết tại Albelda vào năm 881, và cái sau là Chronicle of Alfonso III, đã được sửa đổi vào đầu thế kỷ.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill1.png'),
                type : 'Chủ động',
                name : 'Sạc điện',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp vào mục tiêu và gây thêm sát thương mỗi giây trong 2 giây tiếp theo. Phục hồi cơn thịnh nộ sau khi đúc',
                update : 'Hệ số thiệt hại trực tiếp: 150/180/210/250/300\nHệ số thiệt hại bổ sung: 150/180/210/250/300\nCơn thịnh nộ được khôi phục: 50/60/70/80/100'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill2.png') ,
                name : 'Người sáng lập Asturias',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sự tấn công của các đơn vị kỵ binh và phòng thủ của các đơn vị kỵ binh.',
                update : 'Thưởng tấn công cho Kỵ binh: 4% / 5% / 6% / 8% / 10%\nThưởng phòng thủ kỵ binh: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill3.png') ,
                name : 'Lấy lại lãnh thổ đã mất',
                type : 'Bị động',
                rage : '',
                about : 'Tăng cuộc tấn công của đồn trú và tấn công tháp canh khi chỉ huy này đang phục vụ như là chỉ huy đồn trú.',
                update : 'Thưởng tấn công đồn trú / Tháp canh: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill4.png') ,
                name : 'Người đột biến',
                type : 'Bị động',
                rage : '',
                about : 'Đòn tấn công thông thường của quân lính có 10% cơ hội chữa lành một số đơn vị bị thương nhẹ mỗi giây trong 2 giây.',
                update : 'Hệ số chữa lành: 150/200/250/350/450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill5.png') ,
                name : 'Lời thề của Asseuua',
                type : 'bị động',
                rage : '',
                about : 'Tăng sức tấn công của các đơn vị kỵ binh thêm 15% và phòng thủ của các đơn vị kỵ binh thêm 15%.',

            },

        ],
        VanMinh : VanMinhImage.Span,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 53,
        name : 'Scipio Africanus',
        image : require('./../../assets/images/Commander/Epic/Scipio/Scipio.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Scipio/tuongScipio.png'),
        about : 'Publius Cornelius Scipio Africanus là một vị tướng La Mã và sau đó là lãnh sự, người thường được coi là một trong những tướng lĩnh và chiến lược gia quân sự vĩ đại nhất mọi thời đại. Thành tựu chính của anh ta là trong Chiến tranh Punic lần thứ hai, nơi anh ta là người giỏi nhất trong việc đánh bại Hannibal trong trận chiến cuối cùng tại Zama năm 202 trước Công nguyên, một trong những chiến công giúp anh ta trở thành người châu Phi. Được coi là một anh hùng của người dân La Mã nói chung, chủ yếu vì những đóng góp của ông trong cuộc đấu tranh chống lại người Carthain, Scipio đã bị những người theo chủ nghĩa khác trong thời đại của ông chửi rủa. Trong những năm cuối đời, anh ta bị xét xử vì tội nhận hối lộ và phản quốc, những cáo buộc vô căn cứ chỉ nhằm mục đích làm mất uy tín của anh ta trước công chúng. Thất vọng vì sự tài tình của đồng nghiệp, Scipio rời Rome và rút lui khỏi cuộc sống công cộng.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill1.png'),
                type : 'Chủ động',
                name : 'Quộc sống quân ngũ',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Giảm sát thương của quân đội và tăng sát thương phản công của quân trong 5 giây.',
                update : 'Thiệt hại phải nhận giảm: 10% / 13% / 16% / 20% / 25%\nThưởng sát thương phản công: 10% / 13% / 16% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill2.png') ,
                name : 'Chiến binh bệnh nhân',
                type : 'Bị động',
                rage : '',
                about : 'Khi bị tấn công, Scipio có 10% cơ hội để tăng sức tấn công của quân đội trong 1 giây tiếp theo. Hiệu ứng chỉ có thể kích hoạt cứ sau 5 giây. Scipio có 10% cơ hội chữa lành một lọ thuốc cho các đơn vị bị thương nhẹ của mình khi quân đội của anh ta còn ít hơn 40% số đơn vị còn lại.',
                update : 'Thưởng tấn công: 30% / 40% / 60% / 80% / 100%\nHệ số chữa lành: 150/200/250/350/450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill3.png') ,
                name : 'Kẻ chinh phục châu Phi',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tất cả thiệt hại khi tấn công các thành phố khác của Thống đốc.',
                update : 'Tăng thiệt hại: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill4.png') ,
                name : 'Quý tộc chân chính',
                type : 'Bị động',
                rage : '',
                about : 'Tăng quân đội tối đa.',
                update : 'Tăng quân đội tối đa: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill5.png') ,
                name : 'Sự hủy diệt',
                type : 'tăng skill 1',
                rage : '',
                about : 'Khi bị tấn công, Scipio có 15% cơ hội tăng 100% lực tấn công của quân mình trong 2 giây tiếp theo. Hiệu ứng chỉ có thể kích hoạt cứ sau 5 giây. Scipio có 15% cơ hội chữa lành một phần các đơn vị bị thương nhẹ (Hệ số chữa lành 500) khi quân đội của anh ta còn ít hơn 40% số đơn vị còn lại.',

            },

        ],
        VanMinh : VanMinhImage.Rome,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [],
        partner : [],
        trangBi : ''
    },
    {
        id: 54,
        name : 'Tôn tử', 
        image : require('./../../assets/images/Commander/Epic/SunTzu/SunTzu.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/SunTzu/tuongSunTzu.png'),
        about : 'Tôn Tử là một tướng quân, nhà chiến lược quân sự, nhà văn và nhà triết học người Trung Quốc sống ở thời Đông Chu của Trung Quốc cổ đại. Tôn Tử theo truyền thống được coi là tác giả của Nghệ thuật chiến tranh, một tác phẩm có ảnh hưởng rộng rãi của chiến lược quân sự đã ảnh hưởng đến cả triết lý và tư duy quân sự của phương Tây và Đông Á. Tác phẩm của Tôn Tử đã được ca ngợi và sử dụng trong suốt chiến tranh Đông Á kể từ khi thành phần. Trong thế kỷ XX, Nghệ thuật chiến tranh đã trở nên phổ biến và được sử dụng thực tế trong xã hội phương Tây. Nó tiếp tục ảnh hưởng đến nhiều nỗ lực cạnh tranh ở Đông Á và Thế giới phương Tây bao gồm văn hóa, chính trị, kinh doanh và thể thao, cũng như chiến tranh hiện đại.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill1.png'),
                type : 'Chủ động',
                name : 'Nghệ thuật chiến tranh',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên tối đa 3 mục tiêu trong khu vực hình quạt và gây thêm sát thương cho các mục tiêu này trong lượt tiếp theo. Tôn Tử tăng thêm cơn thịnh nộ cho mỗi mục tiêu bị tấn công bởi các kỹ năng của mình.',
                update : 'Hệ số thiệt hại trực tiếp: 150/210/270/360/450\nHệ số thiệt hại bổ sung: 50/70/90/120/150\nCơn thịnh nộ được khôi phục: 10/20/30/40/50'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill2.png') ,
                name : 'Triết lý chiến tranh',
                type : 'Bị động',
                rage : '',
                about : 'Giảm sát thương của quân đồn trú khi chỉ huy này đang phục vụ với tư cách là chỉ huy đồn trú.',
                update : 'Giảm sát thương cho quân lính đồn trú: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill3.png') ,
                name : 'Chiến lược gia',
                type : 'Bị động',
                rage : '',
                about : 'Giảm thiệt hại quân ta, tăng sức khỏe đơn vị bộ binh.',
                update : 'Thiệt hại quân ta giảm: 4% / 5% / 6% / 8% / 10%\nThưởng cho sức khỏe bộ binh: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill4.png') ,
                name : 'Chiến thuật luôn thay đổi',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương kỹ năng.',
                update : 'Thưởng sát thương kỹ năng: 5% / 8% / 11% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill5.png') ,
                name : 'Sách cổ',
                type : 'tăng skill 1',
                rage : '',
                about : 'Gây sát thương trực tiếp (Hế số sát thương 800) cho tối đa 5 mục tiêu trong khu vực hình quạt và gây thêm sát thương (Damage Factor 200) cho các mục tiêu này trong lượt tiếp theo. Tôn Tử tăng thêm 50 cơn thịnh nộ cho mỗi mục tiêu trúng kỹ năng này.',

            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [],
        partner : [],
        trangBi : 'bộ binh'
    },
]
