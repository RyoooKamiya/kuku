//     // document.getElementById("btn").onclick = function(){
//     //     var column = document.frm.column.value;
//     //     var line = document.frm.line.value;
//     //     var colstart = document.frm.colstart.value;
//     //     var listart = document.frm.listart.value;
//     //     document.write("<table border id='tbl'>");
//     //         for(var i = listart ; i <= line ; i++) {
//     //             document.write("<tr>");
//     //             for(var j = colstart ; j <= column ; j++) {
//     //                 var ij = i*j 
//     //                 if(ij%5==0){
//     //                     document.write("<td style='background-color:red'>",  ij  , "</td>");
//     //                 }else{
//     //                     document.write("<td>",  ij  , "</td>");
//     //                 }
//     //             }
//     //             document.write("</tr>");
//     //         }
//     //     document.write("</table>");
        
//     //     var tbl = document.getElementById('tbl');

//     //     for (var x = 0; x < line; x++) {
//     //         for (var y = 0; y < column; y++) {
//     //             tbl.rows[x].cells[y].style.backgroundColor = "white";
//     //             var push = tbl.rows[x].cells[y];
//     //             push.onclick = function() {
//     //                 this.style.backgroundColor = 'blue';
//     //             }
//     //         }
//     //     }
//     // }
// function hogehoge(){
//     var column = document.forms.frm.column.value;
//     var line = document.forms.frm.line.value;
//     var colstart = document.forms.frm.colstart.value;
//     var listart = document.forms.frm.listart.value;
//     var table = document.createElement("table");
//     document.write("<table border id='tbl'>");
//         for(var i = listart ; i <= line ; i++) {
//             document.write("<tr>");
//             for(var j = colstart ; j <= column ; j++) {
//                 var ij = i*j 
//                 if(ij%5==0){
//                     document.write("<td style='background-color:red' onclick='fugafuga();'>",  ij  , "</td>");
//                 }else{
//                     document.write("<td onclick='fugafuga();'>",  ij  , "</td>");
//                 }
//             }
//             document.write("</tr>");
//         }
//     document.write("</table>");
//}

function printKukuTable(){
    var column = document.forms.frm.column.value;//列終了数（横）
    var line = document.forms.frm.line.value;//行終了数（縦）
    var colstart = document.forms.frm.colstart.value;//列開始数（横へ）　
    var listart = document.forms.frm.listart.value;//行開始数（縦へ）
    var divTable = document.getElementById('table');//tableをdivTableに代入

    var content = "<table border id='tbl'>";//変数contentにtable代入　テーブルにidをつけてfugafugaで使用する
        for(var i = listart ; i <= line ; i++) {//縦方向に繰り返し追加
            content += "<tr>";//行追加
            for(var j = colstart ; j <= column ; j++) {//横方向繰り返し追加
                var ij = i*j //i行目の数*j番目の数
                if(ij%5==0){//５の倍数なら背景赤
                    content += "<td style='background-color:red' onclick='fugafuga(this);'>"+  String(ij)  + "</td>";
                    //セル追加して文字列にしたijを表示　そのセルオンクリックで関数fugafuga呼び出し
                    //fugafuga(this)　引数thisはクリックしたセルを指す
                }else{
                    content += "<td onclick='fugafuga(this);'>" +  String(ij)  + "</td>";
                    
                }
            }
            content += "</tr>";//行閉じ
        }
    content += "</table>";//テーブル閉じ
    divTable.innerHTML = content;//divTable（HTMLで作ったテーブル）の中（innerHTML）にcontent（テーブルの中身）をいれる
}

function fugafuga(s){//thisがsに入る
    var line = document.forms.frm.line.value;//列終了数（横）
    var column = document.forms.frm.column.value;//行終了数（縦）
    var tbl = document.getElementById('tbl');//printKukuTableで作ったテーブル代入
    for (var x = 0; x < line; x++) {//行　縦を見てる　tr　行数繰り返す
        for (var y = 0; y < column; y++) {//セル　横を見てる　td　セル数繰り返す
            tbl.rows[x].cells[y].style.backgroundColor = "white";//x行のy番目のセルを背景白　繰り返してすべて白くする
            s.style.backgroundColor = 'blue';//sつまりthisつまりクリックしたセルを背景青
            //クリックするたびに全セル白くなりクリックしたセルが青くなる


            //課題　クリックしたセルの行と列を青くする　列位置はcellindex


            // if(s.cellindex==){//列 cellindexがクリックされたセルとおなじ　または　行 trがクリックされた行と同じ
            //     s.style.backgroundColor = 'blue';//青
            // }else{
            //     tbl.rows[x].cells[y].style.backgroundColor = "white";//白
            // }
        }
    }
}



// // 表の動的作成
// function makeTable(data, tableId){
//     // 表の作成開始
//     var rows=[];//行配列
//     var table = document.createElement("table");//HTML 要素を生成
//     // 表に2次元配列の要素を格納
//     for(i = 0; i < data.length; i++){//配列数　data.lengthは４
//         rows.push(table.insertRow(-1));  //pushメソッドでrows（配列）に追加　insertRowで行の追加
//         for(j = 0; j < data[0].length; j++){//data[0].lengthはその行の中身の数　各３
//             cell=rows[i].insertCell(-1);//rows[i]にセル追加　cellに代入
//             cell.appendChild(document.createTextNode(data[i][j]));//cell.appendChild　cellに子要素追加　createTextNodeでdataのi行目のj番目に
//             // // 背景色の設定
//             // if(i==0){
//             //     cell.style.backgroundColor = "#bbb"; // ヘッダ行
//             // }else{
//             //     cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
//             // }
//         }
//     }
//     // 指定したdiv要素に表を加える
//     document.getElementById(tableId).appendChild(table);
// }
// window.onload = function(){ 
// // 表のデータ
// var data = [[11, 12, 13],
//             [21, 22, 23],
//             [31, 32, 33],
//             [41, 42, 43]];

// // 表の動的作成
// makeTable(data,"table");
// };