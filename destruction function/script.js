const siswa = {
    nama : "mohamad andi muafak",
    umur : 19,
    tinggi : "172 cm",
    gender : "laki-laki",
    alamat : {
        desa: "barurejo",
        kecamatan: "siliragung",
    }
};
function printInfoSiswa ({nama, umur, tinggi, alamat: {desa}}) {
    console.log(nama, umur, tinggi, desa)
}
printInfoSiswa(siswa)