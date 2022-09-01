$(document).ready(function () {
  $("input").blur(function () {
    var fname = $("#f_name").val();
    // var mname= $ ("#m_name").val();
    // var lname= $ ("#l_name").val();
    // var dob= $ ("#dob").val();
    // var gender= $ ("#gender").val();
    // var add1= $ ("#add1").val();
    // var add2= $ ("#add2").val();
    // var city= $ ("#city").val();
    // var state= $ ("#state").val();
    // var code= $ ("#code").val();
    // var mail= $ ("#mail").val();
    // var contact= $ ("#contact").val();
    // var comment= $ ("#comment").val();
    if (fname == "") {
      $("#f_name").css("border", "1px solid red");

      $("#alrt1").text("This Input Can't Be Empty");
    }
    // if(mname==""){
    //     $ ("#m_name").css("border", "1px solid red");

    //     $ ("#alrt2").text("This Input Can't Be Empty");
    // }
    // if(lname==""){
    //     $ ("#l_name").css("border", "1px solid red");

    //     $ ("#alrt3").text("This Input Can't Be Empty");
    // }
    // if(dob==""){
    //     $ ("#dob").css("border", "1px solid red");

    //     $ ("#alrt4").text("This Input Can't Be Empty");
    // }
    // if(gender==""){
    //     $ ("#gender").css("border", "1px solid red");

    //     $ ("#alrt5").text("This Input Can't Be Empty");
    // }
    // if(add1==""){
    //     $ ("#add1").css("border", "1px solid red");

    //     $ ("#alrt6").text("This Input Can't Be Empty");
    // }
    // if(add2==""){
    //     $ ("#add2").css("border", "1px solid red");

    //     $ ("#alrt7").text("This Input Can't Be Empty");
    // }
    // if(city==""){
    //     $ ("#city").css("border", "1px solid red");

    //     $ ("#alrt8").text("This Input Can't Be Empty");
    // }
    // if(state==""){
    //     $ ("#state").css("border", "1px solid red");

    //     $ ("#alrt9").text("This Input Can't Be Empty");
    // }
    // if(code==""){
    //     $ ("#code").css("border", "1px solid red");

    //     $ ("#alrt10").text("This Input Can't Be Empty");
    // }
    // if(mail==""){
    //     $ ("#mail").css("border", "1px solid red");

    //     $ ("#alrt11").text("This Input Can't Be Empty");
    // }
    // if(contact==""){
    //     $ ("#contact").css("border", "1px solid red");

    //     $ ("#alrt12").text("This Input Can't Be Empty");
    // }
    else {
      $("#alrt1").text("");
      $("#alrt2").text("");
      $("#alrt3").text("");
      $("#alrt4").text("");
      $("#alrt5").text("");
      $("#alrt6").text("");
      $("#alrt7").text("");
      $("#alrt8").text("");
      $("#alrt9").text("");
      $("#alrt10").text("");
      $("#alrt11").text("");
      $("#alrt12").text("");
      $("#f_name").css("border", "");
    }
  });

  $("#submit").click(function () {
    var fname = $("#f_name").val();
    var mname = $("#m_name").val();
    var lname = $("#l_name").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var add1 = $("#add1").val();
    var add2 = $("#add2").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var code = $("#code").val();
    var mail = $("#mail").val();
    var contact = $("#contact").val();
    var comment = $("#comment").val();
    var phno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    localStorage.setItem("textValue1", fname);
    localStorage.setItem("textValue2", mname);
    localStorage.setItem("textValue3", lname);
    localStorage.setItem("textValue4", dob);
    localStorage.setItem("textValue5", gender);
    localStorage.setItem("textValue6", add1);
    localStorage.setItem("textValue7", add2);
    localStorage.setItem("textValue8", city);
    localStorage.setItem("textValue9", state);
    localStorage.setItem("textValue10", code);
    localStorage.setItem("textValue11", mail);
    localStorage.setItem("textValue12", contact);
    localStorage.setItem("textValue13", comment);

    if (fname == "") {
      $("#alrt1").text("Please Enter Character");
      return false;
    }
    if (mname == "") {
      $("#alrt2").text("Please Enter Character");
      return false;
    }
    if (lname == "") {
      $("#alrt3").text("Please Enter Character");
      return false;
    }
    if (dob == "") {
      $("#alrt4").text("Please Enter Your DOB");
      return false;
    }
    if (gender == "") {
      $("#alrt5").text("Please Select Your Gender");
      return false;
    }
    if (add1 == "") {
      $("#alrt6").text("Please Enter Character");
      return false;
    }
    if (add2 == "") {
      $("#alrt7").text("Please Enter Character");
      return false;
    }
    if (city == "") {
      $("#alrt8").text("Please Enter Character");
      return false;
    }
    if (state == "") {
      $("#alrt9").text("Please Enter Character");
      return false;
    }
    if (code == "") {
      $("#alrt10").text("Please Enter Character");
      return false;
    }
    if (mail == "") {
      $("#alrt11").text("Please Enter Character");
      return false;
    }
    if (contact == "") {
      $("#alrt12").text("Please Enter Character");
      return false;
    }else {
      window.location.replace("receipt.html");
      // $ ("#nme").text(fname);
      // document.write("ok");
    }
  });
});
