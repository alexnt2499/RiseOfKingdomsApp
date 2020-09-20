import res from './Resourse';

export default {
        name : 'Trang trại',
        nameEn : 'Farm',
        image : require('./../../../assets/images/Building/Farm.png'),
        note : `Tổ tiên khôn ngoan của chúng ta đã chọn từ bỏ lối sống săn bắn hái lượm của họ và tạo ra các khu định cư cố định nơi họ có thể chăn nuôi và trồng trọt. Đó là nguồn gốc của các xã hội nông nghiệp đầu tiên, xuất hiện khoảng 12.000 năm trước trong thời đại đồ đá mới.`,
        noteEn : `Our wise ancestors chose to give up their hunter-gatherer lifestyles and create permanent settlements where they could raise livestock and grow crops. That was the origin of the first agricultural societies, which appeared around 12,000 years ago in the neolithic age.`,
        level : [
            {
                require : ['City Hall'],
                gold : 0,
                wood : 9000,
                stone : 6600,
                food : 0,
                time : {
                    day : 0,
                    hour : 2,
                    min : 0,                
                },
                power : 874
            },
            
                
            
        ]

}