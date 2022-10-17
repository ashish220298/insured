$(document).ready(function () {
var dataset = [];

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            console.log(data);
            //var json = JSON.stringify(data);
            //console.log(json);
            var products = data['data'];
            console.log(products)

            //agent info
            var p = products[0];
            console.log(p);
            //user Info
            var p2 = products[1];
            console.log(p2);
            //AccountInfo
            var p3 = products[2];
            console.log(p3);

            //company info
            var p4 = products[3];
            console.log(p4);

            //plocy info
            var p5 = products[4];
            console.log(p5);

            //category Info
            var p6 = products[5];
             console.log(p6);

           console.log(p.length);
            

             //console.log(json.firstname);
                var i =0;
                var j = 0;
                 for (j = 0; j < p.length; j++) {
                      var tempData = [];
                      tempData.push(p[i].name);
                     // console.log(p[i].name);

                      //for(var k = 0;k<6;k++){
                          tempData.push(p2[i].firstname);
                          //console.log(p2[k].firstname);
                          tempData.push(p5[i].PolicyStartDate);
                          //console.log(p2[k].Dob);
                          tempData.push(p5[i].PolicyEndDate);
                          //console.log(p2[k].address);
                          tempData.push(p5[i].PolicyMode);
                          //console.log(p2[k].phoneNumber);
                           tempData.push(p5[i].PolicyNumber);
                           //console.log(p2[i].email);
                          tempData.push(p5[i].PolicyType);
                          //console.log(p2[k].state);
                          tempData.push(p2[i].userType);
                          //console.log(p2[k].userType);
                          tempData.push(p3[i].AccountName);
                          tempData.push(p4[i].company_name);
                          tempData.push(p6[i].policyCategory);


                      //}
                      


                      dataset.push(tempData);
                      i = i+1;

                 }

                 console.log(tempData);
                
                 



                
             
             var tb = $("#AttachmentsList").dataTable();
             tb.fnClearTable();
             if (dataset.length > 0) {
                 tb.fnAddData(dataset);
             }
        });
    });
 

 $("#addpolicy").click(function () {
     $.ajax({
         type: 'GET',
         url: '/addpolicyinfo',
         success: function (data) {
            
         }
     });
 });

 

    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            console.log(data);
            $("#message").show().html(data['success']);
        });
    });



           

  $("#AttachmentsList").dataTable({
        data: dataset,
        responsive: true,
        searching: true,
        paging: true,

        columns: [{
                title: "Agent Name"
            },
            {
                title: "User Name"
            },
            {
                title: "PolicyStartDate"
            },{
                title: "PolicyEndDate"
            }, 
            {
                title: "PolicyMode"
            },{
                title: "PolicyNumber"
            },{
                title: "PolicyType"
            },{
                title: "userType"
            },{
                title: "Account Name"
            }, {
                title: "Company Name"
            }, {
                title: "Policy Category"
            }
        ]
    });


     $('#AttachmentsList tbody').on('click', 'tr', function () {
         var table = $('#AttachmentsList').DataTable();
         var data = table.row(this).data();
         console.log(data);
         $("#UserName").html('Policy Info For: '+htmlEncode(data[1]));
         $("#policystartdate").html('Policy start date: ' + htmlEncode(data[2]));
         $("#policyenddate").html('Policy End Date: ' + htmlEncode(data[3]));
         $("#policymode").html('Policy Mode: ' + htmlEncode(data[4]));
         $("#policynumber").html('Policy Number: ' + htmlEncode(data[5]));
         $("#policytype").html('Policy Type: ' + htmlEncode(data[6]));
         
        
         
         $("#AgentName").html('Agent Name: ' + htmlEncode(data[0]));
         $("#AccountName").html('Account Name: ' + htmlEncode(data[8]));
         $("#CompanyName").html('Company Name: ' + htmlEncode(data[9]));
         $("#PolicyCategory").html('Policy Category: ' + htmlEncode(data[10]));


     });

     function htmlEncode(value) {
         return $('<div/>').text(value).html();
     }

}); 