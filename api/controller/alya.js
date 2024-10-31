const Pariwisata = require("../model/alya");

const createPariwisata= (req,res) =>{
    const pariwisata = new Pariwisata({
        namaPariwisata : req.body.namaPariwisata,
        alamat : req.body.alamat,
        provinsi : req.body.provinsi
    });

    pariwisata.save()
    .then((createdPariwisata)=>{
        res.status(201).json({
            message : "Data Berhasil Disimpan",
            pariwisataId : createdPariwisata._id
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message : "internal server error"
        });
    });
};

module.exports = {createdPariwisata}