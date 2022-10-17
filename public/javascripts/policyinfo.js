$(document).ready(function () {
     $("#add").click(function () {
         var policynumber = $("#policyNumber").val();
         var policystartdate = $("#policyStartDate").val();
         var policyenddate = $("#policyEndDate").val();
         var policymode = $("#policyMode").val();
         var policyType = $("#policyType").val();

         var category = $("#category").val();
         var companyName = $("#companyName").val();
         var userName = $("#userName").val();

         var userinfo = {
             'firstname': userName
         };


         var categoryinfo = {
             'policyCategory': category
         };

         var companyNameinfo = {
             'company_name': companyName
         };
         


 

         var policyInfoData = {
             'PolicyNumber': policynumber,
             'PolicyStartDate': policystartdate,
             'PolicyEndDate': policyenddate,
             'PolicyMode': policymode,
             'PolicyType': policyType,
             'User': userinfo,
             'PolicyCategory': categoryinfo,
             'PolicyCarrier': companyNameinfo


         };

         console.log(policyInfoData);

         $.ajax({
             type: 'POST',
             url: '/addpolicyinfodata',
             data: policyInfoData,
             success: function (data) {
                 $("#message").show().html(data['success']);
             }
         });
     });


});