class HocSinh {
  constructor(diemToan, diemLy, diemHoa, diemVan, diemSu, diemDia, diemAnh) {
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemVan = diemVan;
    this.diemSu = diemSu;
    this.diemDia = diemDia;
    this.diemAnh = diemAnh;
    this.diemTrungBinh = this.tinhDiemTrungBinh();
  }
  tinhDiemTrungBinh(a, b, c, ...param) {
    let total1 = 0;
    const sum = a + b + c;
    for (let i = 0; i < param.length; i++) {
      total1 += param[i];
    }
    return (sum + total1) / (3 + param.length);
  }
}

const getElement = (id) => {
  return document.getElementById(id);
};

getElement("btnKhoi1").onclick = () => {
  const diemToan = +getElement("inpToan").value;
  const diemLy = +getElement("inpLy").value;
  const diemHoa = +getElement("inpHoa").value;

  const sinhVienK1 = new HocSinh(diemToan, diemLy, diemHoa);
  getElement("tbKhoi1").innerHTML = sinhVienK1
    .tinhDiemTrungBinh(diemToan, diemLy, diemHoa)
    .toFixed(2);
  console.log(sinhVienK1);
};
getElement("btnKhoi2").onclick = () => {
  const diemVan = +getElement("inpVan").value;
  const diemSu = +getElement("inpSu").value;
  const diemDia = +getElement("inpDia").value;
  const diemAnh = +getElement("inpEnglish").value;

  const sinhVienK2 = new HocSinh(diemVan, diemSu, diemDia, diemAnh);
  getElement("tbKhoi2").innerHTML = sinhVienK2
    .tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemAnh)
    .toFixed(2);
};
