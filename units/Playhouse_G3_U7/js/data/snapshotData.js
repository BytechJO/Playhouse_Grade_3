var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/page_60/pizza.mp3","../audios/page_60/dough.mp3","../audios/page_60/sauce.mp3","../audios/page_60/sprinkle.mp3","../audios/page_60/cheese.mp3","../audios/page_60/add.mp3","../audios/page_60/pepperoni.mp3","../audios/page_60/slice.mp3"],
      "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png"],
      "word": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>","<span>add</span>","<span>pepperoni</span>","<span>slice</span>"],
      "imagePlacePos":[[1,1,1],[1,1,1],[1,0,1]]
        }
  ],"popuptitle": "What I Want To Know:"
}

var snapshotPopup_data="<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

var Popups_data = {
  "slides": [
    {
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_60/WORD_POWER.mp3",
        "titleTexts" : ["<span class='orange_text'>1</span> Listen and say the words.", "<span class='orange_text'>2</span> Listen and point.", "<span class='orange_text'>3</span> Read."],
        "titleIcons" : ["", "", "../images/pages/page-1/q-1-icon-3.png"],
        "titlesAudio" : ["../audios/page_60/1_Listen_and_say_the_words.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 apartment building","2 building", "3 tent","4 farm","5 villa", "6 mobile home","7 castle","8 house", "9 steps","10 roof", "11 balcony", "12 window", "13 front door", "14 front porch", "15 front garden"],
        "audio": ["../audios/page_60/1_apartment_building.mp3","../audios/page_60/2_building.mp3", "../audios/page_60/3_tent.mp3",
                  "../audios/page_60/4_farm.mp3","../audios/page_60/5_villa.mp3","../audios/page_60/6_mobile_home.mp3",
                  "../audios/page_60/7_castle.mp3","../audios/page_60/8_house.mp3","../audios/page_60/9_steps.mp3",
                  "../audios/page_60/10_roof.mp3","../audios/page_60/11_balcony.mp3","../audios/page_60/12_window.mp3",
                  "../audios/page_60/13_front_door.mp3","../audios/page_60/14_front_porch.mp3","../audios/page_60/15_front_garden.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_60/WORD_POWER.mp3",
        "titleTexts" : ["<span class='orange_text'>4</span> You do it."],
        "titleIcons" : ["../images/pages/sb-icons/conv_3_icon.png"],
        "titleTextRight": "<span class='orange_text'> Ask and answer.</span>",
        "titlesAudio" : ["../audios/new/askanswer.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/page_60/Pg5_2.2_Adult Lady.mp3","../audios/page_60/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["apartment building","building", "tent","farm","villa", "mobile home","castle","house", "steps","roof", "balcony", "window", "front door", "front porch", "front garden"],
  "points"  : ["../images/pages/page-1/intro-1.png",
              "../images/pages/page-1/intro-2.png",
              "../images/pages/page-1/intro-3.png",
              "../images/pages/page-1/intro-4.png",
              "../images/pages/page-1/intro-5.png",
              "../images/pages/page-1/intro-6.png",
              "../images/pages/page-1/intro-7.png",
              "../images/pages/page-1/intro-8.png",
              "../images/pages/page-1/intro-9.png",
              "../images/pages/page-1/intro-10.png",
              "../images/pages/page-1/intro-11.png",
              "../images/pages/page-1/intro-12.png",
              "../images/pages/page-1/intro-13.png",
              "../images/pages/page-1/intro-14.png",
              "../images/pages/page-1/intro-15.png",

            ],
 "postions"  : ["left:86px; top:112px;",
                "left:90px; top:208px;",
                "left:93px; top:385px;",
                "left:87px; top:560px;",
                "left:1053px; top:220px;",
                "left:1053px; top:395px;",
                "left:1053px; top:574px;",
                "left:1032px; top:647px;",//8
                "left:1115px; top:650px;",
                "left:494px; top:74px;",
                "left:659px; top:388px;",
                "left:360px; top:522px;",
                "left:633px; top:620px;",
                "left:739px; top:621px;",
                "left:436px; top:668px;",

              ],
  "imagesAudio" :["../audios/page_60/1_apartment_building.mp3","../audios/page_60/2_building.mp3", "../audios/page_60/3_tent.mp3",
                  "../audios/page_60/4_farm.mp3","../audios/page_60/5_villa.mp3","../audios/page_60/6_mobile_home.mp3",
                  "../audios/page_60/7_castle.mp3","../audios/page_60/8_house.mp3","../audios/page_60/9_steps.mp3",
                  "../audios/page_60/10_roof.mp3","../audios/page_60/11_balcony.mp3","../audios/page_60/12_window.mp3",
                  "../audios/page_60/13_front_door.mp3","../audios/page_60/14_front_porch.mp3","../audios/page_60/15_front_garden.mp3"]
}