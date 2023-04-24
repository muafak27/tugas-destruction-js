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
const {nama, umur:old, tinggi, alamat: {desa, kecamatan}, kabupaten="Banyuwangi"} = siswa;
console.log (nama, old, tinggi, desa, kecamatan, kabupaten);