$(document).ready(function(){
    $(".submit").click(function(){
        var src = 'https://joeschmoe.io/api/v1'
        var male = $("input[id=checkbox-1]").is(':checked');
        var female = $("input[id=checkbox-2]").is(':checked');
        if(male && !female){
            src += "/male";
        }else if(!male && female){
            src += "/female";
        }else if(male && female){
            src = src
        }

        let name = $("#name").val();
        if(name){
            $("#imgChange").attr("src",`${src}/${name}`);
        }else{
            swal({
                title: "Please enter name",
                icon: "error"
              });
            return false;
        }
    })
})
