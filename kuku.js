    // document.getElementById("btn").onclick = function(){
    //     var column = document.frm.column.value;
    //     var line = document.frm.line.value;
    //     var colstart = document.frm.colstart.value;
    //     var listart = document.frm.listart.value;
    //     document.write("<table border id='tbl'>");
    //         for(var i = listart ; i <= line ; i++) {
    //             document.write("<tr>");
    //             for(var j = colstart ; j <= column ; j++) {
    //                 var ij = i*j 
    //                 if(ij%5==0){
    //                     document.write("<td style='background-color:red'>",  ij  , "</td>");
    //                 }else{
    //                     document.write("<td>",  ij  , "</td>");
    //                 }
    //             }
    //             document.write("</tr>");
    //         }
    //     document.write("</table>");
        
    //     var tbl = document.getElementById('tbl');

    //     for (var x = 0; x < line; x++) {
    //         for (var y = 0; y < column; y++) {
    //             tbl.rows[x].cells[y].style.backgroundColor = "white";
    //             var push = tbl.rows[x].cells[y];
    //             push.onclick = function() {
    //                 this.style.backgroundColor = 'blue';
    //             }
    //         }
    //     }
    // }
function hogehoge(){
    var column = document.frm.column.value;
    var line = document.frm.line.value;
    var colstart = document.frm.colstart.value;
    var listart = document.frm.listart.value;
    document.write("<table border id='tbl'>");
        for(var i = listart ; i <= line ; i++) {
            document.write("<tr>");
            for(var j = colstart ; j <= column ; j++) {
                var ij = i*j 
                if(ij%5==0){
                    document.write("<td style='background-color:red' onclick='fugafuga();'>",  ij  , "</td>");
                }else{
                    document.write("<td onclick='fugafuga();'>",  ij  , "</td>");
                }
            }
            document.write("</tr>");
        }
    document.write("</table>");
}
function fugafuga(){
    var column = document.frm.column.value;
    var line = document.frm.line.value;
    var colstart = document.frm.colstart.value;
    var listart = document.frm.listart.value;
    var tbl = document.getElementById('tbl');
    for (var x = 0; x < line; x++) {
        for (var y = 0; y < column; y++) {
            // tbl.rows[x].cells[y].style.backgroundColor = "white";
            var push = tbl.rows[x].cells[y];
            push.onclick = function() {
                this.style.backgroundColor = 'blue';
            }
        }
    }
}