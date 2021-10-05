function VanDongVien( ma_VDV,hoten,ngay_sinh,giai_Thuong) {
  this.ma_VDV=ma_VDV;
  this.hoten=hoten;
  this.ngay_sinh=ngay_sinh;
  this.giai_Thuong=giai_Thuong;
  this.kiemTraDieuKien=function(ngaysinh){
      const date = new Date();
      const year = date.getFullYear();
      const calc=date - Number(this.ngay_sinh.slice(-4));
      if(calc>=15)
      {
        return true;
      }
      return false;
  }
  this.themGiaiThuong=function(){
        const add=prompt("mời nhập tên giải thưởng");
        this.giai_Thuong.push(add);
  } 
  this.danhSachGiaiThuong=function(){
        return this.giai_Thuong;
  }
}
const hoang=new VanDongVien('1231233','Nguyễn hiệp Nhất','12/01/2000',[]);
console.log(hoang);