//Alert in in-browser javascript - Does not return anythings
    //alert("This is the maeeage");

    //This is the Prompt side
    let name = prompt("What is your name?","Guest");
    console.log(name);

    let deletepost = confirm("Do you really want to delet this post?");
    
    if(deletepost){
       console.log("Your post is deleted successfully");
    }
   else{
       console.log("Your post is not deleted");
   }
   // console.log(delete);