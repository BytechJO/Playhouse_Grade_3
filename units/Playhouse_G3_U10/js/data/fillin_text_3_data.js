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
    "mainTitle"             : "../images/icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_91/GRAMMAR_PRACTICE.mp3",
    "mainTitleIconPos"      : {"right": "70px"},
    "subTitleTextLeft"      : '<span class="orange_text">1</span> Compare and write. ',
    "subTitleTextRight"     : "Compare the two things in a sentence. Use the adjectives given.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "none", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "optionsAudios"         : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"<b>1</b> &nbsp; big",
          "images": ["../images/pages/activities/1-img-1.png","../images/pages/activities/1-img-2.png"],
          "images_name": ["Jenny’s cake","Lisa’s cake"],
          "answer": ["Jenny’s cake is bigger than Lisa’s cake"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"<b>2</b> &nbsp; dark",
          "images": ["../images/pages/activities/1-img-3.png","../images/pages/activities/1-img-4.png"],
          "images_name": ["Nina’s hair","Maria’s hair"],
          "answer": ["Maria's hair is darker than Nina's hair"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"<b>3</b> &nbsp; happy",
          "images": ["../images/pages/activities/1-img-5.png","../images/pages/activities/1-img-6.png"],
          "images_name": ["Linda","Tam"],
          "answer": ["Tam is happier than Linda"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }