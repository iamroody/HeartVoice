var commonSentences = {
    '基本': [
        '我是聋哑人，请点红色按钮对我说话',
        '不好意思，请问',
        '你叫什么名字',
        '你多大年纪',
        '请帮我个忙好吗',
        '这是什么意思?',
        '我犯了一个错误',
        '您今年多大年纪了',
        '这是什么意思?',
        '有人在吗',
        '你在做什么呀?'
    ],
    '吃饭': [
        '要等多长时间',
        '我们要点菜',
        '我要矿泉水',
        '服务员，请把菜单拿来吧',
        '请拿点儿餐巾纸来',
        '我要可乐',
        '请再加一点',
        '这个是免费的吗',
        '服务员，我要买单',
        '打个折可以吗'
    ],
    '购物': [
        '请把那个给我看一下',
        '这个可以试穿一下吗',
        '试衣间在哪里',
        '还有别的么',
        '这个多少钱',
        '请把我的礼物包装一下',
        '我想把这个换一换',
        '请给我再拿个大一点的',
        '请给我再拿个小一点的'
    ],
    '外出': [
        '请问这里是什么地方',
        '请问 在哪里',
        '走着去需要多长时间啊',
        '请问附近有地铁站吗',
        '请问附近有公交车站吗',
        '请问在哪里买票',
        '就在前面停车吧',
        '这是什么',
        '洗手间在哪里'
    ],
    '旅游': [
        '门票在哪里买',
        '我要买 张门票',
        '您能给我们拍张照片吗',
        '请按这个按钮',
        '这里可以照相吗',
        '请问这里允许用闪光灯吗'
    ],
    '看病': [
        '我来看病',
        '请问在哪里可以挂号',
        '我这里很疼',
        '我感冒了',
        '我肚子疼',
        '我浑身酸痛',
        '我的脚扭伤了',
        '这附近哪里有医院'
    ],
    '住宿': [
        '有今天晚上能住的房间吗',
        '有没有更便宜的',
        '入住手续在哪里办理',
        '我想办理入住手续',
        '一晚上多少钱',
        '早餐有什么能吃的',
        '请把我的房间打扫一下',
        '请给我换一个房间',
        '我把钥匙落在房间里了',
        '早餐在哪儿吃',
        '对不起，我忘了我的房间号了'
    ],
    '紧急': [
        '救命啊，救命啊',
        '请帮帮我',
        '请问公安局在哪里',
        '请问哪里可以广播寻找走失儿童',
        '我的钱包被偷了'
    ]
};

function initCommonSentences() {
  var categories = $('.categories');

  var count = 0;
  for (var category in commonSentences) {
    count++;
    var id = 'category_' + count;
    var categoryElem = $("<figure class='category'>");
    var categoryImgLink = $("<a href='#" + id + "' data-transition='fade'>");
    categoryImgLink.html("<i class='category-" + count + "'>");
    var categoryCaption = $('<figcaption>').html(category);
    categoryElem.append(categoryImgLink).append(categoryCaption);

    categories.append(categoryElem);
    initCategoryPanel(category, id);
  }

}

function initCategoryPanel(category, id) {
    $.ui.addContentDiv(id, "<ul class='sentences'></ul>", category);

    var categorySentencesElem = $("#" + id).find('ul');
    var sentenceElems = $.each(commonSentences[category], function(index, sentence) {
      categorySentencesElem.append("<li><a href='#main' data-transition='fade'>" + sentence + "</a></li>");
    });

    categorySentencesElem.find('li a').on('click', function() {
      $('#synthesize_content').val($(this).text());
    });
}
