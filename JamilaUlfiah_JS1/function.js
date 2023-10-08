function cekKodeBarang(kode) {
    var kodeValid = ["BB01", "BBD2", "BC32", "BA94"];
  
    if (kodeValid.includes(kode)) {
      return "Kode barang valid.";
    } else {
      return "Kode barang tidak valid.";
    }
  }
  
  var kode = "BB01";
  var hasilCek = cekKodeBarang(kode);
  console.log(hasilCek); 
  
  
