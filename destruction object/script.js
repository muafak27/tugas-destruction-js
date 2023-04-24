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
const {nama, umur, tinggi, alamat: {desa, kecamatan}} = siswa;
console.log (nama, umur, tinggi, desa, kecamatan);