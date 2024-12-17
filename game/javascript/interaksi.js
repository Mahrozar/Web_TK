function tampilkanBangun(bangun) {
    const konten = document.getElementById('konten');
    let judul = '';
    let deskripsi = '';
    let gambarBangun = '';
    let gambarRepresentasi = '';

    switch (bangun) {
        case 'kubus':
            judul = 'Kubus';
            deskripsi = 'Kubus adalah bangun ruang yang memiliki 6 sisi yang bentuknya sama, yaitu persegi!';
            gambarBangun = 'bangun ruang/kubusfiks.png';
<<<<<<< HEAD
            gambarRepresentasi = 'bangun ruang/rubikfiks.png'; // Rubik sebagai representasi
=======
            gambarRepresentasi = 'gambar/rubik.jpg'; // Rubik sebagai representasi
>>>>>>> e903925 (seventh commint)
            break;
        case 'balok':
            judul = 'Balok';
            deskripsi = 'Balok memiliki sisi berbentuk persegi panjang. Seperti kotak sepatu!';
            gambarBangun = 'bangun ruang/balokfiks.png';
<<<<<<< HEAD
            gambarRepresentasi = 'bangun ruang/kotakfiks.png'; // Kotak sepatu sebagai representasi
=======
            gambarRepresentasi = 'gambar/kotaksepatu.jpg'; // Kotak sepatu sebagai representasi
>>>>>>> e903925 (seventh commint)
            break;
        case 'tabung':
            judul = 'Tabung';
            deskripsi = 'Tabung memiliki bentuk yang seperti kaleng minuman, dengan sisi melengkung!';
            gambarBangun = 'bangun ruang/tabungfiks.png';
<<<<<<< HEAD
            gambarRepresentasi = 'bangun ruang/kalengfiks.png'; // Kaleng sebagai representasi
=======
            gambarRepresentasi = 'gambar/kaleng.jpg'; // Kaleng sebagai representasi
>>>>>>> e903925 (seventh commint)
            break;
        case 'kerucut':
            judul = 'Kerucut';
            deskripsi = 'Kerucut seperti topi tidur! Ada alas bulat dan puncaknya lancip!';
            gambarBangun = 'bangun ruang/kerucutfiks.png';
<<<<<<< HEAD
            gambarRepresentasi = 'bangun ruang/topifiks.png'; // Topi tidur sebagai representasi
=======
            gambarRepresentasi = 'gambar/topitidur.jpg'; // Topi tidur sebagai representasi
>>>>>>> e903925 (seventh commint)
            break;
        default:
            break;
    }

    // Update konten
    konten.innerHTML = `
        <h2>${judul}</h2>
        <div style="display: flex; justify-content: center; gap: 20px;">
            <div>
                <h3>Gambar Bangun Ruang</h3>
                <img src="${gambarBangun}" alt="${judul}">
            </div>
            <div>
                <h3>Contoh di Kehidupan Sehari-hari</h3>
                <img src="${gambarRepresentasi}" alt="${judul} Representasi">
            </div>
        </div>
        <p>${deskripsi}</p>
    `;
}