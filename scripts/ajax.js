// $(function() {


    $('#btnLoadData').click(function() {
        console.log("clicked");
        
        let jsonURL = "demo.json";
        //assigns jsonURl variable as the info in a local file
    
        $.ajax({
            url: jsonURL,
            dataType: "json",
            success: function(data) {

                //goes through each element in the demo json file and prints it to the console
                $('input[type=radio]').each(function () {
                    if (data.tempoType === $(this).val())
                    {
                      $(this).prop('checked', true)
                        console.log($(this));
                   }
                });

            
                $.each(data, function (key, val) {
                    //step through results
                    console.log(key, val);
                    //get each data item
                    //put it in the right place
                    $(`#${key}`).val(val);
                    
                });
            }
        });
    });
    
    
    
    // end of doc ready f/n
    // });
    