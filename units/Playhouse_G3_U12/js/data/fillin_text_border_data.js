var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(242, 101, 33)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/demo.mp3',
      },
      {
        'url': '',
      },
      {
        'url': '',
      },
      {
        'url': '',
      }
  ],
}
var fillin_data = {
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_106/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "-18px"},
    "subTitleTextLeft"      : '<span class="orange_text">2</span> Write. ',
    "subTitleTextRight"     : "Read the sentences below. Then make a sentence using <span class='black_text'>as</span> + <span class='black_text'>adjective</span> + <span class='black_text'>as</span>.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p106write.mp3",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "optionsAudios"         : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "The eagle flies 3 metres high.<br>The seagull flies 3 metres high, too.[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/1-img-1.png","../images/pages/activities/1-img-2.png"],
          "images_name": [],
          "answer": ["The seagull flies as high as the eagle"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "The sea is clear blue.<br>Her eyes are clear blue.[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/1-img-3.png","../images/pages/activities/1-img-4.png"],
          "images_name": [],
          "answer": ["Her eyes are is as clear blue as the sea"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "My cousin is nice.<br>You are nice, too. [_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/1-img-5.png"],
          "images_name": [],
          "answer": ["You are as nice as my cousin"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }