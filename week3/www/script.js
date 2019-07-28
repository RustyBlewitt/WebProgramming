let currentUser = null;


$(document).ready(function(){
    $("#loginform").submit(function(event){
        event.preventDefault(); // stop page refresh
        ajaxPost();
    });
    
    function showUserPage(customer){
        console.log(customer)
        $.ajax({
            type: "GET",
            url: window.location + 'www/loggedin',
            success: function(page){
                let imgpath = 'public/' + customer.img
                $('#loginResultDiv').html(page);
                $('#userName').html(customer.email);
                $('#userImage').attr('src', imgpath);
            }
                
        })
    }

    function ajaxPost(){
        var formData = {
            email: $("#email").val(),
            upwd: $("#upwd").val()
        }

        console.log(window.location + "api/login")
        

        $.ajax({ // Do ajax post
            type: "POST",
            contentType: "application/json",
            url: window.location + "api/login",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(customer) {
                console.log('customer = ', customer)
                if (customer.email == ''){
                    $("#errormsg").removeClass()
                    $("#loginform").removeClass();
                    $("#loginform").addClass("fail");
                }else{
                    $("#errormsg").removeClass()
                    $("#loginform").removeClass();
                    $("#loginform").addClass("success");
                    $("#errormsg").addClass("hideMessage")
                    showUserPage(customer);
                }

            },
            
            error: function(e) {
                alert("Error!");
                console.log("ERROR: ", e);
            },
        });
        
        // Reset FormData after Posting
        resetData();
    }
        
    function resetData(){
        $("#email").val("");
        $("#upwd").val("");
    }
});