/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{html , js ,jsx}" ],
  theme: {
    extend: {
      width : {
        "2.5/5" : "48.68%" ,
        "0.5/5" : "31.6%" ,
        '29':'118px',
        '85':'360px',

        
      } ,
      height : {
        "23" :'90px' ,

      } ,
      maxWidth :{
        '100' : '770px' ,
        "83" : "342px" ,
        '105': '778px',
        '110' : '1216px' ,
        // "120" : "1216px" ,
        "82" : "377px" ,
        "82.5" : "384px" ,
        "84" : "412px" ,






      } ,
      gap : {
        '5.5' : '28px' ,
        '1.5' : '2px' ,
        '6.5' : '14px'
      } ,
      
      spacing :{
        '7.5' : '30px' ,
        '23' : '90px' ,
        '0.5' : '2px' ,
        '2.5' : '10px' ,

  

      },
      borderRadius:{
        'xl3.5' : '29px'

  

      },
      colors:{
        "myprimary" : '#1A1A1A' ,
        "mysecondary" :'#090D1F' ,
        "myborder" :'#00000057' ,
        "mypurble" :' #6941C6',
        "mythird" :' #667085',
        "myfourth" :' #3538CD',
        "myfifth" :' #C11574',
        "mysix" :'#F9F5FF',
        'active' :'#7F56D9',
        'inputborder' :'#D0D5DD',
        'darkfont' :'#C0C5D0'
        


      },
      fontSize: {
        '110xl': '243.8px',
        '10xl': '160.8px',

      },

    },
  },
  plugins: [],

}


