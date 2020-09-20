import VanMinhImage from './../database/VanMinh';
import TalentIcon from './../database/Icon';
export default [
    {
        id: 22,
        name : 'Takeda Shingen',
        image : require('./../../assets/images/Commander/Legendary/TakedaShingen/TakedaShingen.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/TakedaShingen/tuongTakedaShingen.png'),
        about : 'Takeda Shingen, tên gốc Takeda Harunobu, (sinh ngày 1 tháng 12 năm 1521, tỉnh Kai [nay là quận Yamanashi], Nhật Bản đã chết ngày 13 tháng 5 năm 1573. Komaba, tỉnh Shlnano [nay là quận Nagano], daimyo (lãnh chúa phong kiến) và một trong những hầu hết các nhà lãnh đạo quân sự nổi tiếng của Nhật Bản, những người đấu tranh để làm chủ vùng đồng bằng Kanté chiến lược ở phía đông trung tâm Honshu trong thời kỳ hỗn loạn của Sengoku ("Chiến quốc") trong thế kỷ 16. Takeda đặc biệt nổi tiếng với hàng loạt trận chiến. (1553-64) với chiến binh nổi tiếng Uesugi Kenshin, người không chỉ nổi tiếng trong biên niên sử của Nhật Bản mà còn được ca ngợi nhiều trong phim truyền hình và văn hóa dân gian Nhật Bản.\nTakeda Harunobu được sinh ra trong tộc Takugo mạnh mẽ của Shugo daimyo (thống đốc quân đội), người lúc đó kiểm soát tỉnh Kai (tỉnh Yamanashi ngày nay), một vùng núi phía tây của đồng bằng Kanto. năm 1541, ông buộc cha mình. Takeda Nobutora, để nghỉ hưu với tư cách là người đứng đầu gia tộc, và Harunobu đảm nhận vị trí đó. Anh sớm bắt đầu mở rộng lãnh địa của gia đình mình về phía bắc vào tỉnh Shinano (quận Nagano ngày nay) và đến các vùng đất khác liền kề với Kai. Ông bước vào chức tư tế vào năm 1551, lúc đó ông đảm nhận tên Phật giáo là Shingen. Tuy nhiên, không có lời thề tôn giáo nào cản trở sự tham gia của ông vào các vấn đề trần tục.\nNgay sau đó, Takeda bắt đầu cuộc đấu tranh với Uesugi để làm chủ Kanto. Mặc dù các trận chiến của họ trong hơn một thập kỷ tương đối thiếu quyết đoán, Takeda đã được công nhận là một trong những nhà lãnh đạo quân sự mạnh nhất ở phía đông ~ centraiJapan. Do đó, anh ta đã đe dọa chiến binh mạnh mẽ Oda Nobunaga, người đang cố gắng thống nhất Nhật Bản dưới sự kiểm soát của anh ta, và với Tokugawa Ieyasu, đồng minh của Oda và người sáng lập Mạc phủ Tokugawa (chế độ độc tài quân sự). Takeda đã đánh bại một đội quân do Tokugawa lãnh đạo gần Hamamatsu (ngày nay thuộc quận Shizuoka) vào tháng 1 năm 1573 và ông đã tiến sâu vào lãnh thổ do Tokugawa kiểm soát trước khi ông qua đời vì bệnh nan y vào cuối năm đó. Con trai và người kế vị của ông, Takeda Katsuyori, đã bị Oda và Tokugawa đánh bại vào đầu năm 15805, do đó chấm dứt quyền lực của gia đình Takeda.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill1.png'),
                type : 'Chủ động',
                name : 'Mạnh mẽ như lửa',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Takeda Shingen hạ gục một mục tiêu duy nhất của kẻ thù trong 4 giây, mỗi lần mục tiêu này nhận được một đòn tấn công bình thường. có 50% cơ hội nhận thêm sát thương tấn công bình thường. Hiệu ứng này chỉ có thể kích hoạt cứ sau 2 giây.',
                update : 'Sát thương bổ sung bình thường cho kẻ thù: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill2.png') ,
                name : 'Nhanh như gió',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công của các đơn vị kỵ binh và cho 10% cơ hội tấn công bình thường để tăng tốc độ diễu hành trong 3 giây.',
                update : 'Thưởng tấn công cho Kỵ binh: 10% / 15% / 20% / 30% / 40%\nTiền thưởng tốc độ hành quân: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill3.png') ,
                name : 'Nhẹ nhàng như rừng',
                type : 'Bị động',
                rage : '',
                about : 'Trong 4 giây sau khi sử dụng Mạnh mẽ như lửa, chữa lành một phần các đơn vị bị thương nhẹ mỗi giây. Khi quân đội do chỉ huy này chỉ chứa các đơn vị kỵ binh, tăng phòng thủ.',
                update : 'Thưởng phòng thủ kỵ binh: 20% / 25% / 30% / 35% / 40%\nHệ số chữa lành: 100/130/160/200/250'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill4.png') ,
                name : 'Bất động như núi',
                type : 'Bị động',
                rage : '',
                about : 'Sát thương kỹ năng chống lại quân đội do Takeda Shingen chỉ huy bị giảm. Khi nhận sát thương, có 10% cơ hội để giảm sát thương tấn công thông thường và sát thương phản công trong 3 giây.',
                update : 'Giảm sát thương kỹ năng: 1% / 2% / 3% / 4% / 5%\nGiảm sát thương tấn công thông thường: 5% / 10% / 15% / 20% / 25%\nGiảm sát thương phản công: 5% / 10% / 15% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill5.png') ,
                name : 'Kōshū-ryū Gungaku',
                type : 'Bị động',
                rage : '',
                about : 'Gây thêm 30% sát thương tấn công bình thường cho kẻ thù đã bị dính kỹ năng Mạnh mẽ như lửa.',

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Versatility,
            TalentIcon.Mobility,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/takeda-field-battle-1024x575.jpg'
            }
        ],
        partner : [
            1,
            
        ],
        partnerEpic : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 1,
        name : 'Attila',
        image : require('./../../assets/images/Commander/Legendary/Attila/Attila.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Attila/tuongAttila.png'),
        about : 'Attila, thường được gọi là Attila the Hun, theo luật lệ của người Hun từ năm 434 cho đến khi qua đời vào tháng 3 năm 453. Ông cũng là thủ lĩnh của một đế chế bộ lạc bao gồm Huns Ostrogoths và Alans trong số những người khác, ở Trung và Đông Âu.\nTrong triều đại của mình, ông là một trong những kẻ thù đáng sợ nhất của Đế chế phương Tây và phương Đông. Anh ta băng qua sông Danube hai lần và cướp bóc Balkan, nhưng không thể lấy Constantinople. Chiến dịch không thành công của ông ở Ba Tư được tiếp nối vào năm 441 bởi một cuộc xâm lược của Đế quốc Đông La Mã (Byzantine), thành công đã thúc đẩy Attila xâm chiếm phương Tây. Ông cũng đã cố gắng chinh phục Roman Gaul (nước Pháp hiện đại), băng qua sông Rhine năm 451 và hành quân đến tận Aurelianum (Mitchéans) trước khi bị đánh bại tại Trận chiến đồng bằng Catlaunian.\nSau đó, ông đã xâm chiếm Ý, tàn phá các tỉnh phía bắc, nhưng không thể chiếm được Rome. Ông đã lên kế hoạch cho các chiến dịch tiếp theo chống lại người La Mã nhưng đã chết vào năm 453. Sau cái chết của Attila, cố vấn thân cận của ông, Ardaric của Gepids, đã lãnh đạo một cuộc nổi dậy của người Đức chống lại sự cai trị của Hunnic, sau đó Đế quốc Hunnic nhanh chóng sụp đổ.',
        skill :[
            {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill1.png'),
                type : 'Chủ động',
                name : 'Thủ lĩnh của người Huns',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Trong 4 giây tiếp theo, tăng sát thương tấn công bình thường và sát thương phản công, và các đòn tấn công bình thường có cơ hội giảm đòn tấn công của kẻ thù trong 2 giây.',
                update : 'Tăng sát thương tấn công bình thường: 10% / 15% / 20% / 25% / 30%\nTăng sát thương phản công: 10% / 15% / 20% / 25% / 30%\nGiảm tấn công của kẻ địch: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill2.png') ,
                name : 'Bao vây Constance',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các đơn vị đồn trú, tăng tất cả lượng sát thương gây ra, và có cơ hội mỗi lượt để giảm phòng thủ của quân đồn trú trong 3 giây.',
                update : 'Thưởng sát thương: 2% / 4% / 6% / 8% / 10%\nGiảm phòng thủ: 5% / 10% / 15% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill3.png') ,
                name : 'Honoria',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các đơn vị đồn trú, tăng tất cả lượng sát thương gây ra, và có cơ hội mỗi lượt để giảm phòng thủ của quân đồn trú trong 3 giây.',
                update : 'Giảm thiệt hại kỹ năng: 3% / 6% / 9% / 12% / 15%\nTăng tốc độ hành quân kỵ binh: 3% / 6% / 9% / 12% / 15%\nTăng tấn công kỵ binh: 20%/ 25% / 30% / 35% / 40%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill4.png') ,
                name : 'Trận chiến đồng bằng Catalaunian',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do Attila chỉ huy chỉ chứa các đơn vị kỵ binh, các cuộc tấn công bình thường có cơ hội tăng lên cho tất cả quân đội của chính anh ta gây sát thương cho 2 lượt tiếp theo; có 25% cơ hội để tăng tất cả lượng sát thương gây ra, và có 25% cơ hội để tăng tất cả lượng sát thương gây ra.',
                update : 'Sát thương thêm (25% Cơ hội): 25% / 30% / 35% / 40% / 50%\nSát thương thêm (25% Cơ hội): 50% / 60% / 70% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill5.png') ,
                name : 'Tai họa của chúa trời',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do Attila chỉ huy chỉ chứa các đơn vị kỵ binh, các cuộc tấn công bình thường có cơ hội tăng lên cho tất cả quân đội của chính anh ta gây sát thương cho 2 lượt tiếp theo; có 25% cơ hội để tăng tất cả lượng sát thương gây ra, và có 25% cơ hội để tăng tất cả lượng sát thương gây ra.',
                update : 'Quân lính do Attila lãnh đạo miễn nhiễm với hiệu ứng Im lặng. Chống lại quân địch với sức mạnh dưới 50%, tăng 20% ​​sát thương. Tăng 50% tốc độ tháng 3 trong 3 giây sau khi rời trận chiến.'
            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [
           {
               uri : 'https://rok.guide/wp-content/uploads/2019/11/attila-talent-tree-1024x575.jpg',

           },
           {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/attila-rally-attack-tree-2-1024x576.png',
            
            },
           
        ],
        partner : [
            22,
            
        ],
        partnerEpic : [
           
        ],
        trangBi : 'kỵ binh'
    },
    {
        id: 2,
        name : 'CaoCao',
        image : require('./../../assets/images/Commander/Legendary/CaoCao/CaoCao.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/CaoCao/tuongCaoCao.png'),
        about : 'Tào Tháo, tên lịch sự là Mạnh Đức, là một lãnh chúa Trung Quốc và là Thủ tướng áp chót của vương triều Đông Hán. Là một trong những nhân vật trung tâm của thời Tam Quốc, ông đặt nền móng cho những gì sẽ trở thành nhà nước của Cao Wei và được truy tặng là "Hoàng đế Wu của Wei". Ông thường được miêu tả là một bạo chúa tàn nhẫn và tàn nhẫn trong văn học tiếp theo; tuy nhiên, ông cũng được ca ngợi là một nhà cai trị tài ba và một thiên tài quân sự, người đối xử với cấp dưới như gia đình ông. Tào Tháo có nhiều thành công với tư cách là thủ tướng Haan, nhưng cách xử lý của ông đối với hoàng đế nhà Hán, ông Liu Xie đã bị chỉ trích nặng nề và dẫn đến một cuộc nội chiến tiếp tục và sau đó leo thang.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill1.png'),
                type : 'Chủ động',
                name : 'Kỵ sĩ rồng',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên mục tiêu và giảm tốc độ tấn công và diễu hành của mục tiêu trong 3 giây.',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400\nGiảm tấn công: 20% / 25% / 30% / 35% / 40%\nGiảm tốc độ hành quân: 5% / 6% / 7% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill2.png') ,
                name : 'Quân đội Thanh Châu',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương tấn công quân man rợ.',
                update : 'Thưởng tấn công người man rợ: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill3.png') ,
                name : 'Hiệp sĩ hổ',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các đơn vị đồn trú, tăng tất cả lượng sát thương gây ra, và có cơ hội mỗi lượt để giảm phòng thủ của quân đồn trú trong 3 giây.',
                update : 'Thưởng tốc độ hành quân của kỵ binh: 3% / 4,5% / 6% / 8% / 10%\nThưởng tấn công Kỵ binh: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill4.png') ,
                name : 'Tham vọng cao cả',
                type : 'Bị động',
                rage : '',
                about : 'Các cuộc tấn công thông thường của quân lính có 10% cơ hội chữa lành một phần các đơn vị bị thương nhẹ, khôi phục cơn thịnh nộ và tăng tốc độ diễu hành của quân đội thêm 20% trong 3 giây. Hiệu ứng chỉ có thể kích hoạt cứ sau 2 giây.',
                update : 'Thưởng hệ số chữa bệnh: 500/600/70/800/1000\nCơn thịnh nộ được khôi phục: 50/60/70/80/100'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill5.png') ,
                name : 'Hoàng đế Ngô của Ngụy',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công kỵ binh thêm 25%, giảm 10% quân phòng thủ',
                update : 'Tăng tấn công kỵ binh thêm 25%, giảm 10% quân phòng thủ'
            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Peacekeeping,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/cao-cao-fatest-1024x740.jpg'
            }
        ],
        partner : [
            11,18,
            
        ],
        partnerEpic : [
           1,2,3,52
        ],
        trangBi : 'kỵ binh'
    },
    {
        id: 3,
        name : 'Alexander',
        image : require('./../../assets/images/Commander/Legendary/Alex/Alex.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Alex/tuongAlex.png'),
        about : 'Alexander III của georgon, thường được gọi là Alexander Đại đế, là một vị vua (basileus) của vương quốc Hy Lạp cổ đại của Hy Lạp và là thành viên của triều đại Argead. Ông sinh ra ở Pella vào năm 356 trước Công nguyên và kế vị cha là Philip II lên ngôi ở tuổi 20. Ông dành phần lớn thời gian cầm quyền cho một chiến dịch quân sự chưa từng có ở châu Á và đông bắc châu Phi, và đến năm ba mươi tuổi, ông đã có đã tạo ra một trong những đế chế lớn nhất của thế giới cổ đại, trải dài từ Hy Lạp đến Tây Bắc Ấn Độ. Ông đã bất bại trong trận chiến và được coi là một trong những chỉ huy quân sự thành công nhất trong lịch sử.\nKhi còn trẻ, Alexander được Aristotle dạy dỗ cho đến năm 16 tuổi. Sau khi Philip bị ám sát vào năm 336 trước Công nguyên, ông đã kế vị cha mình lên ngôi và kế thừa một vương quốc mạnh và một đội quân giàu kinh nghiệm. Alexander được trao tặng tướng quân Hy Lạp và sử dụng thẩm quyền này để khởi động dự án pan-Hellenic của cha mình để lãnh đạo người Hy Lạp trong cuộc chinh phạt Ba Tư. Năm 334 trước Công nguyên, ông xâm chiếm Đế quốc Achaemenid (Đế chế Ba Tư) và bắt đầu một loạt các chiến dịch kéo dài 10 năm. Sau cuộc chinh phạt Anatolia, Alexander đã phá vỡ sức mạnh của Ba Tư trong một loạt các trận chiến quyết định, đáng chú ý nhất là các trận chiến của Issus và Gaugamela. Sau đó, ông đã lật đổ Vua Ba Tư Darius III và chinh phục toàn bộ Đế chế Achaemenid. Vào thời điểm đó, đế chế của ông trải dài từ biển Adriatic đến sông Indus.\nAlexander nỗ lực để đến "tận cùng của thế giới và Biển ngoài cùng" và xâm chiếm Ấn Độ vào năm 326 trước Công nguyên, giành chiến thắng quan trọng trước Pauravas trong Trận chiến Hydaspes. Cuối cùng anh ta quay trở lại theo yêu cầu của những người lính nhớ nhà, chết ở Babylon vào năm 323 trước Công nguyên, thành phố mà anh ta dự định thành lập thủ đô của mình, mà không thực hiện một loạt các chiến dịch theo kế hoạch sẽ bắt đầu bằng một cuộc xâm lược Ả Rập. Trong những năm sau cái chết của ông, một loạt các cuộc nội chiến đã xé tan đế chế của ông, dẫn đến việc thành lập một số quốc gia do Diadochi cai trị: Những vị tướng và người thừa kế còn sống sót của Alexandre.\nDi sản của Alexandre bao gồm sự khuếch tán văn hóa và chủ nghĩa đồng bộ hóa mà các cuộc chinh phạt của ông đã gây ra, như Phật giáo Greco. Ông thành lập một số hai mươi thành phố mang tên mình, nổi bật nhất là Alexandria ở Ai Cập. Sự định cư của Alexanders về thực dân Hy Lạp và sự lan rộng của văn hóa Hy Lạp ở phía đông dẫn đến một nền văn minh Hy Lạp mới, những khía cạnh vẫn còn thể hiện rõ trong các truyền thống của Đế quốc Byzantine vào giữa thế kỷ 15 sau Công nguyên và sự hiện diện của những người nói tiếng Hy Lạp ở trung tâm và viễn đông Anatolia cho đến những năm 1920. Alexander trở thành huyền thoại như một anh hùng cổ điển trong khuôn khổ Achilles, và anh ấy nổi bật trong lịch sử và truyền thống thần thoại của cả hai nền văn hóa Hy Lạp và phi Hy Lạp. Anh ta trở thành thước đo để chống lại các nhà lãnh đạo quân sự, và các học viện quân sự trên khắp thế giới vẫn dạy các chiến thuật của anh ta. Ông thường được xếp hạng trong số những người có ảnh hưởng nhất trong lịch sử.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill1.png'),
                type : 'Chủ động',
                name : 'Khiên của nhà vua',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Alexander Đại đế dựng lên một chiếc khiên mạnh mẽ trong 4 giây và đồng thời dựng lên một chiếc khiên nhỏ hơn, nhỏ hơn cho đội quân thân thiện gần đó với tỷ lệ quân thấp nhất còn lại trong 2 giây (quân đội của riêng Alexander Alexander không thể có được tấm khiên này).',
                update : 'Khiên (Bản thân): 600/700/800/1000/1200\nKhiên (Đồng minh): 200/300/400/500/600'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill2.png') ,
                name : 'Phí dẫn dắt',
                type : 'Bị động',
                rage : '',
                about : 'Khi thiệt hại đến sẽ được giảm trên bản đồ, thay thế giảm thiệt hại. Mỗi đòn tấn công bình thường chống lại 10% cơ hội gây thêm sát thương cũng như giảm hiệu ứng hồi máu mục tiêu trong 5 giây.',
                update : 'Hệ số thiệt hại trực tiếp: 800/1000/1200/1400/1700\nGiảm hiệu quả chữa bệnh: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill3.png') ,
                name : 'Tư lệnh tiền tuyến',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tốc độ hành quân và tấn công của đơn vị bộ binh trong khi quân đội đang ở trên bản đồ.',
                update : 'Phần thưởng tốc độ hành quân của bộ binh: 10% / 15% / 20% / 25% / 30%\nThưởng tấn công bộ binh: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill4.png') ,
                name : 'Trận chiến Chaeronea',
                type : 'Bị động',
                rage : '',
                about : 'Tấn công được tăng lên khi lá chắn rơi xuống. Khi lá chắn này được kích hoạt, phần thưởng sẽ thay đổi thành phòng thủ.',
                update : 'Thưởng tấn công: 20% / 25% / 30% / 35% / 40%\nThưởng phòng thủ: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill5.png') ,
                name : 'Con trai của Amun',
                type : 'Tăng cường : Kỹ năng 1',
                rage : '',
                about : 'Ngay lập tức đưa ra một tấm khiên có thể hấp thụ một lượng sát thương lớn (Damage Factor 1200) trong 4 giây. Đồng thời, Alexander dựng lên một tấm khiên thứ hai, nhỏ hơn cho đội quân thân thiện gần đó với tỷ lệ quân còn lại thấp nhất (Hệ số sát thương 600) trong 2 giây, và tăng sát thương gây ra theo thời gian của kẻ thù gần đó (tối đa 3 mục tiêu) 30% trong 4 giây.',
                update : ''
            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Versatility,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/alexander-field-battle-rally-talent-tree-1024x473.png'
            }
        ],
        partner : [
            5,19,25
            
        ],
        partnerEpic : [
           4,54
        ],
        trangBi : 'bộ binh'
    },
    {
        id: 4,
        name : 'Charlemagne',
        image : require('./../../assets/images/Commander/Legendary/Charlemagne/Charlemagne.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Charlemagne/tuongCharlemagne.png'),
        about : 'Charlemagne, còn được gọi là Charles Đại đế, (2 tháng 4 năm 742 - 28 tháng 1 năm 814), thống nhất phần lớn miền tây và trung tâm châu Âu trong cái được gọi là Đế quốc Carolingian, đế chế lớn đầu tiên ở Tây Âu kể từ khi Tây La Mã sụp đổ Đế chế.\nCharlemagne là con trai cả của Pepin the Short và Betrada of Laon. Ông trở thành vua vào năm 768 sau cái chết xa hơn của mình, ban đầu là người đồng cai trị với anh trai Carloman I. Cái chết bất ngờ của Carloman vào tháng 12 năm 771 khiến Charlemagne trở thành người thống trị duy nhất của Vương quốc Frankish. Ông theo bước chân của người cha này, bảo vệ Giáo hội Công giáo La Mã, chinh phục người Oliver và vận động chống lại người Tây Ban Nha Hồi giáo và người Saxon. Ông được trao vương miện "Hoàng đế của người La Mã" bởi Giáo hoàng Leo III vào ngày Giáng sinh năm 800.\nSự ổn định của đế chế Charlemagne đã sinh ra một thời đại thịnh vượng và phát triển được gọi là Phục hưng Carolingian. Trong thời gian này, Charlemagne đã tập hợp nhiều học giả và nghệ sĩ vĩ đại nhất châu Âu đến tòa án của mình và thiết lập một hệ thống giáo dục cho giai cấp thống trị dựa trên những người thuộc Đế chế La Mã cũ. Khoảng thời gian này có lẽ được nhớ đến nhiều nhất cho sự đột biến trong việc phục hồi và tạo ra kiến ​​trúc hoành tráng, nhà thờ lớn và nhà thờ, và cho một lượng lớn nghệ thuật cổ xưa được bảo tồn bởi đế chế của Charlemagne.\nTrong khi Charlemagne được ca ngợi khắp châu Âu và bởi Giáo hoàng là Hoàng đế Romand thực sự, điều này đã tạo ra một sự ly dị với Đế quốc Byzantine (còn gọi là Đế chế Đông La Mã), và là một trong những lý do cho sự chia rẽ của Rome và Constantinople, tạo ra cái gọi là ngày nay các nhà thờ Công giáo và Đông chính thống.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill1.png'),
                type : 'Chủ động',
                name : 'Đại bàng Jupiter',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp vào một mục tiêu.',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill2.png') ,
                name : 'Ngôi nhà hạnh phúc',
                type : 'Bị động',
                rage : '',
                about : 'Trong khi trên bản đồ, tất cả các binh sĩ dưới quyền chỉ huy này có 10% cơ hội để có được một lá chắn khi họ bị tấn công. Tấm khiên này tồn tại trong 4 giây và có thể gây ra một lượng sát thương lớn.',
                update : 'Hệ số thiệt hại trực tiếp: 500/600/70/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill3.png') ,
                name : 'Pataum',
                type : 'Bị động',
                rage : '',
                about : 'Khi chỉ huy này bắt đầu một cuộc tấn công Rally, tấn công và phòng thủ của tất cả các đội quân tập hợp.',
                update : 'Thưởng tấn công / phòng thủ của quân đội Rallied: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill4.png') ,
                name : 'Tham vọng cao cả',
                type : 'Bị động',
                rage : '',
                about : 'Đối với mỗi mức giảm 10% trong sức mạnh của quân đội, Charlemagne của kỹ năng thiệt hại tăng. Khi quân đội này đã giảm xuống dưới 70 sức mạnh%, tổn thương kỹ năng Charlemagne sẽ được tăng lên.',
                update : 'Tăng khả năng thiệt hại (Mỗi 10%): 1% / 2% / 3% / 4% / 5%\nKỹ năng thiệt hại khi tấn công các thành phố tăng (Mỗi 10%): 2% / 3% / 4% / 5% / 7%\ntăng khả năng thiệt hại (max): 3% / 6% / 9% / 12% / 15%\nKỹ năng thiệt hại khi tấn công các thành phố tăng (tối đa): 6% / 9% / 12% / 15% / 21%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill5.png') ,
                name : 'Phục hưng Carolingian',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công một thành phố, ít hơn 10% quân đội của bạn sẽ chết, và thay vào đó sẽ bị thương nặng.',
                update : 'Khi tấn công một thành phố, ít hơn 10% quân đội của bạn sẽ chết, và thay vào đó sẽ bị thương nặng.'
            },

        ],
        VanMinh : VanMinhImage.France,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/charlemagne-skill-build-1024x574.jpg'
            }
        ],
        partner : [
            15,17,13
            
        ],
        partnerEpic : [
            53,51
        ],
        trangBi : ''
    },
    {
        id: 5,
        name : 'Charles Martel',
        image : require('./../../assets/images/Commander/Legendary/CharlesMartel/CharlesMartel.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/CharlesMartel/tuongCharlesMartel.png'),
        about : 'Charles Martel là một chính khách và nhà lãnh đạo quân sự người Frank, với tư cách là Công tước và Hoàng tử của Franks và Thị trưởng của Cung điện, là người cai trị trên thực tế của Francia từ năm 718 cho đến khi ông qua đời. Năm 732, quân đội của Umayyad Caliphate do Al Ghhafiqiii lãnh đạo đã gặp các lực lượng Frankish và Burgundian dưới quyền Charles ở một khu vực giữa các thành phố Tours và Poitiers, dẫn đến một chiến thắng Frankish mang tính quyết định, mang tính lịch sử được gọi là Trận chiến cuối cùng của cuộc xâm lược Ả Rập vĩ đại của Pháp ", một chiến thắng quân sự được gọi là" xuất sắc "về phía Charles. Charles cũng được coi là một nhân vật sáng lập của thời trung cổ châu Âu. Có kỹ năng là một quản trị viên cũng như một chiến binh, anh ta được ghi nhận với vai trò chủ yếu trong các trách nhiệm mới nổi của các hiệp sĩ của tòa án, và do đó trong sự phát triển của hệ thống phong kiến ​​Frankish.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill1.png'),
                type : 'Chủ động',
                name : 'Khiên của người Pháp',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Charles kích hoạt một lá chắn có thể hấp thụ sát thương lớn trong 4 giây tiếp theo. Cũng tăng sát thương của quân đội trong khi khiên hoạt động.',
                update : 'Hệ số thiệt hại trực tiếp: 600/700/800/1000/1200\nPhần thưởng thiệt hại: 10% / 14% / 18% / 24% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill2.png') ,
                name : 'Bộ binh nặng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sức mạnh và phòng thủ của các đơn vị bộ binh.',
                update : 'Thưởng phòng thủ Bộ binh: 5% / 7% / 9% / 12% / 15%\nThưởng sức khỏe bộ binh: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill3.png') ,
                name : 'Vua bất khuất',
                type : 'Bị động',
                rage : '',
                about : 'Tăng khả năng phòng thủ của tháp canh và sát thương đồn trú khi chỉ huy này đang phục vụ như một chỉ huy đồn trú.',
                update : 'Tiền thưởng phòng thủ tháp canh: 2% / 4% / 6% / 8% / 10%\nTiền thưởng tấn công Garrison: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill4.png') ,
                name : 'Phản công của Martel',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương phản công của quân đội.',
                update : 'Thưởng sát thương phản công: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill5.png') ,
                name : 'Tăng từ đống tro tàn',
                type : 'Tăng skill 2',
                rage : '',
                about : 'Tăng 20% ​​phòng thủ cho bộ binh, 20% máu và tốc độ hành quân thêm 20%.',
                update : 'Tăng 20% ​​phòng thủ cho bộ binh, 20% máu và tốc độ hành quân thêm 20%.'
            },

        ],
        VanMinh : VanMinhImage.France,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Defense,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/charles-martel-field-battle-talent-tree-1-1024x575.png'
            }
        ],
        partner : [
            19,3,7,16
            
        ],
        partnerEpic : [
            4,54
        ],
        trangBi : 'bộ binh'
    },
    {
        id: 6,
        name : 'Cleopatra VII',
        image : require('./../../assets/images/Commander/Legendary/CleopatraVII/CleopatraVII.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/CleopatraVII/tuongCleopatraVII.png'),
        about : 'Cleopatra VII Philopator là người cai trị hoạt động cuối cùng của Vương quốc Ptolemaic Ai Cập, trên danh nghĩa còn sống sót với tư cách là pharaoh bởi con trai bà Caesarion. Cô cũng là một nhà ngoại giao, chỉ huy hải quân, polyglot và tác giả y tế. Là một thành viên của triều đại Ptolemy, cô là hậu duệ của người sáng lập ra nó, Ptolemy I Soter, một vị tướng Hy Lạp người Macedonia và là bạn đồng hành của Alexander Đại đế. Sau cái chết của Cleoptra, Ai Cập trở thành một tỉnh của Đế chế La Mã, đánh dấu sự kết thúc của thời kỳ Hy Lạp kéo dài kể từ triều đại của Alexander. Ngôn ngữ mẹ đẻ của cô là tiếng Hy Lạp Koine và cô là người cai trị Ptolemaic đầu tiên học ngôn ngữ Ai Cập.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill1.png'),
                type : 'Chủ động',
                name : 'Nữ hoàng của các vị vua',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Chữa lành một số đơn vị bị thương nhẹ trong quân đội của bạn và quân đội thân thiện gần đó và tăng khả năng phòng thủ của những đội quân này trong 2 giây tiếp theo.',
                update : 'Hệ số chữa lành: 150/200/250/300/400\nThưởng phòng thủ: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill2.png') ,
                name : 'Kết thúc Ptolemy',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tốc độ thu gom đá; tăng tốc độ thu gom lương thực, gỗ và vàng.',
                update : 'Tốc độ thu thập (đá): 5% / 10% / 15% / 20% / 30%\nTốc độ thu thập (Tài nguyên khác): 3% / 6% / 10% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill3.png') ,
                name : 'Vẻ đẹp và trí tuệ',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tải trọng quân đội.',
                update : 'Tăng tải trọng: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill4.png') ,
                name : 'Pharaoh cuối cùng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công và phòng thủ đơn vị bao vây khi tập hợp tại các điểm tài nguyên trên bản đồ.',
                update : 'Thưởng Tấn công đơn vị bao vây: 10% / 20% / 30% / 40% / 50%\nThưởng phòng thủ đơn vị bao vây: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill5.png') ,
                name : 'Quà tặng của sông Nile',
                type : 'Bị động',
                rage : '',
                about : 'Cleopatra nhận thêm Gói tài nguyên sau khi cô kết thúc việc thu thập tại các điểm tài nguyên trên bản đồ.',
                update : 'Cleopatra nhận thêm Gói tài nguyên sau khi cô kết thúc việc thu thập tại các điểm tài nguyên trên bản đồ.'
            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/cleopatra-cavalry-trap-1024x558.jpg',
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/cleopatra-support-build-1024x558.jpg',
            }
        ],
        partner : [
           21
            
        ],
        partnerEpic : [
            26
        ],
        trangBi : 'thu gom'
    },
    {
        id: 7,
        name : 'Constantine I',
        image : require('./../../assets/images/Commander/Legendary/Constantine/Constantine.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Constantine/tuongConstantine.png'),
        about : 'Constantine Đại đế, còn được gọi là Constantine I hoặc Saint Constantine, là một Hoàng đế La Mã có nguồn gốc Illyrian và Hy Lạp. Là hoàng đế, Constantine ban hành các cải cách hành chính, tài chính, xã hội và quân sự để củng cố đế chế. Ông tái cơ cấu chính phủ, tách các cơ quan dân sự và quân sự. Để chống lạm phát, ông đã giới thiệu solidus, một đồng tiền vàng mới trở thành tiêu chuẩn cho tiền tệ Byzantine và châu Âu trong hơn một nghìn năm. Quân đội La Mã được tổ chức lại bao gồm các đơn vị chiến trường cơ động và binh lính đồn trú có khả năng chống lại các mối đe dọa nội bộ và các cuộc xâm lược man rợ.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill1.png'),
                type : 'Chủ động',
                name : 'Đạo luật của Milan',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Trong 5 giây tiếp theo, giảm đòn tấn công của mục tiêu và tăng giảm sát thương cho quân đội của chỉ huy và quân đội thân thiện gần đó.',
                update : 'Giảm tấn công: 20% / 25% / 30% / 35% / 40%\nThiệt hại được thực hiện giảm: 3% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill2.png') ,
                name : 'Lòng trung thành',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sức khỏe cho các đơn vị bộ binh.',
                update : 'Thưởng cho sức khỏe bộ binh: 15% / 20% / 25% / 30% / 40%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill3.png') ,
                name : 'Bế tắc',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sự tấn công của đồn trú và tấn công của tháp canh khi chỉ huy này đang phục vụ như là chỉ huy đồn trú.',
                update : 'Tiền thưởng tấn công đồn trú: 3% / 4% / 6% / 8% / 10%\nThưởng tấn công của Tháp Canh: 3% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill4.png') ,
                name : 'Thánh giá',
                type : 'Bị động',
                rage : '',
                about : 'Ôn quân đội do chỉ huy này chỉ huy đã giảm tới 50% sức mạnh, quân đội sẽ nhận được hiệu quả chữa bệnh mạnh mẽ. Hiệu ứng này có thể kích hoạt tối đa một lần mỗi giờ sau khi quân đội rời khỏi thành phố.',
                update : 'Hệ số chữa bệnh: 7500/9000/1300/1500'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill5.png') ,
                name : 'Augustus đệ nhất',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công quân đội thêm 15% và phòng thủ thêm 5%.',
                update : 'Tăng tấn công quân đội thêm 15% và phòng thủ thêm 5%.'
            },

        ],
        VanMinh : VanMinhImage.Bi,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Support,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/Constantine-1024x577.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/Constantine_2-1024x577.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/constantine-garrison-tree-2-1024x577.png'
        }],
        partner : [
            5,19,16
        ],
        partnerEpic : [
            4,54
        ],
        trangBi : 'bộ binh'
    },
    {
        id: 8,
        name : 'Edward',
        image : require('./../../assets/images/Commander/Legendary/Edward/Edward.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Edward/tuongEdward.png'),
        about : 'Edward xứ Woodstock, được lịch sử gọi là Hoàng tử đen, là con trai cả của Vua Edward III của Anh, và là một trong những chỉ huy người Anh thành công nhất trong Chiến tranh Trăm năm. Anh ta chết trước cha mình, và vì vậy trong khi anh ta chưa bao giờ trở thành vua, Edward vẫn được những người cùng thời coi là một hình mẫu của tinh thần hiệp sĩ và là một trong những hiệp sĩ vĩ đại nhất trong thời đại của anh ta.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill1.png'),
                type : 'Chủ động',
                name : 'Danh dự của cung thủ',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lớn cho một mục tiêu. Sau khi được sử dụng, sẽ giảm cơn thịnh nộ của quân đội Edward xuống 300 (không thể giảm xuống dưới 0 cơn thịnh nộ).',
                update : 'Hệ số thiệt hại trực tiếp: 1500/1700/1900/2100/2500\nHệ số thiệt hại (Khi chỉ huy phụ): 750/850/950/950/1250'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill2.png') ,
                name : 'Cuộc thập tự chinh báo thù',
                type : 'Bị động',
                rage : '',
                about : 'tăng sức khỏe và tốc độ diễu hành của các đơn vị cung thủ trong khi quân đội đang ở trên bản đồ.',
                update : 'Phần thưởng sức khỏe của cung thủ: 10% / 15% / 20% / 25% / 30%\nThưởng tốc độ diễu hành của cung thủ: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill3.png') ,
                name : 'Chiến dịch của Crécy',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do chỉ huy này chỉ chứa các đơn vị cung thủ, sẽ tăng sát thương kỹ năng và tăng sát thương cho các đơn vị bộ binh của các đơn vị cung thủ.',
                update : 'Thưởng sát thương kỹ năng: 5% / 10% / 15% / 20% / 25%\nThiệt hại cho các đơn vị bộ binh tăng thêm: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill4.png') ,
                name : 'Cuộc phục kích của Limoges',
                type : 'Bị động',
                rage : '',
                about : 'When the army led by this commander is at 70% strength or higher, increases the attack of archer units and decreases defence by 10%.',
                update : 'Thưởng Tấn công cung thủ: 15% / 20% / 25% / 30% / 40%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill5.png') ,
                name : 'Tất cả hoặc không có gì',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương thông thường và sát thương phản công thêm 50% trong 2 giây sau khi sử dụng một kỹ năng.',
                update : 'Tăng sát thương thông thường và sát thương phản công thêm 50% trong 2 giây sau khi sử dụng một kỹ năng.'
            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Versatility,
            TalentIcon.Skill,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/edward-rally-attack-tree-1024x576.png',
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/07/edward-of-woodstock-skill-tree-2-1024x576.png',
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/07/edward-of-woodstock-skill-tree-1-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/07/edward-of-woodstock-skill-tree-3-1024x576.png'
        }
],
        partner : [
            23,25
        ],
        partnerEpic : [
            5,16
        ],
        trangBi : 'cung thủ'
    },
    {
        id: 9,
        name : 'El Cid',
        image : require('./../../assets/images/Commander/Legendary/ElCid/ElCid.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/ElCid/tuongElCid.png'),
        about : 'Rodrigo Díaz de Vivar là một nhà quý tộc và lãnh đạo quân sự của Castillian ở Tây Ban Nha thời trung cổ. Người Moors gọi ông là El Cid, có nghĩa là Chúa (có lẽ từ tiếng Ả Rập gốc al-Sayyid, tiếng Ả Rập). Năm 1904, sau khi Valentia sụp đổ, El Cid đã thành lập một công quốc độc lập trên bờ biển Địa Trung Hải của Tây Ban Nha. Ông cai trị một xã hội đa nguyên với sự ủng hộ phổ biến của các Kitô hữu và Hồi giáo. Nhân vật El Cid là nguồn gốc cho nhiều tác phẩm văn học, bắt đầu với Canter del Mio Cid, một bài thơ sử thi từ thế kỷ 12, đưa ra một câu chuyện hư cấu một phần về cuộc đời ông. Bài thơ này, cùng với các tác phẩm tương tự sau này như Mộcedades de Rodrigo, đã góp phần miêu tả El Cid như một anh hùng hào hiệp của Reconquista, biến anh thành một nhân vật huyền thoại ở Tây Ban Nha.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill1.png'),
                type : 'Chủ động',
                name : 'Chiến binh nổi tiếng',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên mục tiêu và vô hiệu hóa các đòn tấn công và kỹ năng chủ động thông thường của mục tiêu trong 1 giây.',
                update : 'Hệ số thiệt hại trực tiếp: 500/600/70/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill2.png') ,
                name : 'Bài thơ của El Cid',
                type : 'Bị động',
                rage : '',
                about : 'Quân đội của El Cid có 10% cơ hội gây thêm sát thương cho mục tiêu.',
                update : 'Hệ số thiệt hại bổ sung: 500/600/70/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill3.png') ,
                name : 'Người bảo vệ của Valencia',
                type : 'Bị động',
                rage : '',
                about : 'Tăng phòng thủ và tốc độ diễu hành của các đơn vị cung thủ. ',
                update : 'Thưởng phòng thủ cung thủ: 10% / 12% / 14% / 16% / 20%\nThưởng tốc độ hành quân của cung thủ: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill4.png') ,
                name : 'Không chịu khuất phục',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội của Cid đã bị giảm xuống dưới 50% số đơn vị của anh ta, làm tăng thiệt hại của tất cả quân đội và tốc độ diễu hành của tất cả quân đội. Hiệu ứng kéo dài cho đến khi quân đội bị giải tán.',
                update : 'Thưởng thiệt hại: 5% / 10% / 15% / 20% / 25%\nThưởng tốc độ hành quân: 5% / 10% / 15% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill5.png') ,
                name : 'Mất kiểm soát',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương gây ra cho các đơn vị bộ binh bằng 5% đơn vị cung thủ, và giảm 5% sát thương từ các đơn vị bộ binh của các đơn vị cung thủ xuống 5%.',

            },

        ],
        VanMinh : VanMinhImage.Span,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Versatility,
            TalentIcon.Skill,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/el-cid-archer-build-1024x558.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/el-cid-skill-tree-1024x558.jpg'
        }],
        partner : [
            25
        ],
        partnerEpic : [
            5,16
        ],
        trangBi : 'cung thủ'
    },
    {
        id: 10,
        name : 'Frederick I',
        image : require('./../../assets/images/Commander/Legendary/Frederick/Frederick.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Frederick/tuongFrederick.png'),
        about : 'Frederick I, còn được gọi là Frederick Barbarossa, là Hoàng đế La Mã thần thánh từ năm 1155 cho đến khi qua đời. Các nhà sử học coi ông trong số các hoàng đế thời trung cổ vĩ đại nhất của Đế chế La Mã. Anh ta kết hợp những phẩm chất khiến anh ta trở nên gần như siêu phàm với những người cùng thời: tham vọng, kỹ năng tổ chức, sự nhạy bén trong chiến trường và quan điểm chính trị của anh ta. Trong số những đóng góp của ông cho xã hội và văn hóa Trung Âu bao gồm việc tái lập Corpus Juris Civilis, hay luật pháp La Mã, làm đối trọng với quyền lực của giáo hoàng thống trị các quốc gia Đức kể từ khi kết thúc Cuộc tranh cãi Đầu tư. Frederick chết năm 1190 tại Tiểu Á khi đang lãnh đạo một đội quân trong cuộc Thập tự chinh thứ ba.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill1.png'),
                type : 'Chủ động',
                name : 'Barbarossa',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Trong 3 giây tiếp theo, tất cả các đòn tấn công có 80% cơ hội gây thêm sát thương cho mục tiêu.',
                update : 'Hệ số thiệt hại trực tiếp:  400 / 500 / 600 / 700 / 800'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill2.png') ,
                name : 'Không bao giờ bỏ cuộc',
                type : 'Bị động',
                rage : '',
                about : 'Đòn tấn công thông thường của quân lính có 10% cơ hội chữa lành một phần của các đơn vị bị thương nhẹ. Hiệu ứng này chỉ có thể kích hoạt cứ sau 5 giây.',
                update : 'Hệ số chữa lành: 500/600/700/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill3.png') ,
                name : 'Cuộc xâm lăng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tất cả thiệt hại khi tấn công các thành phố khác của Thống đốc.',
                update : 'Thưởng tấn công bộ binh: 2% / 4% / 6% / 8% / 10% '
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill4.png') ,
                name : 'Vua nước Đức',
                type : 'Bị động',
                rage : '',
                about : 'Tăng quân tối đa.',
                update : 'Tăng quân đội tối đa: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill5.png') ,
                name : 'Barbarossa tức giận',
                type : 'Bị động',
                rage : '',
                about : 'Trong 3 giây tiếp theo, tất cả các đòn tấn công có 100% cơ hội gây thêm sát thương (Damage Factor 800) cho mục tiêu.',

            },

        ],
        VanMinh : VanMinhImage.Germany,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [{
            uri : 'https://rok.guide/wp-content/uploads/2019/11/Fredrick-Field-Battle-tree-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/frederick-1-skilled-leadership.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/uncle-fred-ultimate-build-1024x677.jpg'
        }],
        partner : [
            17,15
        ],
        partnerEpic : [
            51,1
        ],
        trangBi : ''
    },
    {
        id: 11,
        name : 'Genghis Khan',
        image : require('./../../assets/images/Commander/Legendary/Khan/Khan.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Khan/tuongKhan.png'),
        about : 'Genghis Khans, Temüjin sinh ra, là người sáng lập ra đế chế tiếp giáp lớn nhất trong lịch sử - Đế chế Mông Cổ. Cha của anh, người đứng đầu một bộ lạc Mông Cổ du mục, đã bị Tatars giết khi Temüjin chỉ mới 9 tuổi và gia đình anh bị gia tộc của họ bỏ rơi. Sự gia tăng quyền lực của Temüjin bắt đầu ngay sau khi một pháp sư tên Kokochu tuyên bố rằng anh ta đã được bầu trời xanh vĩnh cửu chọn để thống trị thế giới. Đến năm 1206, ông đã hợp nhất tất cả các bộ lạc gãy xương sống trên vùng đồng bằng Mông Cổ và đảm nhận một tước hiệu mới, là Genghis Khan Hồi, biểu thị vị trí của ông là người cai trị toàn cầu. Thành Cát Tư Hãn nhanh chóng bắt tay vào một loạt các cuộc xâm lược thành công vào Trung Quốc và Trung Á. Ông là một nhà lãnh đạo quân sự tài giỏi và một chính trị gia sắc sảo, cho phép ông củng cố những vùng đất mà ông đã chinh phục dưới sự lãnh đạo của Mông Cổ. Thành Cát Tư Hãn qua đời năm 1227, sau khi chinh phục vương triều Tây Xia. Theo truyền thuyết, thi thể của ông đã được đưa trở lại Mông Cổ bởi một người hộ tống tang lễ gắn kết đã giết chết bất cứ ai và bất cứ thứ gì băng qua đường trên đường đến đích của họ. Sau khi chôn cất xong, người hộ tống sau đó đóng dấu lên khu chôn cất, trồng cây để che giấu địa điểm và cuối cùng đã tự sát để đảm bảo bí mật sẽ không bao giờ được tiết lộ.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill1.png'),
                type : 'Chủ động',
                name : 'Người được chọn',
                rage : 'Sức mạnh phi thường: 950',
                about : 'Tấn công một mục tiêu duy nhất, gây sát thương lớn (Damage Factor 800).',
                update : 'Hệ số thiệt hại trực tiếp:  800 / 1000 / 1200 / 1400 / 1700'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill2.png') ,
                name : 'Lốc xoáy của thảo nguyên',
                type : 'Bị động',
                rage : '',
                about : 'Giảm chi phí cơn thịnh nộ của khả năng xuống 20 và tăng 3% tốc độ diễu hành của kỵ binh. Khi quân đội do chỉ huy này bị tấn công, phần thưởng tốc độ diễu hành này sẽ bị mất và tốc độ diễu hành của quân đội sẽ giảm thêm 30%.',
                update : 'Giảm yêu cầu cơn thịnh nộ: 20/40/60/80/100\nThưởng tốc độ hành quân của kỵ binh: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill3.png') ,
                name : 'Đế quốc du mục',
                type : 'Bị động',
                rage : '',
                about : 'Trong khi quân đội do chỉ huy này chỉ huy có sức mạnh hơn 70% và chỉ chứa các đơn vị kỵ binh, tăng 10% sát thương gây ra.',
                update : 'Thưởng thiệt hại: 10% / 15% / 20% / 25% / 30% '
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill4.png') ,
                name : 'Lối sống quân sự',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do chỉ huy này chỉ chứa các đơn vị kỵ binh và đã giảm sức mạnh xuống dưới 50%, tăng 10% sát thương kỹ năng và tăng thêm 5 cơn thịnh nộ khi bị tấn công.',
                update : 'Phần thưởng sát thương kỹ năng: 10% / 15% / 20% / 25% / 30%\nCơn thịnh nộ được khôi phục: 5/10/15/20/25'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill5.png') ,
                name : 'Không đứng thứ hai',
                type : 'Bị động',
                rage : '',
                about : 'Nếu kỹ năng "Người được chọn" được sử dụng trong khi quân đội do chỉ huy này chỉ chứa các đơn vị kỵ binh, sẽ cho 30% cơ hội rằng kỹ năng "Người được chọn" (Cấp 5) có thể được sử dụng lại ngay lập tức.',

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Versatility,
            TalentIcon.Skill,
        ],
        talentTree : [  {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/ghenghis-khan-talent-tree-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/genghis-khan-talent-tree-1024x576.png'
        },],
        partner : [
            2,20,18,
        ],
        partnerEpic : [
            52,1,2
        ],
        trangBi : 'kỵ binh'
    },
    {
        id: 12,
        name : 'Guan Yu',
        image : require('./../../assets/images/Commander/Legendary/GuanYu/GuanYu.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/GuanYu/tuongGuanYu.png'),
        about : 'Quan Vũ, tên lịch sự Yunchang, là một vị tướng phục vụ dưới thời lãnh chúa Lưu Bị trong triều đại Đông Hán cuối Trung Quốc. Cùng với Zhang Fei, anh chia sẻ mối quan hệ anh em với Liu Bei và đồng hành cùng anh trong hầu hết các hoạt động khai thác ban đầu. Quan Vũ đã đóng một vai trò quan trọng trong các sự kiện dẫn đến sự kết thúc của triều đại nhà Hán và thành lập nhà nước của Shu Bei là Shu Han trong thời kỳ Tam Quốc. Trong khi anh ta được nhớ đến vì lòng trung thành của anh ta đối với Lưu Bị, anh ta cũng được biết đến vì đã trả ơn lòng tốt của Tào Tháo bằng cách giết chết Yan Liang, một vị tướng dưới quyền đối thủ của Cao Cao Yuan Shao, trong Trận chiến Boma. Sau khi Liu Bei giành được quyền kiểm soát tỉnh Yi vào năm 214, Quan Vũ vẫn ở lại tỉnh Jing để cai quản và bảo vệ khu vực này trong khoảng bảy năm. Vào năm 219, khi ông đang chiến đấu chống lại lực lượng của Tào Tháo trong Trận Fancheng, đồng minh Sun Quan của Liu Be đã phá vỡ liên minh Sun Sun Liu và phái tướng Lü Meng của mình đi chinh phục lãnh thổ của Liu Bei ở tỉnh Jing. Vào lúc Quan Vũ phát hiện ra sự mất mát của tỉnh Jing sau thất bại của mình tại Fancheng, thì đã quá muộn. Sau đó anh ta bị bắt bởi một cuộc phục kích của lực lượng của Sun Quan và bị xử tử.\nCuộc đời của Quan Vũ đã được tôn sùng và những thành tựu của ông được tôn vinh đến mức sau khi ông qua đời, ông được thần thánh hóa trong triều đại nhà Tùy. Qua nhiều thế hệ kể chuyện, đỉnh cao là tiểu thuyết lịch sử thế kỷ 14 Lãng mạn của ba vương quốc, những việc làm và phẩm chất đạo đức của ông đã được chú trọng, khiến cho Quan Vũ trở thành một trong những mô thức trung thành và chính nghĩa phổ biến nhất ở Đông Á. Ngày nay, ông vẫn được nhiều người Trung Quốc tôn thờ ở Trung Quốc đại lục, Đài Loan, Tây Tạng, Hồng Kông và trong số nhiều cộng đồng người Hoa ở nước ngoài. Trong sự sùng bái tôn giáo, anh ta được tôn kính gọi là "Divus Guan" (Guān Dì) hoặc "Lord Guan" (Guān Gōng). Ông là một vị thần được tôn thờ trong tôn giáo dân gian Trung Quốc, Nho giáo phổ biến, Đạo giáo và Phật giáo Trung Quốc, và những ngôi đền nhỏ đối với ông gần như có mặt ở các cửa hàng và nhà hàng truyền thống của Trung Quốc. Quê hương của anh, Yuncheng cũng đặt tên sân bay theo tên anh.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill1.png'),
                type : 'Chủ động',
                name : 'Thánh chiến',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên tối đa 3 kẻ địch trong khu vực hình quạt và làm im lặng các mục tiêu này trong 3 giây (sát thương gây ra cho tất cả các mục tiêu sẽ giảm 15% cho mỗi kẻ địch bổ sung). Khi Quan Vũ đang phục vụ với tư cách là chỉ huy phụ, hãy giảm Yếu tố sát thương.',
                update : 'Hệ số thiệt hại (Khi chỉ huy phụ): 550/650/750/850/1000\nHệ số thiệt hại trực tiếp: 1100/213/1500/1700/2000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill2.png') ,
                name : 'Ngũ hổ tướng',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công đồn trú, tăng sát thương tấn công bình thường. Các cuộc tấn công thông thường có 10% cơ hội để giảm một cuộc tấn công mục tiêu trong 3 giây.',
                update : 'Phần thưởng sát thương tấn công thông thường: 3% / 6% / 9% / 12% / 15%\nGiảm tấn công: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill3.png') ,
                name : 'Trận thảm sát của Hoa Hùng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công và tốc độ hành quân của các đơn vị bộ binh. Khi rời khỏi trận chiến, Quan Vũ chữa lành một phần các đơn vị bị thương nhẹ.',
                update : 'Thưởng tấn công bộ binh: 10% / 15% / 20% / 25% / 30%\nPhần thưởng tốc độ hành quân của bộ binh: 3% / 6% / 9% / 12% / 15%\nYếu tố chữa bệnh: 500/600/700/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill4.png') ,
                name : 'Thanh long yển nguyệt đao',
                type : 'Bị động',
                rage : '',
                about : 'Khi kỹ năng "Thánh chiến" chỉ bắn trúng 1 mục tiêu, có 50% cơ hội gây thêm sát thương cho mục tiêu. Khi kỹ năng tấn công từ 2 mục tiêu trở lên, có 50% cơ hội gây thêm sát thương cho mục tiêu hiện tại.',
                update : 'Hệ số thiệt hại bổ sung (1 mục tiêu): 600/700/800/900/1000\nHệ số thiệt hại bổ sung (Mục tiêu 2+): 800/900/1000/1200/1400'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill5.png') ,
                name : 'Kỹ mã độc hành',
                type : 'Bị động',
                rage : '',
                about : 'Bất cứ khi nào Quan Vũ có được khiên, anh ta cũng tăng 15% sát thương kỹ năng chủ động trong 3 giây. Bất cứ khi nào Quan Vũ rời khỏi một cấu trúc, anh ta tăng 100% tốc độ diễu hành trong 3 giây.',

            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/Guan-Yu-Field-Battle-1024x684.jpg'
        },],
        partner : [
            16,3
        ],
        partnerEpic : [
            54,4
        ],
        trangBi : 'bộ binh'
    },
    {
        id: 13,
        name : 'Hannibal Barca',
        image : require('./../../assets/images/Commander/Legendary/HannibalBarca/HannibalBarca.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/HannibalBarca/tuongHannibalBarca.png'),
        about : 'Hannibal Barca là một vị tướng Carthage, được coi là một trong những chỉ huy quân sự vĩ đại nhất trong lịch sử. Cha của anh Hamilcar Barca là chỉ huy Carthage hàng đầu trong Chiến tranh Punic lần thứ nhất. Các em trai của ông là Mago và Hasdrubal, và ông là anh rể của Hasdrubal Hội chợ. Hannibal sống trong thời kỳ căng thẳng lớn ở lưu vực phía tây Địa Trung Hải khi Cộng hòa La Mã thiết lập quyền lực tối cao đối với các cường quốc như Carthage cổ đại, Etruscans, Samnites và vua Hy Lạp của Hy Lạp. Một trong những thành tựu nổi tiếng nhất của ông là sự bùng nổ của Chiến tranh Punic lần thứ hai khi ông hành quân một đội quân bao gồm những con voi chiến từ Iberia qua Pyrenees và dãy Alps vào Ý. Trong vài năm đầu tiên ở Ý, anh đã giành được ba chiến thắng kịch tính - Trebia, Hồ Trasimene và Cannae, trong đó anh nổi bật nhờ khả năng xác định điểm mạnh và điểm yếu tương ứng của đối thủ và lên kế hoạch cho trận chiến - và chiến thắng nhiều đồng minh của Rome. Hannibal chiếm phần lớn nước Ý trong 15 năm nhưng không thể hành quân đến Rome. Một kẻ thù phản công xâm chiếm Bắc Phi đã buộc anh phải trở về Carthage, nơi anh bị Scipio Africanus đánh bại một cách quyết đoán trong Trận chiến Zama.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill1.png'),
                type : 'Chủ động',
                name : 'Voi chiến',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp cho một mục tiêu sau đó giảm sát thương và phòng thủ của mục tiêu trong 5 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 150/200/250/300/400\n Giảm sát thương / Giảm phòng thủ: 10% / 13% / 16% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill2.png') ,
                name : 'Chiến thuật bao bọc',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội của Hannibal chứa 2 loại đơn vị khác nhau, tất cả thiệt hại sẽ tăng lên. Nếu đội quân này chứa 3 loại khác nhau, tất cả thiệt hại thậm chí còn tăng thêm. (Chiến binh và kiếm sĩ là cùng loại đơn vị, trong khi chiến binh và người trượt băng là loại đơn vị khác nhau.)',
                update : 'Thưởng thiệt hại (2 loại đơn vị): 1% / 2% / 3% / 4% / 5%\n Thưởng thiệt hại  (3 loại đơn vị): 5% / 6% / 7% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill3.png') ,
                name : 'Cuộc bao vây',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các đơn vị đồn trú của các Thống đốc khác, Hannibal có 10% cơ hội chữa lành một số đơn vị bị thương nhẹ.',
                update : 'Hệ số chữa lành: 500/600/700/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill4.png') ,
                name : 'Đoàn thám hiểm',
                type : 'Bị động',
                rage : '',
                about : 'Tăng năng lực đoàn quân. Khi chiến đấu bên ngoài lãnh thổ liên minh, tăng sát thương cho tất cả quân đội của Hannibal trong 3 giây sau khi sử dụng một kỹ năng.',
                update : 'Tăng quân đội tối đa: 3% / 4,5% / 6% / 8% / 10%\nThưởng thiệt hại: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill5.png') ,
                name : 'Voi chiến tấn công',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương trực tiếp (Hệ số sát thương 400) cho một mục tiêu sau đó gây thêm sát thương (Hệ số sát thương 300) cho 3 mục tiêu trong một đòn tấn công về phía trước ở lượt tiếp theo và giảm 25% sát thương của 3 mục tiêu và giảm 25% trong 3 giây .',

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [{
            uri : 'https://rok.guide/wp-content/uploads/2019/11/hannibal-barca-field-battles-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/hannibal-barca-rally-attack-tree-1024x576.png'
        }],
        partner : [
            15,10
        ],
        partnerEpic : [
            51,
        ],
        trangBi : ''
    },
    {
        id: 14,
        name : 'Ishida Mitsunari',
        image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/IshidaMitsunari.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/IshidaMitsunari/tuongIShidaMitsunari.png'),
        about : 'Ishida Mitsunari là một samurai Nhật Bản và chỉ huy quân sự của thời kỳ cuối sengoku của Nhật Bản. Ông có lẽ được nhớ đến nhiều nhất với tư cách là chỉ huy của quân đội phương Tây trong Trận Sekigahara sau thời kỳ Azuchi-Momoyama của thế kỷ 16. Ông cũng được biết đến bởi tên tòa án của mình, Jibu-no-shō (治 部 少).\nMitsunari đã gặp Toyotomi Hideyoshi khi người còn trẻ và người sau là daimyō của Nagahama. Khi Hideyoshi tham gia vào một chiến dịch ở vùng Chūgoku, Mitsunari đã hỗ trợ lãnh chúa của mình trong các cuộc tấn công chống lại các lâu đài như Lâu đài Tottori và Lâu đài Takamatsu (ở Okayama ngày nay).\nSau khi Hideyoshi nắm quyền, Mitsunari được biết đến như một nhà quản lý tài chính tài năng nhờ kiến ​​thức và kỹ năng tính toán. Từ năm 1585 trở đi, anh ta là quản trị viên của Sakai, một vai trò mà anh ta đã đảm nhận cùng với anh trai của mình là Ishida Masazumi. Ông được bổ nhiệm là một trong năm bugyō, hoặc quản trị viên hàng đầu của chính phủ Hideyoshi.\nMitsunari là một nhà lãnh đạo của các quan chức trong chính phủ của Hideyoshi, và được biết đến với tính cách không khoan nhượng. Mặc dù anh ta có nhiều bạn bè, anh ta có mối quan hệ xấu với một số daimyou được biết đến như những chiến binh giỏi, bao gồm cả người thân của Hideyoshi là Kuroda Nagamasa và Hachisuka Iemasa. Ngoài ra, chiến binh trẻ Kobayakawa Hideaki đã nảy sinh ác cảm với Mitsunari do những tin đồn được truyền bá bởi Tokugawa Ieyasu. Đến cuối đời Taiko Hideyoshi, Hideyoshi ra lệnh xử tử người thừa kế Hidetsugu và xử tử gia đình, để lại người thừa kế mới là đứa trẻ cực kỳ trẻ trung Toyotomi Hideyori. Sau cái chết của Hideyoshi, các cuộc xung đột tại tòa án trở nên tồi tệ hơn. Điểm mấu chốt của cuộc xung đột là câu hỏi liệu Tokugawa Ieyasu có thể dựa vào như một người ủng hộ chính phủ Toyotomi hay không, mà lãnh chúa danh nghĩa vẫn còn là một đứa trẻ, với sự lãnh đạo thực sự rơi vào một hội đồng nhiếp chính. Sau cái chết của Maeda Toshiie "trung lập" đáng kính năm 1599, cuộc xung đột đã nổ ra, với Mitsunari thành lập một liên minh của những người trung thành với người thừa kế trẻ của Toyotomi để chống lại Tokugawa. Sự hỗ trợ của Mitsunari phần lớn đến từ phía nam và phía tây Nhật Bản, với sự bổ sung của tộc Uesugi ở phía bắc, trong khi sự hỗ trợ của Tokugawa đến từ miền trung và miền bắc Nhật Bản, nhưng có ảnh hưởng và đe dọa đối với một số lãnh chúa phương Tây. Người đứng đầu của liên minh phương Tây là Mōri Terumoto, nhưng Mōri vẫn cố thủ trong lâu đài của mình; lãnh đạo rơi vào Mitsunari trong lĩnh vực này. Năm 1600, anh bao vây lâu đài Fushimi trước khi tiến hành xung đột trực tiếp với liên minh của Tokugawa tại Sekigahara. Một số lãnh chúa ở lại trung lập, theo dõi trận chiến từ xa, không muốn tham gia vào phe thua cuộc. Lực lượng của Tokugawa đã giành được lợi thế trong trận chiến, đặc biệt là với sự phản bội của Kobayakawa Hideaki về phía mình, và giành chiến thắng trong trận chiến.\nSau thất bại, Mitsunari tìm cách trốn thoát nhưng bị dân làng bắt. Anh ta bị chặt đầu ở Kyoto. Các daimyō khác của quân đội phương Tây, như Konishi Yukinaga và Ankokuji Ekei cũng bị xử tử. Sau khi hành quyết, đầu của anh ta, bị cắt đứt khỏi cơ thể, được đặt trên một giá đỡ cho tất cả mọi người ở Kyoto nhìn thấy. Hài cốt của anh được chôn cất tại Sangen-in, một ngôi đền phụ của Daitoku-ji, Kyoto.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill1.png'),
                type : 'Chủ động',
                name : 'Trận chiến Sekigahara',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Trong 3 giây tiếp theo, tăng sức tấn công của tất cả các đội quân do Ishida Mitsunari dẫn đầu, và tăng tốc độ cơn thịnh nộ đạt được.',
                update : 'Thưởng tấn công: 10% / 15% / 20% / 25% / 30%\n Tăng tốc độ của cơn thịnh nộ đạt được: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill2.png') ,
                name : 'Go-Bugyõ',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tốc độ thu thập thực phẩm, tăng thu thập gỗ và đá. ',
                update : 'Tăng tốc độ thu thập (Thực phẩm): 5% / 10% / 15% / 20% / 30%\n Tăng tốc độ thu thập (Tài nguyên khác): 3% / 5% / 10% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill3.png') ,
                name : 'Taiko-kenchi',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tải trọng quân đội do Ishida Mitsunari chỉ huy.',
                update : 'Tăng tải trọng quân đội: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill4.png') ,
                name : 'Không thể thiếu',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sức khỏe quân đội. Khi phục vụ như là chỉ huy phụ, tăng sát thương kỹ năng chủ động.',
                update : 'Thưởng sức khỏe: 5% / 7% / 9% / 12% / 15%\nThưởng sát thương kỹ năng: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill5.png') ,
                name : '3 Tách trà',
                type : 'Bị động',
                rage : '',
                about : 'Các đòn tấn công thông thường của quân đội của Ishida Mitsunari có 10% cơ hội chữa lành một phần các đơn vị bị thương nhẹ (Hệ số chữa bệnh 500), hiệu ứng này chỉ có thể kích hoạt cứ sau 3 giây.',

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Support,
        ],
        talentTree : [{
            uri : 'https://riseofkingdomsguides.com/wp-content/uploads/2020/01/Ishida-Mitsunari-.jpg'
        }],
        partner : [
            6,21
        ],
        partnerEpic : [
            26
        ],
        trangBi : 'thu gom'
    },
    {
        id: 15,
        name : 'Julius Caesar',
        image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/JuliusCaesar.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/JuliusCaesar/tuongJuliusCaesar.png'),
        about : 'Gaius Julius Caesar là một chính trị gia và tướng quân La Mã, người đóng vai trò phê bình trong các sự kiện dẫn đến sự trỗi dậy của Đế chế La Mã. Caesar vươn lên trở thành một trong những chính trị gia quyền lực nhất thông qua một số thành tựu, đáng chú ý là những chiến thắng của ông trong Chiến tranh Gallic. Sau khi nắm quyền kiểm soát chính phủ, Caesar bắt đầu một chương trình cải cách xã hội và chính phủ, bao gồm cả việc tạo ra Lịch Julian. Những cải cách dân túy và độc đoán của ông đã chọc giận giới tinh hoa, những người bắt đầu âm mưu chống lại ông. Vào Ides của ngày 44 tháng 3 trước Công nguyên, Caesar bị ám sát bởi một nhóm thượng nghị sĩ nổi loạn do Gaius Cassius Longinus, Marcus Junius Brutus và Decimus Junius Brutus lãnh đạo.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill1.png'),
                type : 'Chủ động',
                name : 'Quân đội bất khuất',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Trong 5 giây tiếp theo, tăng sức tấn công và phòng thủ của quân đội và tăng tất cả sát thương.',
                update : 'Thưởng Tấn công / Phòng thủ: 10% / 12% / 14% / 16% / 20%\nThưởng thiệt hại: 10% / 14% / 18% / 24% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill2.png') ,
                name : 'Julius thần thánh',
                type : 'Bị động',
                rage : '',
                about : 'Giảm sát thương của quân đội Caesar. Khi quân đội của Caesar đã giảm xuống 60% hoặc ít hơn các đơn vị của anh ta, anh ta có 10% cơ hội để giảm thêm thiệt hại trong 3 giây tiếp theo mỗi khi quân đội của anh ta bị tấn công. Hiệu ứng chỉ có thể kích hoạt cứ sau 5 giây.',
                update : 'Thiệt hại được thực hiện giảm: 3% / 4,5% / 6% / 8% / 10%\nGiảm sát thương bổ sung: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill3.png') ,
                name : 'Kẻ giết thành phố',
                type : 'Bị động',
                rage : '',
                about : 'Caesar có 10% cơ hội để giảm phòng thủ của kẻ thù mỗi lượt khi tấn công các thành phố khác của Thống đốc. Hiệu ứng kéo dài trong 3 giây.',
                update : 'Giảm phòng thủ: 5% / 10% / 15% / 20% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill4.png') ,
                name : 'Người sáng lập',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sức chứa tối đa cho quân đội.',
                update : 'Tăng sức chứa tối đa quân đội: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill5.png') ,
                name : 'Đi trước thời đại',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương trực tiếp (Hệ số sát thương 400) cho mục tiêu, và trong 5 giây tiếp theo, tăng 20% ​​tấn công và phòng thủ của quân đội và tăng 30% sát thương.',

            },

        ],
        VanMinh : VanMinhImage.Rome,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-3-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-2-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-1-1024x576.png'
        }],
        partner : [
            13,10
        ],
        partnerEpic : [
            51,53,1
        ],
        trangBi : ''
    },
    {
        id: 16,
        name : 'Leonidas I',
        image : require('./../../assets/images/Commander/Legendary/Leonidas/Leonidas.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Leonidas/tuongLeonidas.png'),
        about : 'Leonidas I là một vị vua chiến binh của thành phố Sparta của Hy Lạp và là người thứ 17 của dòng Agiad; một triều đại tuyên bố dòng dõi từ vị thần trong thần thoại Heracles và Cadmus. Ông là chồng của Gorgo, con gái của Nữ hoàng I của Sparta. Leonidas đã có một sự tham gia đáng chú ý trong Chiến tranh Ba Tư lần thứ hai, nơi ông đã dẫn dắt các lực lượng Hy Lạp đồng minh đến một vị trí cuối cùng tại Trận Thermopylae (480 trước Công nguyên) trong khi cố gắng bảo vệ đường chuyền từ quân đội Ba Tư xâm lược; ông đi vào huyền thoại với tư cách là thủ lĩnh của 300 người Sparta.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill1.png'),
                type : 'Chủ động',
                name : 'Vua Sparta',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Tăng sức khỏe cho quân đội do Leonidas I dẫn đầu trong 3 giây. Gây sát thương lên tới 3 mục tiêu trong khu vực hình quạt. Các mục tiêu dưới tác dụng của Im lặng hoặc Giảm tấn công sẽ nhận thêm 50% sát thương.',
                update : 'Thưởng sức khỏe: 10% / 15% / 20% / 25% / 30%\nHệ số thiệt hại trực tiếp: 200/300/400/500/600'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill2.png') ,
                name : 'Ba trăm chiến binh',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do chỉ huy này chỉ chứa các đơn vị bộ binh, tăng phòng thủ và tăng tốc độ cơn thịnh nộ đã đạt được.',
                update : 'Thưởng phòng thủ: 10% / 15% / 20% / 25% / 30\nTốc độ của cơn thịnh nộ đạt được: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill3.png') ,
                name : 'Sự hy sinh đáng kính',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do chỉ huy này chỉ huy đã giảm xuống dưới 50% sức mạnh, có cơ hội để có được một lá chắn khi bị tấn công kéo dài trong 3 giây. Trong khi khiên kéo dài, tăng 3% đòn tấn công của bộ binh bộ binh.',
                update : 'Khiên (bản thân): 600/650/700/700/800\nThưởng tấn công: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill4.png') ,
                name : 'Con trai của Sư tử',
                type : 'Bị động',
                rage : '',
                about : 'Trong khi trên bản đồ, đòn tấn công của Leonidas I có 25% cơ hội tăng khả năng gây sát thương bằng quân đội của mình, tồn tại trong 5 giây và dồn tới 4 lần.',
                update : 'Thưởng thiệt hại: 5% / 6% / 7% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill5.png') ,
                name : 'Trận chiến Thermopylae',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do chỉ huy này chỉ huy đã giảm xuống dưới 10% sức mạnh, tăng tất cả sát thương gây ra thêm 400% và tăng giảm 50% sát thương, kéo dài trong 10 giây. Hiệu ứng này chỉ có thể kích hoạt một lần mỗi giờ sau khi quân đội rời khỏi thành phố.',

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Versatility,
            TalentIcon.Defense,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/Leonidas-Field-Battle-1024x576.jpg'
        }],
        partner : [
            12,5,19,3
        ],
        partnerEpic : [
            54,4,53
        ],
        trangBi : 'bộ binh'
    },
    {
        id: 17,
        name : 'Mehmed II',
        image : require('./../../assets/images/Commander/Legendary/Mehmed/Mehmed.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Mehmed/tuongMehmed.png'),
        about : 'Mehmed II, thường được gọi là Người chinh phục Hồi giáo là một người Thổ Nhĩ Kỳ đã chinh phục Constantinople và tàn nhẫn củng cố và mở rộng Đế chế Ottoman bằng một cuộc thập tự chinh quân sự vào Châu Á và Châu Âu.\nMehmed đã chinh phục thủ đô Byzantine của Constantinople vào năm 1453, sau đó xây dựng lại thành thủ đô Istanbul thịnh vượng của Istanbul. Mục tiêu tiếp theo của anh là tạo ra một đế chế thế giới với sự chinh phục, thống nhất Anatolia và tiến vào Đông Nam Âu xa tận phía tây như Bosnia. Ông cũng đã phát triển quân đoàn bộ binh Janissary - những chiến binh Cơ đốc trẻ tuổi, những người được trả lương để giữ cho họ trung thành với người sultan.\nMehmed là người ủng hộ tự do tôn giáo và nhấn mạnh tầm quan trọng của công lý. Trong triều đại của ông, toán học, thiên văn học và thần học Hồi giáo đạt đến đỉnh cao của họ trong Ottoman. Ngày nay, Mehmed được coi là một anh hùng ở Thổ Nhĩ Kỳ và một phần của thế giới Hồi giáo rộng lớn hơn.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill1.png'),
                type : 'Chủ động',
                name : 'Đại bác Ottoman',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lên kẻ thù trong khu vực hình quạt hướng về phía trước (tối đa 5 mục tiêu). Kỹ năng này gây thêm sát thương cho các đồn bốt thành phố và tháp canh.',
                update : 'Hệ số thiệt hại trực tiếp: 450/600/70/950/1150\nHệ số thiệt hại bổ sung: 300/400/500/600/700'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill2.png') ,
                name : 'Chúa đất và biển',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công quân đội và tăng sát thương kỹ năng.',
                update : 'Thưởng tấn công: 8% / 10% / 12% / 16% / 20%\nThưởng sát thương kỹ năng: 8% / 10% / 12% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill3.png') ,
                name : 'Niềm tin',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các thành phố, các cuộc tấn công thông thường có 10% cơ hội gây thêm sát thương cho quân đồn trú.',
                update : 'Hệ số thiệt hại bổ sung: 500/600/70/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill4.png') ,
                name : 'Vua hiền triết',
                type : 'Bị động',
                rage : '',
                about : 'Tăng năng lực đoàn quân. Khi chỉ huy này phát động một cuộc biểu tình, tăng năng lực quân đội tập hợp.',
                update : 'Tăng quân tập hợp: 2% / 4% / 6% / 8% / 10%\nThưởng giới hạn quân đội tăng: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill5.png') ,
                name : 'Bom tấn Orban',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương (Damage Factor 1350) cho kẻ địch trong khu vực hình quạt hướng về phía trước (tối đa 5 mục tiêu). Kỹ năng này gây thêm sát thương cho các đồn bốt và tháp canh của thành phố (Damage Factor 800), và có 50% cơ hội để gây ra một đợt sát thương thứ hai cho các đồn bốt và tháp canh của thành phố (Damage Factor 500).',

            },

        ],
        VanMinh : VanMinhImage.Arabia,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [  {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/mehmed-ii-pvp-buildings-build-1024x570.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/mehmed-ii-pvp-map-build-1024x570.jpg'
        }],
        partner : [
            13,10,15
        ],
        partnerEpic : [
            51,53,1
        ],
        trangBi : ''
    },
    {
        id: 18,
        name : 'Minamoto',
        image : require('./../../assets/images/Commander/Legendary/Minamoto/Minamoto.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Minamoto/tuongMina.png'),
        about : 'Minamoto no Yoshitsune là một chỉ huy quân sự của bộ tộc Minamoto của Nhật Bản vào cuối thời Heian và đầu Kamakura. Trong cuộc chiến Genpei, anh ta đã lãnh đạo một loạt các trận chiến lật đổ chi nhánh Ise-Heishi của tộc Taira, giúp anh em cùng cha khác mẹ Yoritoomo củng cố quyền lực. Vào năm 1189, Fujiwara no Yasuhira, con trai của một đồng minh đáng tin cậy, sợ áp lực từ Yoriomo, đã phản bội Yoshitsune, xung quanh nơi cư trú Koromogawa-no-tachi của anh ta với quân đội của mình, đánh bại những người giữ chân anh ta và buộc Yoshitsune phải phạm tội. Yoshitsune được coi là một trong những chiến binh vĩ đại nhất và nổi tiếng nhất trong thời đại của ông, và là một trong những chiến binh samurai nổi tiếng nhất trong lịch sử Nhật Bản.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill1.png'),
                type : 'Chủ động',
                name : 'Kyohachiryu',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên mục tiêu và có 50% cơ hội gây thêm sát thương cho mục tiêu mỗi giây trong 2 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400\nThiệt hại bổ sung: 200/280/360/480/600'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill2.png') ,
                name : 'Thử nghiệm ở Kurama-dera',
                type : 'Bị động',
                rage : '',
                about : 'Tăng đơn vị kỵ binh tốc độ hành quân và tấn công.',
                update : 'Thưởng tốc độ hành quân của kỵ binh: 3% / 4,5% / 6% / 8% / 10%\nThưởng tấn công cho Kỵ binh: 10% / 12% / 14% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill3.png') ,
                name : 'Bậc thầy của Kendo',
                type : 'Bị động',
                rage : '',
                about : 'Gây thiệt hại thêm cho người man rợ',
                update : 'Thiệt hại tiền thưởng cho người man rợ: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill4.png') ,
                name : 'Lãnh chúa',
                type : 'Bị động',
                rage : '',
                about : 'Đội quân tấn công bình thường có 10% cơ hội tăng sát thương của mục tiêu trong 3 giây tiếp theo. Hiệu ứng chỉ có thể kích hoạt cứ sau 5 giây..',
                update : 'Thiệt hại tăng thêm: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill5.png') ,
                name : 'Kyohachiryu Kiwami',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương trực tiếp (Hệ số sát thương 1400) cho mục tiêu và có 75% cơ hội gây thêm sát thương (Hệ số sát thương 600) cho mục tiêu mỗi giây trong 2 giây tiếp theo.',

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Peacekeeping,
            TalentIcon.Skill,
        ],
        talentTree : [{
            uri : 'https://rok.guide/wp-content/uploads/2019/06/minamoto-no-yoshitsune-talent-1024x576.png'
        }],
        partner : [
            2,11
        ],
        partnerEpic : [
            1,2,3,52
        ],
        trangBi : 'kỵ binh'
    },
    {
        id: 19,
        name : 'Richard I',
        image : require('./../../assets/images/Commander/Legendary/Richard/Richard.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Richard/tuongRichard.png'),
        about : 'Richard I là Vua Anh từ ngày 6 tháng 7 năm 1189 cho đến khi qua đời. Ông được biết đến với cái tên Richard the Lionheart vì danh tiếng của ông là một nhà lãnh đạo quân sự và chiến binh vĩ đại. Richard là một chỉ huy trung tâm của Kitô giáo trong cuộc Thập tự chinh thứ ba, lãnh đạo chiến dịch sau sự ra đi của Philip II của Pháp và giành được những chiến thắng đáng kể trước người đồng đạo Hồi giáo, Saladin. Thay vì coi vương quốc của mình như một trách nhiệm đòi hỏi sự hiện diện của anh ta với tư cách là người cai trị, Richard đã được coi là thích sử dụng nó chỉ như một nguồn thu để hỗ trợ quân đội của mình. Tuy nhiên, anh ta được các đối tượng của mình coi là một anh hùng ngoan đạo. Ông vẫn là một trong số ít các vị vua của nước Anh được nhớ đến bởi văn bia của mình, chứ không phải là số vương giả, và là một nhân vật biểu tượng lâu dài cả ở Anh và Pháp',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill1.png'),
                type : 'Chủ động',
                name : 'Linh hồn của thập tự quân',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Chữa lành một số đơn vị bị thương nhẹ trong quân đội của Richard. Thêm một debuff cho tối đa 5 mục tiêu trong khu vực hình quạt. (Hiệu ứng Debuff giảm sát thương gây ra và tốc độ diễu hành trong 2 giây.)',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400\nGiảm sát thương: 10% / 15% / 20% / 25% / 30%\nGiảm tốc độ hành quân: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill2.png') ,
                name : 'Tinh thần hiệp sĩ',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương giảm quân và sát thương phản công. Hiệu ứng này áp dụng cho tất cả các đội quân đồn trú khi chỉ huy này đang phục vụ như một chỉ huy đồn trú.',
                update : 'Thiệt hại đã giảm: 5% / 7% / 9% / 12% / 15%\nThưởng phản công: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill3.png') ,
                name : 'Trái tim sư tử',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sự tấn công của các đơn vị bộ binh và phòng thủ các đơn vị bộ binh.',
                update : 'Thưởng tấn công bộ binh: 5% / 7% / 9% / 12% / 15%\nThưởng phòng thủ cho Bộ binh: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill4.png') ,
                name : 'Trận chiến cứng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng hiệu ứng hồi máu mà quân đội nhận được và giảm sát thương của tháp canh.',
                update : 'Tăng cường hiệu quả chữa lành: 10% / 15% / 20% / 25% / 30%\nThiệt hại cho các tháp canh giảm: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill5.png') ,
                name : 'Sư tử tàn bạo',
                type : 'Bị động',
                rage : '',
                about : 'Giảm 5% sát thương và giảm 2% lực sát thương cho các đơn vị kỵ binh bằng các đơn vị bộ binh thêm 2%. Ngoài ra, cứ sau 10 giây, giảm 50% tốc độ diễu hành mục tiêu trong 5 giây.',

            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Defense,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/richard-flag-defense-talent-build-1024x498.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/richard-i-garrison-talent-1024x570.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/09/richard-i-infantry-talent-1024x570.jpg'
        }],
        partner : [
            5,3,16,12,25,26
        ],
        partnerEpic : [
            54,4,53,3,26
        ],
        trangBi : 'bộ binh'
    },
    {
        id: 20,
        name : 'Saladin',
        image : require('./../../assets/images/Commander/Legendary/Saladin/Saladin.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Saladin/tuongSaladin.png'),
        about : 'Saladin là vị vua Hồi giáo đầu tiên của Ai Cập, Syria, Yemen, Palestine, người sáng lập vương triều Ayyūbid và là một trong những anh hùng Hồi giáo nổi tiếng nhất mọi thời đại. Saladin đã chiến đấu chống lại Thập tự quân Kitô giáo, đáng chú ý nhất là chống lại Richard the Lionheart trong cuộc Thập tự chinh thứ ba. Năm 1187, Saladin đã gây ra một thất bại nặng nề đối với quân đội của Vương quốc Jerusalem và chiếm lại thành phố linh thiêng đã bị chiếm giữ bởi Franks trong gần chín thập kỷ.\nTrái ngược với cuộc tắm máu mà các cuộc thập tự chinh đã gây ra ở Jerusalem, Saladin đã hành động rất hào hùng đối với thành phố cư dân Kitô giáo và người Do Thái. Ông cho phép phụ nữ, người già và người nghèo rời đi mà không phải trả tiền chuộc. Saladin đã được nhiều người coi là lý tưởng của một vị Vua chiến binh: khủng khiếp trong trận chiến nhưng vẫn hào phóng với kẻ thù của mình. Mặc dù có niềm tin khác nhau, Saladin rất được Richard kính trọng, người đã ca ngợi ông là nhà lãnh đạo vĩ đại và quyền lực nhất trong thế giới Hồi giáo.\nNăm 1192, Saladin và Richard đã ký một thỏa thuận ngừng bắn. Saladin qua đời vào năm sau - sau khi trao phần lớn tài sản cá nhân của mình cho các đối tượng của mình - nhưng triều đại Ayyubid vẫn tiếp tục cai trị ở Ai Cập và Syria trong nhiều thế hệ. Được tôn sùng rộng rãi bởi những người ngưỡng mộ Hồi giáo và kẻ thù Kitô giáo, huyền thoại Saladin vẫn còn tồn tại đến ngày nay.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill1.png'),
                type : 'Chủ động',
                name : 'Móc sắc',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên mục tiêu, sau đó giảm tốc độ diễu hành của mục tiêu và giảm hiệu ứng hồi máu nhận được trong 5 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400\nGiảm tốc độ hành quân: 10% / 15% / 20% / 25% / 30%\nGiảm hiệu quả chữa lành: 20% / 25% / 30% / 35% / 40%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill2.png') ,
                name : 'Ghulams',
                type : 'Bị động',
                rage : '',
                about : 'Tăng phòng thủ tấn công của các đơn vị kỵ binh và tốc độ diễu hành.',
                update : 'Thưởng phòng thủ kỵ binh: 8% / 10% / 12% / 16% / 20%\nThưởng phòng thủ cho Kỵ binh: 8% / 10% / 12% / 16% / 20%\nThưởng tốc độ hành quân của kỵ binh: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill3.png') ,
                name : 'Kết nối đức tin',
                type : 'Bị động',
                rage : '',
                about : 'Giảm sát thương kỹ năng lấy từ kẻ thù và giảm sát thương phản công. ',
                update : 'Giảm sát thương kỹ năng: 10% / 15% / 20% / 25% / 30%\nGiảm sát thương phản công: 8% / 10% / 12% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill4.png') ,
                name : 'Lòng khoan dung',
                type : 'Bị động',
                rage : '',
                about : 'Tăng thiệt hại gây ra cho các đồn bốt thành phố. Tuy nhiên, quân đội của Saladin không thể cướp bóc tài nguyên khi tấn công các thành phố của các thống đốc khác.',
                update : 'Thưởng thiệt hại: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill5.png') ,
                name : 'Ca ngợi Đấng Tạo Hóa',
                type : 'Bị động',
                rage : '',
                about : 'Gây sát thương trực tiếp (Hệ số sát thương 1700) cho mục tiêu, sau đó giảm 50% tốc độ diễu hành của mục tiêu và giảm 50% hiệu ứng hồi máu nhận được trong 5 giây tiếp theo.',

            },

        ],
        VanMinh : VanMinhImage.Ottoman,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Support,
        ],
        talentTree : [{
            uri : 'https://rok.guide/wp-content/uploads/2019/06/saladin-talent-tree-1024x576.png'
        },],
        partner : [
            11,2
        ],
        partnerEpic : [
            1,2,53,52,51
        ],
        trangBi : 'kỵ binh'
    },
    {
        id: 21,
        name : 'Seondeok',
        image : require('./../../assets/images/Commander/Legendary/Seondeok/Seondeok.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Seondeok/tuongSeondeok.png'),
        about : 'Nữ hoàng Seondeok của Silla trị vì là Nữ hoàng của Silla, một trong ba vương quốc của Hàn Quốc, từ năm 632 đến 647. Bà là nhà cai trị thứ hai mươi bảy của Silla và là nữ hoàng trị vì đầu tiên của nó. Cô là nữ chủ quyền thứ hai trong lịch sử Đông Á được ghi nhận và khuyến khích sự phục hưng trong tư tưởng, văn học và nghệ thuật ở Silla. Ở Samguksagi, Nữ hoàng Seondeok được mô tả là "hào phóng, nhân từ, khôn ngoan và thông minh".',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill1.png'),
                type : 'Chủ động',
                name : 'Khiêm tốn ',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lớn gây ra cho một mục tiêu trong khi giảm cơn thịnh nộ của mục tiêu.',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400\nGiảm cơn thịnh nộ: 50/60/70/80/100'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill2.png') ,
                name : 'Sâu sắc',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tốc độ thu thập vàng; tăng tốc độ thu thập thực phẩm, gỗ và đá.',
                update : 'Tốc độ thu thập tiền thưởng (Vàng): 5% / 10% / 15% / 20% / 30%\nTốc độ thu thập tiền thưởng (Tài nguyên khác): 3% / 6% / 10% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill3.png') ,
                name : 'Mạnh mẽ',
                type : 'Bị động',
                rage : '',
                about : 'Tăng khả năng phòng thủ và sức khỏe của các đơn vị bao vây khi tập hợp tại các điểm tài nguyên trên bản đồ.',
                update : 'Thưởng phòng thủ đơn vị bao vây: 10% / 15% / 20% / 25% / 30%\nThưởng sức khỏe đơn vị bao vây: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill4.png') ,
                name : 'Minh mẫn',
                type : 'Bị động',
                rage : '',
                about : 'Khi quân đội do chỉ huy này chỉ chứa các đơn vị bao vây, tất cả các cuộc tấn công thông thường có 10% cơ hội gây thêm sát thương cho mục tiêu.',
                update : 'Hệ số thiệt hại bổ sung: 500/600/70/800/1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill5.png') ,
                name : 'Tôn vinh thiên đàng',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tải trọng của các đơn vị bao vây thêm 30% và cấp thêm 10% tài nguyên khi thu thập xong.',

            },

        ],
        VanMinh : VanMinhImage.Korea,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Attack,
        ],
        talentTree : [ {
            uri : 'https://riseofkingdomsboss.com/wp-content/uploads/2020/02/Seondeok-build-rise-of-kingdoms-768x439.jpg'
        }],
        partner : [
            6
         ],
         partnerEpic : [
            26
         ],
        trangBi : 'thu gom'
    },
    {
        id: 23,
        name : 'Tomyris',
        image : require('./../../assets/images/Commander/Legendary/Tomyris/Tomyris.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Tomyris/tuongTomyris.png'),
        about : 'Tomyris là nữ hoàng chiến binh của Massagetae. Cô được cho là đã đích thân dẫn quân của mình vào trận chiến để bảo vệ vùng đất của cô chống lại Cyrus Đại đế của Đế chế Achaemenid sau khi Cyrus bắt giữ con trai mình trong một trận chiến trước đó. Hầu hết các nhà sử học nói rằng cô đã đánh bại và giết Cyrius vào năm 530 trước Công nguyên. Để làm dịu cơn khát máu của Cyrus, cô chặt đầu anh ta và sau đó giữ đầu anh ta trong một loại rượu vang đầy máu.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill1.png'),
                type : 'Chủ động',
                name : 'Mũi tên báo thù',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp cho một mục tiêu. Nếu mục tiêu này bị ảnh hưởng bởi chất độc, hãy loại bỏ ngay chất độc và gây sát thương độc (Tổng thiệt hại = số lần ra skill x tăng nhiễm độc). Nếu có nhiều hơn 10 ngăn xếp, tăng sát thương độc (Tổng thiệt hại = số lần ra skill x tăng nhiễm độc).',
                update : 'Hệ số thiệt hại trực tiếp: 700/750/800/900/1000\nYếu tố độc (Ít hoặc bằng 10 ngăn xếp): 20/25/30/35/40\nYếu tố độc (Hơn 10 ngăn xếp): 40/50/60/70/80'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill2.png') ,
                name : 'Hoàn vốn',
                type : 'Bị động',
                rage : '',
                about : 'Khi tấn công các thành phố, tăng sát thương tấn công bình thường và giảm 10% sát thương phản công.',
                update : 'Thưởng sát thương tấn công thông thường: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill3.png') ,
                name : 'Cho mặt trời',
                type : 'Bị động',
                rage : '',
                about : 'Tăng khả năng tấn công của các đơn vị cung thủ và cho tất cả các cuộc tấn công 10% cơ hội để giảm khả năng phòng thủ của một mục tiêu trong 3 giây.',
                update : 'Thưởng Tấn công cung thủ: 10% / 15% / 20% / 25% / 30%\nGiảm phòng thủ: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill4.png') ,
                name : 'Cuộc phản công của Massagetae',
                type : 'Bị động',
                rage : '',
                about : 'Cung cấp cho tất cả các cơ hội tấn công thường xuyên để đầu độc một mục tiêu trong 5 giây (xếp tối đa 15 lần). Thời gian nhiễm độc được làm mới mỗi lần thêm ngăn xếp. Các mục tiêu bị đầu độc sẽ nhận thêm 3% sát thương kỹ năng cho mỗi stack.',
                update : 'Xác suất: 50% / 60% / 70% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill5.png') ,
                name : 'Túi máu',
                type : 'Bị động',
                rage : '',
                about : 'Tăng tấn công bình thường và sát thương phản công thêm 10%. Khi bị tấn công, giảm 10% tấn công của các đơn vị kỵ binh tấn công.',

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [{
            uri : 'https://rok.guide/wp-content/uploads/2019/09/Tomyris-1024x576.jpg'
        },],
        partner : [
            8,25
         ],
         partnerEpic : [
            5,16
         ],
        trangBi : 'cung thủ'
    },
    {
        id: 24,
        name : 'Wu Zetian',
        image : require('./../../assets/images/Commander/Legendary/WuZetian/WuZetian.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/WuZetian/tuongWuZetian.png'),
        about : 'Võ Tắc Thiên là Hoàng hậu đầu tiên của Trung Quốc tự mình cai trị đất nước. Được cha giáo dục tốt, cô bắt đầu với tư cách là một người phối ngẫu với Hoàng đế, và dần dần tìm đến Hoàng hậu. Cô thực sự trở thành người cai trị thực sự khi Hoàng đế bị đột quỵ. Khi chồng bà qua đời, bà đã giết hoặc đày hầu hết các con trai của mình, bảo vệ ngai vàng cho đứa con út, dễ kiểm soát nhất. Cuối cùng, con trai bà đã từ bỏ danh hiệu Hoàng đế và cuối cùng là Võ Tắc Thiên, cũng trở thành người thống trị tối cao. Cô trở nên nổi tiếng vì sự tàn nhẫn, tạo ra một lực lượng cảnh sát bí mật đã loại bỏ nhiều quan chức và kẻ âm mưu tham nhũng muốn có một trong những đứa con trai của cô lên ngai vàng. Trong khi nhiều nhà sử học nhớ đến cô là tàn nhẫn, cô cũng được nhớ đến khi mở rộng các lãnh thổ của Trung Quốc, và để biến Phật giáo thành quốc giáo mới đối với Đạo giáo. Cô nổi tiếng để trống bia mộ, nói rằng lịch sử sẽ quyết định di sản thực sự của cô.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill1.png'),
                type : 'Chủ động',
                name : 'Thiên mệnh',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp vào một mục tiêu và chữa lành một phần quân bị thương của bạn.',
                update : 'Hệ số thiệt hại trực tiếp: 500/600/70/800/1000\nHệ số chữa lành: 100/200/300/400/500'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill2.png') ,
                name : 'Kị sĩ sư tử',
                type : 'Bị động',
                rage : '',
                about : 'Khi chỉ huy đồn trú, tất cả thiệt hại của quân đồn trú được tăng lên, và thiệt hại gây ra các cuộc tấn công tập hợp được tăng lên.',
                update : 'Thưởng thiệt hại: 2% / 4% / 6% / 8% / 10%\nThiệt hại cho quân đội tập hợp tăng: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill3.png') ,
                name : 'Huyết lệ',
                type : 'Bị động',
                rage : '',
                about : 'Tăng HP và Phòng thủ của quân đội dưới sự chỉ huy của bạn. Các cuộc tấn công của quân đội của bạn có 10% cơ hội để bịt miệng mục tiêu trong 2 giây.',
                update : 'Thưởng phòng thủ: 2% / 4% / 6% / 8% / 10%Tăng sức khỏe quân đội: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill4.png') ,
                name : 'Di sản',
                type : 'Bị động',
                rage : '',
                about : 'Khi chỉ huy đồn trú, sát thương kỹ năng đến sẽ giảm. Quân đội của bạn có 50% cơ hội để tăng Phòng thủ trong 3 giây khi họ nhận sát thương kỹ năng.',
                update : 'Giảm sát thương kỹ năng: 3% / 5% / 8% / 11% / 15%\nThưởng phòng thủ: 5% / 8% / 11% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill5.png') ,
                name : 'Bầu trời sáng nhất',
                type : 'Bị động',
                rage : '',
                about : 'Sát thương phản công + 20%. Các đòn tấn công sắp tới có 10% cơ hội gây sát thương cho kẻ tấn công (Xác thương trực tiếp 500).',

            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Garrison,
            TalentIcon.Support,
        ],
        talentTree : [{
            uri : 'https://rok.guide/wp-content/uploads/2019/11/wu-zetian-counter-attila-1024x576.png'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/10/wu-zetian-talent-tree-1024x739.jpg'
        },
        {
            uri : 'https://rok.guide/wp-content/uploads/2019/10/wu-zetian-talent-tree-open-field-1024x650.jpg'
        }],
        partner : [
            19,7,5,25            
        ],
        partnerEpic : [
            4,54
        ],
        trangBi : ''
    },
    {
        id: 25,
        name : 'Yi Seong-Gye',
        image : require('./../../assets/images/Commander/Legendary/Yi/Yi.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Yi/tuongYi.png'),
        about : 'Taejo của Joseon, sinh ra Yi Seong-Gye, là người sáng lập và là vị vua đầu tiên của triều đại Joseon của Hàn Quốc và là nhân vật chính trong việc lật đổ triều đại Goryeo. Yi Seong-Gye gia nhập quân đội Goryeo và có được sức mạnh và sự tôn trọng trong những năm cuối thập niên 1370 và đầu thập niên 1380 bằng cách đẩy tàn quân Mông Cổ ra khỏi bán đảo và cũng bằng cách đẩy lùi những tên cướp biển Nhật Bản có tổ chức tốt trong một loạt các cuộc giao chiến thành công. Ông đã tuyên bố một triều đại mới vào năm 1392-1393 dưới tên Joseon, do đó, hồi sinh và nhà nước cũ hơn, còn được gọi là Joseon, nghĩa là, được thành lập một cách hợp pháp gần ba ngàn năm trước và đổi tên thành quận Vương quốc của Vương quốc Jose Jose. Yi Seong-Gye thoái vị vào năm 1308 trong cuộc xung đột giữa con trai ông và qua đời vào ngày 23 tháng 5 năm 1408 Cung điện I Changdeok.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill1.png'),
                type : 'Chủ động',
                name : 'Mưa mũi tên',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương trực tiếp lên kẻ thù trong khu vực hình quạt. Có thể sát thương tối đa 5 mục tiêu.',
                update : 'Hệ số thiệt hại trực tiếp: 600/800/1000/1200/1400'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill2.png') ,
                name : 'Nghệ thuật bắn cung ',
                type : 'Bị động',
                rage : '',
                about : 'Các cuộc tấn công thông thường của quân lính có 10% cơ hội để tăng thêm cơn thịnh nộ và tăng sức tấn công của các đơn vị cung thủ trong 3 giây tiếp theo.',
                update : 'Cơn thịnh nộ được khôi phục: 50/60/70/80/100\nThưởng Tấn công cung thủ: 50% / 60% / 70% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill3.png') ,
                name : 'Triều đại Joseon',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sự tấn công của đồn trú và tháp canh khi chỉ huy này đang phục vụ như là chỉ huy đồn trú.',
                update : 'Thưởng tấn công đồn trú / Tháp canh: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill4.png') ,
                name : 'Định mệnh',
                type : 'Bị động',
                rage : '',
                about : 'Tăng sát thương kỹ năng.',
                update : 'Phần thưởng sát thương kỹ năng: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill5.png') ,
                name : 'Bão tên',
                type : 'Tăng skill 1',
                rage : '',
                about : 'Gây sát thương trực tiếp (Sát thương trực tiếp 1700) cho kẻ địch trong một khu vực hình tròn. Có thể sát thương tối đa 5 mục tiêu.',

            },

        ],
        VanMinh : VanMinhImage.Korea,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Yi_Seong-Gye_Garrison-1024x576.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Yi_Seong-Gye-1024x576.jpg'
            }
        ],
        partner : [
            19,7,5,8,24,23,26            
        ],
        partnerEpic : [
            5,16,54,3
        ],
        trangBi : 'cung thủ'
    },
    {
        id: 26,
        name : 'Æthelflæd',
        image : require('./../../assets/images/Commander/Legendary/Athe/Athe.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Athe/tuongAthe.png'),
        about : 'Æthelflæd, Lady of the Mercian, cai trị Mercia ở vùng trung du nước Anh từ năm 911 cho đến khi bà qua đời. Sinh ra ở đỉnh cao của cuộc xâm lược Viking của Anh, cô lớn lên ở một vùng đất chiến tranh, chiến đấu một trận thua trước những kẻ chinh phạt Đan Mạch. Người ta nói rằng thelflæd cai trị ở vị trí của chồng trong một thập kỷ sau khi anh ta bị bệnh. Khi ông qua đời vào năm 911, Æthelflæd trở thành Myrcna hlædige, ‘Lady of the Mercian". Trước khi chết, bà đã lấy lại một phần lớn nước Anh và sẵn sàng đầu hàng.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill1.png'),
                type : 'Chủ động',
                name : 'Mũi tên sắt',
                rage : 'Sức mạnh phi thường: 1000',
                about : 'Gây sát thương lên tới 5 kẻ địch trong khu vực hình quạt hướng về phía trước, giảm đòn tấn công, phòng thủ và máu của chúng trong 2 giây tiếp theo.',
                update : 'Hệ số thiệt hại trực tiếp: 400/500/600/700/800\nGiảm Tấn công, phòng thủ và giảm sức khỏe: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill2.png') ,
                name : 'Lực lượng sấm sét',
                type : 'Bị động',
                rage : '',
                about : 'Thiệt hại phản công chống lại quân đội của bạn được giảm. Khi chủ động tấn công, bạn có 10% cơ hội để giảm tốc độ di chuyển của kỵ binh địch và tốc độ di chuyển của các đội quân khác. Hiệu ứng chậm 3 giây.',
                update : 'Giảm sát thương phản công: 5% / 8% / 11% / 15% / 20%\nGiảm tốc độ hành quân kỵ binh: 20% / 25% / 30% / 40% / 50%\nĐơn vị khác Giảm tốc độ hành quân: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill3.png') ,
                name : 'Sức mạnh tổng hợp',
                type : 'Bị động',
                rage : '',
                about : 'Tất cả quân đội dưới quyền chỉ huy của bạn đều có được cuộc tấn công chống lại người Barbari và các đơn vị trung lập khác và tất cả các chỉ huy đều nhận thêm EXP.',
                update : 'Thưởng thiệt hại cho người man rợ: 5% / 10% / 17% / 25% / 35%\nThưởng kinh nghiệm: 5% / 10% / 17% / 25% / 35%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill4.png') ,
                name : 'Pháo đài Mercia',
                type : 'Bị động',
                rage : '',
                about : 'Khi chỉ huy này dẫn đầu một cuộc tấn công tập hợp, tất cả các đội quân tham gia cuộc biểu tình có giới hạn quân đội cao hơn. Khi chỉ huy này đang lãnh đạo ít nhất 3 loại quân khác nhau, sát thương của chúng sẽ tăng lên.',
                update : 'Thưởng quân đội tập hợp tăng: 2% / 4% / 6% / 8% / 10%\nThiệt hại tiền thưởng (3 loại đơn vị): 5% / 8% / 11% / 15% / 20%'

            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill5.png') ,
                name : 'Nữ hoàng chiến binh',
                type : 'Bị động',
                rage : '',
                about : 'Gây thêm 20% sát thương cho kẻ địch đã bị làm chậm.',

            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Peacekeeping,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/%C3%86thelfl%C3%A6d-all-in-one-talent-build-1024x598.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/aetheflaed-barbarian-hunting-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/aethefled-field-battle-1024x576.png'
            }
        ],
        partner : [],
        trangBi : 'man rợ'
    },
   
    
 
]