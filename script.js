$("#form1").validate({
    rules : {
        fullName: "required",
        dob : "required",
        email : {
            required : true,
            email : true,
        },
        password : {
            required : true,
            minlength : 5,
        },
        address : "required",
        city : "required",
        state : "required",
        zip : "required",
        check : "required",

    },
    messages : {
        fullName: "enter name",
        dob : "enter date of birth",
        email :{
            required : "please enter email",
            email : "please enter valid email",
        },
        password : {
            required : "enter password",
            minlength : "password must be 5 char long"
        },
        address : "enter address",
        city : "enter city",
        state : "select state",
        zip : "enter zip code",
        check : "click the box to agree",

    },
});