$(document).ready(function(){

    $(".sub").click(function(){
        
        var firstname = $('#Fname').val();
        var lastname = $('#Lname').val();
        var mobile = $('#Mobile').val();
        var password = $('#Password').val();
        var confirmpassword = $('#ConfirmPassword').val();
        var email = $('#Email').val();
        var state = $('#State').val();
        var city = $('#City').val();
        var address = $('#Address').val();
      
      if(firstname == "")
        {
            alert("Please enter your name");
        //   $('#Fname').after("<p>enter your name</p>");
            return false; 
        }
      
      
        else if(firstname.length <=5)
            { 
                $('#Fname').after("<p>name length morethan 3 </p>");
                return false;
            }
            
      
     
     else if(lastname == "")
        {
            alert("Please enter your lastname");
        //   $('#Fname').after("<p>enter your lastname</p>");
            return false; 
        }
       

        else if(mobile == ""){
            alert("Please enter your mobile number");
            //   $('#Fname').after("<p>enter your phonenum</p>");
            return false; 
         }

        else if(mobile.length<=9 || mobile.length >=11)
        {
                alert("phone number must be 10 digits");
            //   $('#Fname').after("<p>enter your phonenum</p>");
                return false; 
        }
        


            else if(password == ""){
                alert("Please enter your password");
                //   $('#Fname').after("<p>enter your password</p>");
                return false; 
             }
             
                else if(password.length<=8)
                {
                    alert("Password must be 8 characters long");
                //   $('#Fname').after("<p>password must be 8 characters long</p>");
                    return false; 
                }
             
    
          
    
             else if(confirmpassword!= password){
                alert("Password and Confirm Password must match");
                //   $('#Fname').after("<p>password and confirm password must match</p>");
                return false; 
             }
                
           
            else if(email == ""){
                alert("Please enter your email");
                //   $('#Fname').after("<p>enter your Email</p>");
                return false; 
     
            }
          
            else if(state == ""){
                alert("Please select your state");
                //   $('#Fname').after("<p>select your state</p>");
                return false; 
            }
           
            else if(city == ""){
                alert("Please select your city");
                //   $('#Fname').after("<p>select your city</p>");
                return false; 
            }
           
            else if(address == ""){
                alert("Please enter your address");
                //   $('#Fname').after("<p>enter your address</p>");
                return false; 
            }
            else{
                alert("Form submitted successfully");
                return true;  // form is valid, submit it
 
            }
       
        
            
       

    
  });


    
  });