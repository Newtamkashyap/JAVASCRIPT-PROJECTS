function Deleteclick(){
    flag= confirm("delete \n record will be deleted");
    if (flag ==true){
       // document.write("<b><i><font color=red> record delete</font></i></b><br><a href=index1.html>back</a>")
       //document.querySelector("p").innerText = "record deleted successfully";
       //document.querySelector("h3").innerText = "record deleted confirmed"
       //document.querySelector("input[type=text]").placeholder="record deleted"
      // document.querySelector("p").innerHTML="<font color= red>RECORD DELETED</font>";
      document.querySelector("p").outerHTML="<font color= red>RECORD DELETED</font>";
      
    }
    else{
        alert("you canceled")
    }
   
}