﻿(function(){
    $(document).ready(function(){
        
        /** 
            Retrieves patient information from server and inserts it into the DOM.
            Adds visual anminations
        **/
        $.get('/api/patients', function(data, status){
            for(var i in data){
                var     id = data[i]._id;
                        name = data[i].firstname + " " + data[i].lastname
                $(".patientList").append("<li id='" + id + "' class='patient'><h2 style='cursor:pointer'>"+ name + "</h2>");

                if(data[i].formrecords.length > 0){
                    $("#"+id).append("<div class='lastRecord expandlist'></div>");
                    var lastrecordDiv = $("#"+id+" .lastRecord");
                    lastrecordDiv.append("<h3>Senast ifyllda formulär</h3>");
                    lastrecordDiv.append("<div class='lastRecordExpand'></div>");
                    var lastrecord = data[i].formrecords[0];
                    $("#"+id+" .lastRecord div").append( "<p>" +
                                                        "Upplevd smärta: " + lastrecord.pain + "<br />" +
                                                        "Smärtstillande: " + lastrecord.painKillers + "<br />" +
                                                        "Uppskattad narkosnivå: " + lastrecord.narcosis + "<br />" +
                                                        "Jobbigast just nu: " + lastrecord.worstThing + "<br />" +
                                                        "Återgått till normala rutiner: " + lastrecord.routine + "<br />" +
                                                        "Återgått till dagaktivitet / arbete: " + lastrecord.dailyAcitvity + "<br />" +
                                                        "Nöjdhet med behandling: " + lastrecord.satisfied + "<br /></p>");
                }
                
                $("#"+id).append("<div class='recordlistDiv expandlist'></div>");
                var recordlistDiv = $("#"+id+ " .recordlistDiv")
                recordlistDiv.append("<h3>Alla ifyllda formulär</h3>");
                recordlistDiv.append("<ul class='recordList'></ul>");
                
                
                for(var j in data[i].formrecords){
                    recordlistDiv.find(".recordList").append("<li><a href=''>Formulär "+ j +"</a>");
                }
            }
            
            //Open patient detail-view
            $(".patientList").delegate('.patient', 'click',function(e){ 
                var id = $(this).attr('id');
                $(location).attr('href',window.location.href + "/" + id );
                e.stopPropagation();
            });
            
            //Slide-toggle for patients
            $(".lastRecord").click(function(e){
                $(this).find(".lastRecordExpand").slideToggle("slow");
                e.stopPropagation();
            });
            
            //Slide-toggle for patients
            $(".recordlistDiv").click(function(e){
                $(this).find(".recordList").slideToggle("slow");
                e.stopPropagation();
            });

        });
        
        
    });
})();
