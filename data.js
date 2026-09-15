const DAY_TITLES={
1:'Giới thiệu bản thân',2:'Chào hỏi và giao tiếp cơ bản',3:'Thời gian và lịch làm việc',4:'Gia đình và đời sống',5:'Mua sắm và thanh toán',6:'Ăn uống và gọi món',7:'Đi lại và hỏi đường',8:'Khách sạn và du lịch',9:'Điện thoại và tin nhắn',10:'Kế hoạch và hẹn gặp',
11:'Công việc – giới thiệu vai trò',12:'Công việc – hỏi thông tin',13:'Cuộc họp',14:'Kế hoạch sản xuất',15:'Báo cáo tiến độ',16:'SMT – thiết bị',17:'SMT – linh kiện',18:'Feeder và nozzle',19:'Printer và stencil',20:'Mounter và program',21:'Reflow',22:'AOI và SPI',23:'Defect',24:'Troubleshooting',25:'Model change',26:'Changeover',27:'UPH và output',28:'Machine uptime',29:'Downtime',30:'Bảo trì',31:'An toàn',32:'Quality',33:'Root cause',34:'5 Why',35:'Cải tiến',36:'Jig',37:'ERP và MBOM',38:'Gerber và Centroid',39:'SOP',40:'Đào tạo kỹ sư',41:'Bàn giao ca',42:'Email công việc',43:'Nhà cung cấp',44:'Mua hàng',45:'Kiểm tra vật liệu',46:'Thiếu linh kiện',47:'Lịch PMC',48:'Yêu cầu thay đổi',49:'Khách hàng',50:'Deadline',51:'Giải quyết bất đồng',52:'Nhờ hỗ trợ',53:'Xin xác nhận',54:'Giải thích nguyên nhân',55:'Đưa ra giải pháp',56:'Theo dõi hành động',57:'Báo cáo tuần',58:'Báo cáo tháng',59:'Thuyết trình',60:'Phỏng vấn',61:'Thảo luận kỹ thuật',62:'Mô tả quy trình',63:'Mô tả thiết bị',64:'Nói về chất lượng',65:'Nói về năng suất',66:'Nói về chi phí',67:'Nói về thời gian',68:'Nói về rủi ro',69:'Nói về ưu tiên',70:'Nói về mục tiêu',71:'Đi công tác',72:'Sân bay',73:'Taxi và phương tiện',74:'Nhà hàng khi công tác',75:'Khách sạn khi công tác',76:'Mua hàng online',77:'Ngân hàng',78:'Địa chỉ và giao hàng',79:'Gặp người mới',80:'Small talk',81:'Làm quen đồng nghiệp',82:'Giao tiếp với sếp',83:'Giao tiếp với khách',84:'Điện thoại công việc',85:'Video meeting',86:'Trình bày vấn đề',87:'Theo dõi deadline',88:'Đề nghị thay đổi',89:'Xử lý lỗi',90:'Xin lỗi và giải thích',91:'Xác nhận lại',92:'Đưa ra ý kiến',93:'Đồng ý và phản đối',94:'Nói tự nhiên',95:'Nghe và hỏi lại',96:'Hội thoại dài',97:'Phỏng vấn nâng cao',98:'Role-play nhà máy',99:'Role-play đời sống',100:'Tổng ôn 100 ngày'
};
const EN=(text,vi,explain,structures)=>({text,vi,explain,structures});
const ZH=(text,pinyin,vi,explain,structures)=>({text,pinyin,vi,explain,structures});
const N=(name)=>({name,new:true});const O=(name)=>({name,new:false});
const LESSONS={en:{},zh:{}};
LESSONS.en[1]=[
 EN('Hi, my name is Dat.','Xin chào, tôi tên là Đạt.','Cấu trúc giới thiệu tên: My name is + tên.',[N('My name is + name')]),
 EN('I am from Vietnam.','Tôi đến từ Việt Nam.','Dùng I am from + nơi chốn để nói mình đến từ đâu.',[N('I am from + place')]),
 EN('I live in Ninh Binh.','Tôi sống ở Ninh Bình.','Dùng I live in + nơi chốn để nói nơi đang sống.',[N('I live in + place')]),
 EN('I work in SMT.','Tôi làm trong lĩnh vực SMT.','I work in + lĩnh vực/công ty.',[N('I work in + field')]),
 EN('I am an engineer.','Tôi là kỹ sư.','I am + nghề nghiệp.',[N('I am + job')]),
 EN('I have several years of experience in SMT.','Tôi có vài năm kinh nghiệm trong SMT.','I have + danh từ để nói mình có thứ gì.',[N('I have + noun')]),
 EN('Nice to meet you.','Rất vui được gặp bạn.','Câu chào lịch sự khi gặp người mới.',[N('Nice to meet you')]),
 EN('Please call me Dat.','Hãy gọi tôi là Đạt.','Please + động từ để đưa ra yêu cầu lịch sự.',[N('Please + V')]),
 EN('I am learning English and Chinese.','Tôi đang học tiếng Anh và tiếng Trung.','Hiện tại tiếp diễn: be + V-ing.',[N('be + V-ing')]),
 EN('I want to speak English more naturally.','Tôi muốn nói tiếng Anh tự nhiên hơn.','want to + động từ nguyên mẫu.',[N('want to + V')])
];
LESSONS.en[2]=[
 EN('Good morning.','Chào buổi sáng.','Lời chào dùng vào buổi sáng.',[O('Greeting')]),
 EN('How are you today?','Hôm nay bạn khỏe không?','How are you? là câu hỏi thăm thông dụng.',[N('How are you + today?')]),
 EN('I am good, thank you.','Tôi khỏe, cảm ơn bạn.','Cấu trúc trả lời cơ bản cho How are you?',[N('I am + adjective')]),
 EN('What are you doing now?','Bây giờ bạn đang làm gì?','Câu hỏi hiện tại tiếp diễn.',[N('What are you doing?')]),
 EN('I am checking the machine.','Tôi đang kiểm tra máy.','be + V-ing diễn tả việc đang xảy ra.',[O('be + V-ing')]),
 EN('Can you help me?','Bạn có thể giúp tôi không?','Can + chủ ngữ + V để hỏi khả năng/yêu cầu.',[N('Can you + V?')]),
 EN('Sure, no problem.','Được, không vấn đề gì.','Câu trả lời đồng ý thân thiện.',[N('Sure, no problem')]),
 EN('Please wait a moment.','Vui lòng chờ một chút.','Please + V dùng để yêu cầu lịch sự.',[O('Please + V')]),
 EN('I will check it now.','Tôi sẽ kiểm tra ngay bây giờ.','will + V dùng cho quyết định/dự định tức thời.',[N('will + V')]),
 EN('See you later.','Hẹn gặp lại sau.','Câu chào tạm biệt thông dụng.',[N('See you later')])
];
LESSONS.en[3]=[
 EN('What time is the meeting?','Cuộc họp lúc mấy giờ?','What time + be + noun?',[N('What time is + noun?')]),
 EN('The meeting starts at nine.','Cuộc họp bắt đầu lúc 9 giờ.','Hiện tại đơn dùng cho lịch cố định.',[N('starts at + time')]),
 EN('I have a meeting this afternoon.','Chiều nay tôi có một cuộc họp.','have + event để nói có lịch.',[N('have a + event')]),
 EN('I am available after two o’clock.','Tôi rảnh sau 2 giờ.','available = rảnh/có thể sắp xếp.',[N('be available + time')]),
 EN('Can we move the meeting to tomorrow?','Chúng ta có thể chuyển cuộc họp sang ngày mai không?','Can we + V? để đề nghị.',[N('Can we + V?')]),
 EN('Tomorrow works for me.','Ngày mai phù hợp với tôi.','work for me = phù hợp với tôi.',[N('works for me')]),
 EN('I will be there on time.','Tôi sẽ có mặt đúng giờ.','will be + nơi/ch trạng thái.',[O('will + V')]),
 EN('Please send me the schedule.','Vui lòng gửi lịch cho tôi.','send somebody something.',[N('send + person + thing')]),
 EN('I need more time to prepare.','Tôi cần thêm thời gian để chuẩn bị.','need + noun + to V.',[N('need + noun + to V')]),
 EN('Let me check my calendar.','Để tôi kiểm tra lịch của mình.','Let me + V dùng để đề nghị tự mình làm việc gì.',[N('Let me + V')])
];
LESSONS.en[4]=[
 EN('I live with my family.','Tôi sống cùng gia đình.','live with + người.',[N('live with + person')]),
 EN('I have a small child.','Tôi có một con nhỏ.','have + noun.',[O('I have + noun')]),
 EN('My family is very important to me.','Gia đình rất quan trọng với tôi.','important to me = quan trọng đối với tôi.',[N('important to me')]),
 EN('I usually get up early.','Tôi thường dậy sớm.','usually + động từ để nói thói quen.',[N('usually + V')]),
 EN('I go to work at seven.','Tôi đi làm lúc 7 giờ.','Hiện tại đơn nói thói quen.',[O('starts at + time')]),
 EN('I come home after work.','Tôi về nhà sau giờ làm.','after + noun/time.',[N('after + noun')]),
 EN('I am tired today.','Hôm nay tôi mệt.','be + adjective.',[O('I am + adjective')]),
 EN('I want to rest tonight.','Tối nay tôi muốn nghỉ ngơi.','want to + V.',[O('want to + V')]),
 EN('I have to work tomorrow.','Ngày mai tôi phải làm việc.','have to + V = phải làm.',[N('have to + V')]),
 EN('I need some time with my family.','Tôi cần chút thời gian với gia đình.','some time = một chút thời gian.',[N('need some time')])
];
LESSONS.en[5]=[
 EN('How much is this?','Cái này bao nhiêu tiền?','How much is + singular noun?',[N('How much is + noun?')]),
 EN('Do you have a smaller size?','Bạn có cỡ nhỏ hơn không?','Do you have + noun? để hỏi có hàng không.',[N('Do you have + noun?')]),
 EN('I am looking for a cable.','Tôi đang tìm một sợi cáp.','be + V-ing với look for.',[N('look for + noun')]),
 EN('Can I pay by card?','Tôi có thể trả bằng thẻ không?','Can I + V? xin phép.',[N('Can I + V?')]),
 EN('Do you accept cash?','Bạn có nhận tiền mặt không?','Do you + V? hỏi thói quen/chính sách.',[N('Do you + V?')]),
 EN('I only need one.','Tôi chỉ cần một cái.','only = chỉ.',[N('only + noun')]),
 EN('Can I have a receipt?','Tôi có thể lấy hóa đơn không?','Can I have + noun?',[O('Can I + V?')]),
 EN('That is too expensive for me.','Cái đó quá đắt với tôi.','too + adjective.',[N('too + adjective')]),
 EN('Do you have a cheaper one?','Bạn có cái nào rẻ hơn không?','comparative cheaper + one.',[N('cheaper one')]),
 EN('Thank you. Have a nice day.','Cảm ơn. Chúc bạn một ngày tốt lành.','Have a nice day là câu kết thúc giao tiếp lịch sự.',[N('Have a nice day')])
];
LESSONS.en[6]=[
 EN('Can I see the menu, please?','Cho tôi xem thực đơn được không?','Can I + V? xin phép/yêu cầu.',[O('Can I + V?')]),
 EN('I would like a bowl of noodles.','Tôi muốn một bát mì.','would like + noun là cách gọi món lịch sự.',[N('would like + noun')]),
 EN('I would like some water.','Tôi muốn một ít nước.', 'would like + noun.',[O('would like + noun')]),
 EN('Is this spicy?','Món này có cay không?','Is this + adjective?',[N('Is this + adjective?')]),
 EN('Please make it less spicy.','Vui lòng làm ít cay hơn.','make + object + adjective.',[N('make it + adjective')]),
 EN('No ice, please.','Không đá, làm ơn.','Danh từ + please là yêu cầu ngắn.',[N('noun + please')]),
 EN('Can I get the bill, please?','Cho tôi xin hóa đơn được không?','Can I get + noun?',[N('Can I get + noun?')]),
 EN('The food is very good.','Đồ ăn rất ngon.','be + adjective.',[O('I am + adjective')]),
 EN('I am full.','Tôi no rồi.','be + adjective.',[O('I am + adjective')]),
 EN('Everything was great.','Mọi thứ đều tuyệt.','was = quá khứ của be.',[N('Everything was + adjective')])
];
LESSONS.en[7]=[
 EN('Excuse me, where is the station?','Xin lỗi, nhà ga ở đâu?','Excuse me + question.',[N('Excuse me, where is...?')]),
 EN('How can I get there?','Tôi đi đến đó bằng cách nào?','How can I + V?',[N('How can I + V?')]),
 EN('Is it far from here?','Nó có xa đây không?','Is it + adjective + from here?',[N('Is it far from here?')]),
 EN('Go straight for two minutes.','Đi thẳng hai phút.','Go straight = đi thẳng.',[N('Go straight')]),
 EN('Turn left at the next corner.','Rẽ trái ở góc tiếp theo.','Turn left/right + location.',[N('Turn left/right')]),
 EN('It is next to the bank.','Nó ở cạnh ngân hàng.','next to = bên cạnh.',[N('next to + noun')]),
 EN('Can I walk there?','Tôi đi bộ đến đó được không?','Can I + V?',[O('Can I + V?')]),
 EN('How long does it take?','Mất bao lâu?','How long does it take?', [N('How long does it take?')]),
 EN('It takes about ten minutes.','Mất khoảng 10 phút.','It takes + time.',[N('It takes + time')]),
 EN('Thank you for your help.','Cảm ơn bạn đã giúp đỡ.','Thank you for + noun/V-ing.',[N('Thank you for + V-ing')])
];
LESSONS.en[8]=[
 EN('I have a reservation.','Tôi có đặt phòng.','have a reservation.',[N('have a reservation')]),
 EN('My name is Dat.','Tên tôi là Đạt.','My name is + name.',[O('My name is + name')]),
 EN('Can I check in now?','Tôi có thể nhận phòng bây giờ không?','Can I + V?',[O('Can I + V?')]),
 EN('What time is check-out?','Mấy giờ trả phòng?','What time is + noun?',[O('What time is + noun?')]),
 EN('Is breakfast included?','Bữa sáng có bao gồm không?','Is + noun + past participle?',[N('Is + noun + included?')]),
 EN('Could you help me with my luggage?','Bạn có thể giúp tôi hành lý được không?','Could you + V? lịch sự hơn Can you.',[N('Could you + V?')]),
 EN('Where is the elevator?','Thang máy ở đâu?','Where is + noun?',[N('Where is + noun?')]),
 EN('The room is very clean.','Phòng rất sạch.','be + adjective.',[O('I am + adjective')]),
 EN('I need another towel.','Tôi cần thêm một khăn.','need + noun.',[N('need + noun')]),
 EN('Thank you for your help.','Cảm ơn bạn đã giúp đỡ.','Thank you for + noun/V-ing.',[O('Thank you for + V-ing')])
];
LESSONS.en[9]=[
 EN('Can you hear me?','Bạn có nghe thấy tôi không?','Can you + V?',[O('Can you + V?')]),
 EN('The connection is not very good.','Kết nối không tốt lắm.','not + adjective.',[N('not + adjective')]),
 EN('Please send me a message.','Hãy gửi tin nhắn cho tôi.','send + person + thing.',[O('send + person + thing')]),
 EN('I will call you later.','Tôi sẽ gọi cho bạn sau.','will + V.',[O('will + V')]),
 EN('I am in a meeting right now.','Bây giờ tôi đang họp.','be + V-ing.',[O('be + V-ing')]),
 EN('Can I call you back?','Tôi gọi lại cho bạn được không?','call + person + back.',[N('call + person + back')]),
 EN('I missed your call.','Tôi đã bỏ lỡ cuộc gọi của bạn.','missed = quá khứ của miss.',[N('miss + noun')]),
 EN('Please check your email.','Hãy kiểm tra email của bạn.','Please + V.',[O('Please + V')]),
 EN('I have sent the file.','Tôi đã gửi file rồi.','have/has + past participle.',[N('have + V3')]),
 EN('Let me know if you have any questions.','Cho tôi biết nếu bạn có câu hỏi nào.','Let me know if + clause.',[N('Let me know if...')])
];
LESSONS.en[10]=[
 EN('Are you free tomorrow?','Ngày mai bạn rảnh không?','Are you + adjective/time?',[N('Are you free + time?')]),
 EN('Would you like to have coffee?','Bạn có muốn uống cà phê không?','Would you like to + V?',[N('Would you like to + V?')]),
 EN('What time should we meet?','Chúng ta nên gặp lúc mấy giờ?','What time should we + V?',[N('What time should we + V?')]),
 EN('Let us meet at ten.','Hãy gặp nhau lúc 10 giờ.','Let us + V.',[N('Let us + V')]),
 EN('I can meet you after work.','Tôi có thể gặp bạn sau giờ làm.','can + V.',[N('can + V')]),
 EN('That works for me.','Thế phù hợp với tôi.','works for me.',[O('works for me')]),
 EN('I may be a little late.','Có thể tôi sẽ hơi muộn.','may + V diễn tả khả năng.',[N('may + V')]),
 EN('Please text me when you arrive.','Hãy nhắn cho tôi khi bạn đến.','when + present simple.',[N('when + clause')]),
 EN('I am looking forward to it.','Tôi rất mong chờ điều đó.','look forward to + noun/V-ing.',[N('look forward to + V-ing')]),
 EN('See you tomorrow.','Hẹn gặp bạn ngày mai.','Câu tạm biệt kèm thời gian.',[O('See you later')])
];

