//string in java script
    var string = "this"
     console.log(string)
     
     var name ="sanket"
     var rollno ="64"
     var message ="sanket is good boy"
     var chainel ="back to source"
     console.log(name,message,chainel,rollno); 
     
     var san =`${name} ${rollno} ${chainel}`;
     console.log(san);
     
     var len = chainel.length;
     console.log(`length of name is ${len}`);
     console.log("hello world");
     
     var y = new string("this is new string");
     console.log(y);
     document.getelementByID(`content`).innetrHTML=`<h3>this is an heading</h3>`;
     
     //String Function in java script

               //STRING IN JAVA SCRIPT 

       var str = "this is a string";
          console.log(str);

   //First occurence of a substring he will find the alphabeat number position

          var position = str.indexOf('a');
          console.log(position);

   //Last coourence of a substring he will find the befor one place position
          position = str.lastIndexOf('is');
          console.log(position)

  //Substring for a string
        var substr = str.slice(1,7);
        var substr = str.substring(1,5);
        var substr1 = str.substring(1,3);
        console.log(substr);

        var replaced = str.replace('string','snket');
        console.log = (str);
        console.log(replaced); 
    
  //lowercase also       
          console.log(str.toUpperCase());
          console.log(str.toLowerCase());


          var newSTring = str. concat('New string');
          console.log(newSTring);

          var strWithWhitespaces = "  this content white    space  ";
          console.log (strWithWhitespaces)
          console.log  (strWithWhitespaces.trim())
