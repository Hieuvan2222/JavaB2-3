// BT1
/**
 * Khối 1: Input
 *  + motNgay = 100.000, ngayLam 
 * 
 * Khối 2 :
 *  Tạo hàm , gắn hàm vào button
 *  trong hàm tạo biến và  công thức tính 
 * + tongLuong = motNgay * ngayLam
 * 
 * Khối 3 :Output
 *  + tongLuong
 */

function calcLuong() {
    var motNgay = 100000 ;
    var ngayLam = document.getElementById("soNgayLam").value ;

    var tongLuong = motNgay * ngayLam 
    document.getElementById("txtResult").innerHTML = "Lương " + tongLuong.toLocaleString() + "VNĐ"
}
document.getElementById("btnCalc").onclick = calcLuong ;




// BT2
/**
 * Khối 1 :Input
 * + soThuc1 ,soThuc2 ,soThuc3, soThuc4, soThuc5
 * Khối 2:
 *  Tạo hàm , gắn hàm vào button
 *  +trong hàm tạo biến và  công thức tính 
 *     trungBinh = ( soThuc1 + soThuc2 + soThuc3 +soThuc4 +soThuc5) / 5
 * 
 * Khối 3 :
 * Tính giá trị Trung Bình ( trungBinh )
 */


function calcTB() {
    var soThuc1 = document.getElementById("thucMot").value;
    var soThuc2 = document.getElementById("thucHai").value;
    var soThuc3 = document.getElementById("thucBa").value;
    var soThuc4 = document.getElementById("thucBon").value;
    var soThuc5 = document.getElementById("thucNam").value;

    var trungBinh = ( Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5 

    document.getElementById("txtResult2").innerHTML = " Giá Trị Trung Bình = " + trungBinh ;
    
}

// BT3
/**
 * Khối 1 :Input
 *  uSd = 23500 VND , tienDoi
 * Khối 2:
 * B1:Tạo hàm , gắn hàm vào button
 * B2:trong hàm tạo công thức 
 *  + soTien = tienDoi * uSd
 * Khối 3 :Output
 * soTien
 */
 function calcDT() {
    var uSd = 23500 ;
    var tienDoi = document.getElementById("soTien").value ;

    var soTien = tienDoi * uSd

    document.getElementById("txtMoney").innerHTML = soTien.toLocaleString() + "VNĐ"
 }
 document.getElementById("btnCalc2").onclick = calcDT ;


//  BT4 

/**
 * Khối 1: Input
 * chiuDai, chiuRong
 * Khối 2:
 * B1: Tạo Hàm , gắn hàm vào button
 * B2: Trong hàm tạo công thức 
 *  + chuVi= ( chiuDai + chiuRong) * 2
 * + dienTich = chiuDai * chiRong
 * Khối 3 :Ouput
 * chuVi , dienTich
 */
   function calcHCN() {
    var chiuDai = document.getElementById("chiuDai").value ;
    var chiuRong = document.getElementById("chiuRong").value ;
     var chuVi = ( Number(chiuDai) + Number(chiuRong)) * 2 ;
     var dienTich = chiuDai * chiuRong ;
     document.getElementById("txtHCN").innerHTML = "Chu vi = " + chuVi  + " <br> Diện Tích = " + dienTich ;
    
   }
   document.getElementById("btnCalc3").onclick = calcHCN ;
   

//    BT5
/**
 * Khối 1 : Input
 * Nhập số có 2 chữ số
 * num
 * Khối 2:
 * B1 :tạo hàm , gắn hàm vào buton
 *  B2: Trong hàm tạo công thức 
 *   + lấy số hàng chục 
 *      var  ten = Math.floor( num/10)
 *   + lấy số hàng đơn vị 
 *       var unit = num % 10
 *   + Tổng 2 kí số
 *      total = ten + unit
 * B3 : Thông báo kết quả
 * 
 * Khối 3 : Output
 *  tổng 2 chữ số từ số đã nhập
 * total
 */

function calcKS() {
    var num = document.getElementById("soThuc").value ;
     var ten = Math.floor( num / 10 );
     var unit = num % 10 ;

     total = ten + unit 
      document.getElementById("txtChange").innerHTML = " Tổng 2 kí số = " + total ;
}
document.getElementById("btnCalc4").onclick = calcKS ;