LESSONS.zh[1]=[
 ZH('你好，我叫达。','Nǐ hǎo, wǒ jiào Dá.','Xin chào, tôi tên là Đạt.','你好 = xin chào; 我叫 + tên = tôi tên là…',[N('你好'),N('我叫 + tên')]),
 ZH('我来自越南。','Wǒ láizì Yuènán.','Tôi đến từ Việt Nam.','来自 + nơi chốn = đến từ…',[N('来自 + place')]),
 ZH('我住在宁平。','Wǒ zhù zài Níngpíng.','Tôi sống ở Ninh Bình.','住在 + nơi chốn = sống ở…',[N('住在 + place')]),
 ZH('我做SMT工作。','Wǒ zuò SMT gōngzuò.','Tôi làm công việc SMT.','做 + công việc = làm…',[N('做 + work')]),
 ZH('我是工程师。','Wǒ shì gōngchéngshī.','Tôi là kỹ sư.','我是 + nghề nghiệp.',[N('我是 + job')]),
 ZH('我有几年的SMT工作经验。','Wǒ yǒu jǐ nián de SMT gōngzuò jīngyàn.','Tôi có vài năm kinh nghiệm SMT.','有 + danh từ để nói có…',[N('有 + noun')]),
 ZH('很高兴认识你。','Hěn gāoxìng rènshi nǐ.','Rất vui được gặp bạn.','Câu chào lịch sự khi làm quen.',[N('很高兴认识你')]),
 ZH('请叫我达。','Qǐng jiào wǒ Dá.','Hãy gọi tôi là Đạt.','请 + động từ là yêu cầu lịch sự.',[N('请 + V')]),
 ZH('我正在学习英语和中文。','Wǒ zhèngzài xuéxí Yīngyǔ hé Zhōngwén.','Tôi đang học tiếng Anh và tiếng Trung.','正在 + V diễn tả đang làm.',[N('正在 + V')]),
 ZH('我想把英语说得更自然。','Wǒ xiǎng bǎ Yīngyǔ shuō de gèng zìrán.','Tôi muốn nói tiếng Anh tự nhiên hơn.','想 + V = muốn; 说得更自然 = nói tự nhiên hơn.',[N('想 + V')])
];
LESSONS.zh[2]=[
 ZH('早上好。','Zǎoshang hǎo.','Chào buổi sáng.','Câu chào buổi sáng.',[N('早上好')]),
 ZH('你今天怎么样？','Nǐ jīntiān zěnmeyàng?','Hôm nay bạn thế nào?','怎么样 = thế nào.',[N('怎么样？')]),
 ZH('我很好，谢谢。','Wǒ hěn hǎo, xièxie.','Tôi khỏe, cảm ơn.','很 + tính từ là cấu trúc rất phổ biến.',[N('很 + adjective')]),
 ZH('你现在在做什么？','Nǐ xiànzài zài zuò shénme?','Bây giờ bạn đang làm gì?','在 + V = đang làm.',[N('在 + V')]),
 ZH('我在检查设备。','Wǒ zài jiǎnchá shèbèi.','Tôi đang kiểm tra thiết bị.','在 + V diễn tả hành động đang xảy ra.',[O('在 + V')]),
 ZH('你可以帮我吗？','Nǐ kěyǐ bāng wǒ ma?','Bạn có thể giúp tôi không?','可以 + V + 吗? hỏi khả năng/xin phép.',[N('可以 + V + 吗？')]),
 ZH('当然，没问题。','Dāngrán, méi wèntí.','Được, không vấn đề gì.','当然 = tất nhiên.',[N('当然，没问题')]),
 ZH('请等一下。','Qǐng děng yíxià.','Vui lòng chờ một chút.','请 + V; 一下 làm câu mềm hơn.',[N('等一下')]),
 ZH('我现在检查一下。','Wǒ xiànzài jiǎnchá yíxià.','Tôi kiểm tra ngay bây giờ.','V + 一下 = làm nhanh/một chút.',[N('V + 一下')]),
 ZH('待会儿见。','Dāihuìr jiàn.','Hẹn gặp lại sau.','待会儿 = lát nữa.',[N('待会儿见')])
];
LESSONS.zh[3]=[
 ZH('会议几点开始？','Huìyì jǐ diǎn kāishǐ?','Cuộc họp bắt đầu lúc mấy giờ?','几点 = mấy giờ.',[N('几点 + V？')]),
 ZH('会议九点开始。','Huìyì jiǔ diǎn kāishǐ.','Cuộc họp bắt đầu lúc 9 giờ.','Thời gian + động từ.',[N('time + V')]),
 ZH('我今天下午有一个会议。','Wǒ jīntiān xiàwǔ yǒu yí ge huìyì.','Chiều nay tôi có một cuộc họp.','有 + sự kiện/lịch.',[O('有 + noun')]),
 ZH('我两点以后有空。','Wǒ liǎng diǎn yǐhòu yǒu kòng.','Sau 2 giờ tôi rảnh.','以后 = sau đó/sau mốc thời gian.',[N('time + 以后')]),
 ZH('我们可以把会议改到明天吗？','Wǒmen kěyǐ bǎ huìyì gǎi dào míngtiān ma?','Chúng ta có thể chuyển cuộc họp sang ngày mai không?','可以 + V + 吗; 把 + object + V.',[N('把 + object + V')]),
 ZH('明天对我来说可以。','Míngtiān duì wǒ láishuō kěyǐ.','Ngày mai phù hợp với tôi.','对我来说 = đối với tôi.',[N('对我来说')]),
 ZH('我会准时到。','Wǒ huì zhǔnshí dào.','Tôi sẽ đến đúng giờ.','会 + V = sẽ/có khả năng.',[N('会 + V')]),
 ZH('请把日程发给我。','Qǐng bǎ rìchéng fā gěi wǒ.','Vui lòng gửi lịch cho tôi.','把 + object + V + 给 + người nhận.',[N('发给 + person')]),
 ZH('我需要更多时间准备。','Wǒ xūyào gèng duō shíjiān zhǔnbèi.','Tôi cần thêm thời gian để chuẩn bị.','需要 + danh từ + động từ.',[N('需要 + noun + V')]),
 ZH('让我看一下日历。','Ràng wǒ kàn yíxià rìlì.','Để tôi xem lịch một chút.','让 + người + V = để/cho ai làm.',[N('让我 + V')])
];
LESSONS.zh[4]=[
 ZH('我和家人一起住。','Wǒ hé jiārén yìqǐ zhù.','Tôi sống cùng gia đình.','和…一起 = cùng với…',[N('和…一起')]),
 ZH('我有一个小孩。','Wǒ yǒu yí ge xiǎohái.','Tôi có một con nhỏ.','有 + danh từ.',[O('有 + noun')]),
 ZH('我的家人对我很重要。','Wǒ de jiārén duì wǒ hěn zhòngyào.','Gia đình rất quan trọng với tôi.','对我很重要 = rất quan trọng với tôi.',[N('对我很重要')]),
 ZH('我通常很早起床。','Wǒ tōngcháng hěn zǎo qǐchuáng.','Tôi thường dậy sớm.','通常 = thường.',[N('通常 + V')]),
 ZH('我七点去上班。','Wǒ qī diǎn qù shàngbān.','Tôi đi làm lúc 7 giờ.','Thời gian + hành động.',[O('time + V')]),
 ZH('下班以后我回家。','Xiàbān yǐhòu wǒ huí jiā.','Sau giờ làm tôi về nhà.','V + 以后 = sau khi…',[N('V + 以后')]),
 ZH('我今天很累。','Wǒ jīntiān hěn lèi.','Hôm nay tôi mệt.','很 + tính từ.',[O('很 + adjective')]),
 ZH('我今晚想休息。','Wǒ jīnwǎn xiǎng xiūxi.','Tối nay tôi muốn nghỉ ngơi.','想 + V.',[O('想 + V')]),
 ZH('我明天要上班。','Wǒ míngtiān yào shàngbān.','Ngày mai tôi phải đi làm.','要 + V = sẽ/phải.',[N('要 + V')]),
 ZH('我需要一点时间陪家人。','Wǒ xūyào yìdiǎn shíjiān péi jiārén.','Tôi cần một chút thời gian với gia đình.','一点时间 = một chút thời gian.',[N('需要一点时间')])
];
LESSONS.zh[5]=[
 ZH('这个多少钱？','Zhège duōshao qián?','Cái này bao nhiêu tiền?','多少 = bao nhiêu.',[N('多少钱？')]),
 ZH('有小一点的尺寸吗？','Yǒu xiǎo yìdiǎn de chǐcùn ma?','Có cỡ nhỏ hơn không?','有…吗? hỏi có hay không.',[N('有…吗？')]),
 ZH('我想买一根电缆。','Wǒ xiǎng mǎi yì gēn diànlǎn.','Tôi muốn mua một sợi cáp.','想 + V.',[O('想 + V')]),
 ZH('可以刷卡吗？','Kěyǐ shuā kǎ ma?','Có thể thanh toán bằng thẻ không?','可以 + V + 吗?',[O('可以 + V + 吗？')]),
 ZH('可以现金付款吗？','Kěyǐ xiànjīn fùkuǎn ma?','Có thể trả tiền mặt không?','现金 = tiền mặt; 付款 = thanh toán.',[N('现金付款')]),
 ZH('我只要一个。','Wǒ zhǐ yào yí ge.','Tôi chỉ cần một cái.','只 = chỉ.',[N('只要 + noun')]),
 ZH('可以给我收据吗？','Kěyǐ gěi wǒ shōujù ma?','Có thể đưa tôi hóa đơn không?','给我 + noun.',[N('给我 + noun')]),
 ZH('这个对我来说太贵了。','Zhège duì wǒ láishuō tài guì le.','Cái này quá đắt với tôi.','太 + adjective + 了 = quá…',[N('太 + adjective + 了')]),
 ZH('有便宜一点的吗？','Yǒu piányi yìdiǎn de ma?','Có cái rẻ hơn một chút không?','便宜一点 = rẻ hơn một chút.',[N('adjective + 一点')]),
 ZH('谢谢，祝你今天愉快。','Xièxie, zhù nǐ jīntiān yúkuài.','Cảm ơn, chúc bạn một ngày vui vẻ.','祝你… = chúc bạn…',[N('祝你 + phrase')])
];
LESSONS.zh[6]=[
 ZH('可以给我看一下菜单吗？','Kěyǐ gěi wǒ kàn yíxià càidān ma?','Cho tôi xem thực đơn được không?','给我 + V + 一下 + noun.',[N('给我看一下')]),
 ZH('我想要一碗面。','Wǒ xiǎng yào yì wǎn miàn.','Tôi muốn một bát mì.','想要 + noun.',[N('想要 + noun')]),
 ZH('我想喝一点水。','Wǒ xiǎng hē yìdiǎn shuǐ.','Tôi muốn uống một ít nước.','一点 + noun = một ít.',[O('想 + V')]),
 ZH('这个辣吗？','Zhège là ma?','Món này có cay không?','吗 biến câu thành câu hỏi.',[N('...吗？')]),
 ZH('请少放一点辣椒。','Qǐng shǎo fàng yìdiǎn làjiāo.','Vui lòng cho ít ớt hơn.','请 + V.',[N('少 + V + 一点')]),
 ZH('不要冰，谢谢。','Bú yào bīng, xièxie.','Không đá, cảm ơn.','不要 = không muốn/đừng.',[N('不要 + noun')]),
 ZH('可以给我买单吗？','Kěyǐ gěi wǒ mǎidān ma?','Cho tôi thanh toán được không?','买单 = thanh toán hóa đơn.',[N('给我 + V')]),
 ZH('这个菜很好吃。','Zhège cài hěn hǎochī.','Món này rất ngon.','很好吃 = rất ngon.',[N('很好吃')]),
 ZH('我吃饱了。','Wǒ chī bǎo le.','Tôi no rồi.','V + 结果补语 饱.',[N('V + result complement')]),
 ZH('一切都很好。','Yíqiè dōu hěn hǎo.','Mọi thứ đều rất tốt.','都 = đều.',[N('都 + adjective')])
];
LESSONS.zh[7]=[
 ZH('请问，车站在哪里？','Qǐngwèn, chēzhàn zài nǎlǐ?','Xin hỏi, nhà ga ở đâu?','在哪里 = ở đâu.',[N('在哪里？')]),
 ZH('我怎么去那里？','Wǒ zěnme qù nàlǐ?','Tôi đi đến đó bằng cách nào?','怎么 + V hỏi cách thức.',[N('怎么 + V？')]),
 ZH('离这里远吗？','Lí zhèlǐ yuǎn ma?','Có xa đây không?','离 + nơi + tính từ.',[N('离…远吗？')]),
 ZH('一直往前走两分钟。','Yìzhí wǎng qián zǒu liǎng fēnzhōng.','Đi thẳng về phía trước hai phút.','一直 = liên tục.',[N('一直 + V')]),
 ZH('下一个路口左转。','Xià yí ge lùkǒu zuǒ zhuǎn.','Rẽ trái ở ngã rẽ tiếp theo.','左转 = rẽ trái.',[N('左转/右转')]),
 ZH('它在银行旁边。','Tā zài yínháng pángbiān.','Nó ở cạnh ngân hàng.','旁边 = bên cạnh.',[N('在…旁边')]),
 ZH('我可以走过去吗？','Wǒ kěyǐ zǒu guòqù ma?','Tôi có thể đi bộ đến đó không?','可以 + V + 吗?',[O('可以 + V + 吗？')]),
 ZH('要多长时间？','Yào duō cháng shíjiān?','Mất bao lâu?','多长时间 = bao lâu.',[N('多长时间？')]),
 ZH('大概需要十分钟。','Dàgài xūyào shí fēnzhōng.','Khoảng 10 phút.','大概 = khoảng.',[N('大概 + time')]),
 ZH('谢谢你的帮助。','Xièxie nǐ de bāngzhù.','Cảm ơn sự giúp đỡ của bạn.','谢谢 + noun.',[O('谢谢 + noun')])
];
LESSONS.zh[8]=[
 ZH('我有预订。','Wǒ yǒu yùdìng.','Tôi có đặt phòng.','有预订 = có đặt chỗ.',[N('有预订')]),
 ZH('我叫达。','Wǒ jiào Dá.','Tôi tên là Đạt.','叫 + tên.',[O('我叫 + tên')]),
 ZH('我现在可以办理入住吗？','Wǒ xiànzài kěyǐ bànlǐ rùzhù ma?','Tôi có thể nhận phòng bây giờ không?','办理入住 = làm thủ tục nhận phòng.',[N('办理入住')]),
 ZH('几点退房？','Jǐ diǎn tuìfáng?','Mấy giờ trả phòng?','退房 = trả phòng.',[O('几点 + V？')]),
 ZH('早餐包括在里面吗？','Zǎocān bāokuò zài lǐmiàn ma?','Bữa sáng có bao gồm không?','包括 = bao gồm.',[N('包括在里面')]),
 ZH('可以帮我拿一下行李吗？','Kěyǐ bāng wǒ ná yíxià xíngli ma?','Có thể giúp tôi hành lý được không?','帮我 + V + 一下.',[N('帮我 + V + 一下')]),
 ZH('电梯在哪里？','Diàntī zài nǎlǐ?','Thang máy ở đâu?','在哪里?', [O('在哪里？')]),
 ZH('房间很干净。','Fángjiān hěn gānjìng.','Phòng rất sạch.','很 + adjective.',[O('很 + adjective')]),
 ZH('我需要再要一条毛巾。','Wǒ xūyào zài yào yì tiáo máojīn.','Tôi cần thêm một khăn.', '需要 + noun.',[O('需要 + noun')]),
 ZH('谢谢你的帮助。','Xièxie nǐ de bāngzhù.','Cảm ơn bạn đã giúp.', '谢谢 + noun.',[O('谢谢 + noun')])
];
LESSONS.zh[9]=[
 ZH('你听得到我吗？','Nǐ tīng de dào wǒ ma?','Bạn có nghe thấy tôi không?','听得到 = nghe thấy được.',[N('V + 得到')]),
 ZH('网络不太好。','Wǎngluò bú tài hǎo.','Kết nối mạng không tốt lắm.','不太 + adjective = không…lắm.',[N('不太 + adjective')]),
 ZH('请给我发个消息。','Qǐng gěi wǒ fā ge xiāoxi.','Hãy gửi tin nhắn cho tôi.','给我 + V.',[O('给我 + V')]),
 ZH('我晚点给你打电话。','Wǒ wǎndiǎn gěi nǐ dǎ diànhuà.','Tôi sẽ gọi cho bạn sau.','给 + người + 打电话.',[N('给 + person + 打电话')]),
 ZH('我现在正在开会。','Wǒ xiànzài zhèngzài kāihuì.','Bây giờ tôi đang họp.','正在 + V.',[O('正在 + V')]),
 ZH('我可以再打给你吗？','Wǒ kěyǐ zài dǎ gěi nǐ ma?','Tôi gọi lại cho bạn được không?','再 + V = lại.',[N('再 + V')]),
 ZH('我没接到你的电话。','Wǒ méi jiēdào nǐ de diànhuà.','Tôi đã không nhận được cuộc gọi của bạn.','没 + V = chưa/không xảy ra trong quá khứ.',[N('没 + V')]),
 ZH('请检查一下你的邮箱。','Qǐng jiǎnchá yíxià nǐ de yóuxiāng.','Hãy kiểm tra email của bạn.','请 + V + 一下.',[O('请 + V')]),
 ZH('我已经把文件发给你了。','Wǒ yǐjīng bǎ wénjiàn fā gěi nǐ le.','Tôi đã gửi file cho bạn rồi.','已经 = đã; 把 + object + V + 给.',[N('已经 + V + 了')]),
 ZH('如果你有问题，请告诉我。','Rúguǒ nǐ yǒu wèntí, qǐng gàosu wǒ.','Nếu bạn có câu hỏi, hãy nói cho tôi biết.','如果…，请… = nếu… thì hãy…',[N('如果…请…')])
];
LESSONS.zh[10]=[
 ZH('你明天有空吗？','Nǐ míngtiān yǒu kòng ma?','Ngày mai bạn rảnh không?','有空 = rảnh.',[N('有空吗？')]),
 ZH('你想一起喝咖啡吗？','Nǐ xiǎng yìqǐ hē kāfēi ma?','Bạn có muốn uống cà phê cùng không?','想 + V + 吗?',[O('想 + V')]),
 ZH('我们几点见面比较好？','Wǒmen jǐ diǎn jiànmiàn bǐjiào hǎo?','Chúng ta gặp nhau lúc mấy giờ thì tốt?','比较好 = tốt hơn/phù hợp hơn.',[N('比较好')]),
 ZH('我们十点见吧。','Wǒmen shí diǎn jiàn ba.','Chúng ta gặp lúc 10 giờ nhé.','吧 làm câu đề nghị mềm hơn.',[N('V + 吧')]),
 ZH('我下班以后可以见你。','Wǒ xiàbān yǐhòu kěyǐ jiàn nǐ.','Tôi có thể gặp bạn sau giờ làm.','V + 以后.',[O('V + 以后')]),
 ZH('这样对我来说可以。','Zhèyàng duì wǒ láishuō kěyǐ.','Như vậy phù hợp với tôi.','对我来说.',[O('对我来说')]),
 ZH('我可能会晚一点。','Wǒ kěnéng huì wǎn yìdiǎn.','Có thể tôi sẽ hơi muộn.','可能会 + V = có thể sẽ.',[N('可能会 + V')]),
 ZH('你到了以后给我发消息。','Nǐ dào le yǐhòu gěi wǒ fā xiāoxi.','Đến nơi rồi thì nhắn cho tôi.','…以后 = sau khi…',[O('…以后')]),
 ZH('我很期待。','Wǒ hěn qīdài.','Tôi rất mong chờ.','期待 = mong đợi.',[N('期待')]),
 ZH('明天见。','Míngtiān jiàn.','Hẹn gặp ngày mai.','Câu tạm biệt.',[O('待会儿见')])
];
