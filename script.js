const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbyzeEeV1tf1WZWCgBbeO0O0xPguKneM8FvgBJUHJ6yWmrROlVF5veGBnIAYaPDFk3jq/exec";


function simpanKeGoogleSheets(data) {

    fetch(URL_GOOGLE_SHEETS, {

        method: "POST",

        mode: "no-cors",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify(data)

    })
    .then(() => {

        console.log(
            "Data berhasil dikirim ke Google Sheets."
        );

    })
    .catch((error) => {

        console.error(
            "Gagal mengirim data:",
            error
        );

    });

}

/* =========================================
   SAHABAT KONSELING
   SCRIPT UTAMA
========================================= */


/* =========================================
   VARIABEL BIDANG YANG DIPILIH
========================================= */

let bidangTerpilih = "";


/* =========================================
   FUNGSI UMUM MENAMPILKAN HASIL
========================================= */

function tampilkanHasil(html) {

    const hasil = document.getElementById("hasil");

    if (!hasil) return;

    hasil.innerHTML = html;
    hasil.style.display = "block";

    hasil.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   CEK KONDISI DIRI
========================================= */

function cekKondisi() {

    const pilihan = prompt(
        "Bagaimana kondisi kamu saat ini?\n\n" +
        "1. Senang\n" +
        "2. Biasa saja\n" +
        "3. Sedih\n" +
        "4. Cemas\n" +
        "5. Bingung"
    );

    if (!pilihan) return;

    let judul = "";
    let pesan = "";

    switch (pilihan) {

        case "1":
            judul = "Kondisimu terlihat cukup positif 🌤️";
            pesan =
                "Kamu sedang merasakan hal yang menyenangkan. " +
                "Pertahankan hal-hal positif yang membuatmu nyaman.";
            break;

        case "2":
            judul = "Kondisimu cukup stabil 🌱";
            pesan =
                "Kondisimu terlihat cukup biasa atau stabil. " +
                "Tetap perhatikan perubahan perasaan dan kebutuhanmu.";
            break;

        case "3":
            judul = "Kamu sedang merasa kurang nyaman 💙";
            pesan =
                "Perasaan sedih bisa muncul karena berbagai hal. " +
                "Cobalah mengenali apa yang menjadi penyebabnya.";
            break;

        case "4":
            judul = "Kamu mungkin sedang merasa khawatir 💭";
            pesan =
                "Cobalah mengenali hal yang membuatmu merasa cemas " +
                "dan pertimbangkan untuk bercerita kepada orang yang dipercaya.";
            break;

        case "5":
            judul = "Kamu sedang merasa bingung 🧩";
            pesan =
                "Tidak apa-apa jika kamu belum menemukan jawabannya. " +
                "Mengenali masalah secara perlahan dapat membantu.";
            break;

        default:
            judul = "Pilihan belum dikenali";
            pesan = "Silakan pilih angka 1 sampai 5.";
    }

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>${judul}</h3>

            <p>
                ${pesan}
            </p>

        </div>
    `);
}


/* =========================================
   PAHAMI PERASAAN
========================================= */

function pahamiPerasaan() {

    const pilihan = prompt(
        "Perasaan apa yang paling kamu rasakan?\n\n" +
        "1. Senang\n" +
        "2. Sedih\n" +
        "3. Cemas\n" +
        "4. Marah\n" +
        "5. Bingung"
    );

    if (!pilihan) return;

    const perasaan = {

        "1": [
            "Senang 😊",
            "Nikmati hal positif yang sedang kamu rasakan dan pertahankan aktivitas yang membuatmu nyaman."
        ],

        "2": [
            "Sedih 💙",
            "Cobalah memberi ruang untuk perasaanmu dan ceritakan kepada orang yang kamu percaya jika diperlukan."
        ],

        "3": [
            "Cemas 🌧️",
            "Kenali hal yang membuatmu khawatir dan coba lakukan aktivitas yang membantu dirimu merasa lebih tenang."
        ],

        "4": [
            "Marah 🔥",
            "Berikan waktu untuk menenangkan diri sebelum mengambil keputusan atau menyampaikan sesuatu."
        ],

        "5": [
            "Bingung 🧩",
            "Coba tuliskan hal yang sedang membuatmu bingung agar lebih mudah melihat masalahnya."
        ]
    };

    if (!perasaan[pilihan]) {

        tampilkanHasil(`
            <div class="hasil-card">

                <h3>Pilihan belum dikenali</h3>

                <p>
                    Silakan pilih angka 1 sampai 5.
                </p>

            </div>
        `);

        return;
    }

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                Perasaanmu: ${perasaan[pilihan][0]}
            </h3>

            <p>
                ${perasaan[pilihan][1]}
            </p>

        </div>
    `);
}


/* =========================================
   SKALA PERASAAN
========================================= */

function skalaPerasaan() {

    const nilai = prompt(
        "Seberapa nyaman kondisi perasaanmu saat ini?\n\n" +
        "Masukkan angka 1 sampai 10.\n\n" +
        "1 = Sangat tidak nyaman\n" +
        "10 = Sangat nyaman"
    );

    if (!nilai) return;

    const angka = Number(nilai);

    if (isNaN(angka) || angka < 1 || angka > 10) {

        tampilkanHasil(`
            <div class="hasil-card">

                <h3>Nilai belum sesuai</h3>

                <p>
                    Masukkan angka antara 1 sampai 10.
                </p>

            </div>
        `);

        return;
    }

    let keterangan = "";

    if (angka <= 3) {

        keterangan =
            "Kondisi perasaanmu mungkin sedang kurang nyaman. Pertimbangkan untuk bercerita kepada orang yang dipercaya.";

    } else if (angka <= 6) {

        keterangan =
            "Kondisimu berada pada tingkat cukup nyaman. Tetap perhatikan perubahan perasaanmu.";

    } else {

        keterangan =
            "Kondisimu terlihat cukup nyaman. Pertahankan hal-hal positif yang mendukung kesejahteraanmu.";
    }

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                📊 Skala Perasaan: ${angka}/10
            </h3>

            <p>
                ${keterangan}
            </p>

        </div>
    `);
}


/* =========================================
   LAYANAN KONSELING
========================================= */

function layananKonseling() {

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                🤝 Layanan Konseling
            </h3>

            <p>
                Layanan konseling dapat membantu siswa memahami
                masalah, perasaan, hubungan sosial, proses belajar,
                maupun perencanaan masa depan.
            </p>

            <p>
                Jika kamu merasa membutuhkan bantuan lebih lanjut,
                kamu dapat menghubungi guru BK atau konselor
                untuk mendapatkan layanan secara langsung.
            </p>

        </div>
    `);
}


/* =========================================
   PETA MASALAH
========================================= */

function petaMasalah() {

    const pilihan = prompt(
        "Bidang apa yang paling ingin kamu perhatikan?\n\n" +
        "1. Pribadi\n" +
        "2. Sosial / Pertemanan\n" +
        "3. Belajar\n" +
        "4. Karier\n" +
        "5. Keluarga\n" +
        "6. Pengembangan Diri"
    );

    if (!pilihan) return;

    const bidang = {

        "1": "Pribadi 💙",
        "2": "Sosial / Pertemanan 👥",
        "3": "Belajar 📚",
        "4": "Karier 🎯",
        "5": "Keluarga 🏠",
        "6": "Pengembangan Diri 🌱"
    };

    if (!bidang[pilihan]) {

        tampilkanHasil(`
            <div class="hasil-card">

                <h3>
                    Pilihan belum dikenali
                </h3>

                <p>
                    Silakan pilih angka 1 sampai 6.
                </p>

            </div>
        `);

        return;
    }

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                Bidang yang kamu pilih
            </h3>

            <p>
                <strong>
                    ${bidang[pilihan]}
                </strong>
            </p>

            <p>
                Bidang ini dapat menjadi fokus awal
                untuk mengenali kebutuhanmu.
            </p>

        </div>
    `);
}


/* =========================================
   RUANG CERITA
========================================= */

function ruangCerita() {

    const cerita = prompt(
        "Apa yang ingin kamu ceritakan?\n\n" +
        "Tuliskan secara singkat. Hindari menuliskan " +
        "alamat rumah, kata sandi, atau informasi sangat sensitif."
    );

    if (!cerita) return;

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                💬 Ruang Cerita
            </h3>

            <p>
                Terima kasih sudah menuliskan ceritamu.
                Mengenali dan mengungkapkan apa yang dirasakan
                dapat menjadi langkah awal untuk memahami diri.
            </p>

            <p>
                Jika cerita tersebut membuatmu membutuhkan
                bantuan lebih lanjut, kamu dapat menghubungi
                guru BK atau konselor.
            </p>

        </div>
    `);
}


/* =========================================
   REKOMENDASI LAYANAN
========================================= */

function rekomendasiLayanan() {

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                💡 Rekomendasi Layanan
            </h3>

            <p>
                Untuk mengetahui layanan yang paling sesuai
                dengan kebutuhanmu, kamu dapat menggunakan
                Pemetaan Diri.
            </p>

            <p>
                Hasil pemetaan dapat membantu memberikan
                gambaran awal mengenai bidang yang membutuhkan
                perhatian.
            </p>

        </div>
    `);
}


/* =========================================
   CATATAN KONSELING
========================================= */

function catatanKonseling() {

    tampilkanHasil(`
        <div class="hasil-card">

            <h3>
                📝 Catatan Konseling
            </h3>

            <p>
                Catatan konseling dapat digunakan untuk
                mengingat hal-hal penting yang ingin kamu
                sampaikan atau diskusikan bersama konselor.
            </p>

            <p>
                Untuk menjaga privasi, hindari menuliskan
                informasi pribadi yang sangat sensitif.
            </p>

        </div>
    `);
}


/* =========================================
   DATA 6 BIDANG
========================================= */

const pertanyaanBidang = {

    "Belajar": [

        "Saya dapat berkonsentrasi saat mengikuti pembelajaran.",

        "Saya mampu memahami materi yang diberikan guru/dosen.",

        "Saya menyelesaikan tugas tepat waktu.",

        "Saya merasa malas ketika harus belajar.",

        "Saya kesulitan memahami materi tertentu.",

        "Saya memiliki jadwal belajar yang teratur.",

        "Saya mudah terdistraksi saat belajar.",

        "Saya berusaha mencari bantuan ketika mengalami kesulitan belajar.",

        "Saya merasa percaya diri dengan kemampuan belajar saya.",

        "Saya memiliki motivasi untuk meningkatkan hasil belajar."

    ],


    "Pribadi": [

        "Saya merasa percaya diri dengan diri saya sendiri.",

        "Saya mampu mengenali kelebihan dan kekurangan diri.",

        "Saya dapat mengendalikan emosi ketika menghadapi masalah.",

        "Saya sering merasa tidak yakin dengan kemampuan diri sendiri.",

        "Saya mampu menerima kekurangan yang ada dalam diri saya.",

        "Saya mudah merasa cemas ketika menghadapi suatu masalah.",

        "Saya mampu mengambil keputusan untuk diri sendiri.",

        "Saya merasa nyaman menjadi diri saya sendiri.",

        "Saya mampu menghadapi kegagalan tanpa mudah menyerah.",

        "Saya memiliki keinginan untuk menjadi pribadi yang lebih baik."

    ],


    "Sosial": [

        "Saya mudah berkomunikasi dengan orang lain.",

        "Saya merasa nyaman berinteraksi dengan teman.",

        "Saya mampu bekerja sama dalam kelompok.",

        "Saya sulit memulai percakapan dengan orang baru.",

        "Saya dapat menghargai pendapat orang lain.",

        "Saya sering merasa takut ditolak oleh teman.",

        "Saya mampu menyelesaikan konflik dengan cara yang baik.",

        "Saya memiliki hubungan yang baik dengan teman-teman.",

        "Saya merasa diterima oleh lingkungan pertemanan saya.",

        "Saya berani menyampaikan pendapat dalam kelompok."

    ],


    "Keluarga": [

        "Saya merasa nyaman berkomunikasi dengan keluarga.",

        "Saya mendapatkan dukungan keluarga dalam menghadapi masalah.",

        "Saya dapat menceritakan masalah kepada anggota keluarga.",

        "Saya sering mengalami konflik dengan keluarga.",

        "Keluarga saya menghargai pendapat saya.",

        "Saya merasa diperhatikan oleh keluarga.",

        "Saya merasa terbebani oleh harapan keluarga.",

        "Saya dapat berdiskusi dengan keluarga ketika harus mengambil keputusan.",

        "Saya merasa hubungan saya dengan keluarga cukup harmonis.",

        "Saya merasa keluarga membantu saya dalam menghadapi kesulitan."

    ],


    "Karier": [

        "Saya sudah mengetahui pekerjaan yang saya minati.",

        "Saya mengetahui kemampuan yang dapat mendukung karier saya.",

        "Saya memiliki gambaran tentang pekerjaan yang ingin saya lakukan.",

        "Saya masih bingung menentukan pilihan karier.",

        "Saya mencari informasi tentang berbagai pilihan pekerjaan.",

        "Saya mempertimbangkan minat sebelum memilih karier.",

        "Saya takut salah dalam menentukan pilihan karier.",

        "Saya mengetahui pendidikan yang dibutuhkan untuk karier yang saya inginkan.",

        "Saya memiliki rencana untuk mencapai cita-cita saya.",

        "Saya merasa percaya diri dengan pilihan karier saya."

    ],


    "Pengembangan Diri": [

        "Saya memiliki keinginan untuk mengembangkan kemampuan diri.",

        "Saya mengetahui potensi yang saya miliki.",

        "Saya berusaha mempelajari keterampilan baru.",

        "Saya sering merasa tidak mampu mengembangkan diri.",

        "Saya memiliki target untuk meningkatkan kemampuan diri.",

        "Saya berani mencoba hal-hal baru.",

        "Saya mau menerima kritik untuk memperbaiki diri.",

        "Saya berusaha memperbaiki kekurangan yang saya miliki.",

        "Saya mengikuti kegiatan yang dapat mengembangkan potensi saya.",

        "Saya memiliki motivasi untuk menjadi versi diri yang lebih baik."

    ]

};


/* =========================================
   BUKA / TUTUP PEMETAAN DIRI
========================================= */

function bukaAngket() {

    const form =
        document.getElementById("formAngket");

    if (!form) return;

    if (form.style.display === "block") {

        form.style.display = "none";

        return;
    }

    form.style.display = "block";

    form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   CEK BIODATA
========================================= */

function biodataLengkap() {

    const nama =
        document.getElementById("namaAngket");

    const kelas =
        document.getElementById("kelasAngket");

    const kontak =
        document.getElementById("kontakAngket");


    if (!nama || nama.value.trim() === "") {

        bukaAngket();

        alert(
            "Silakan isi Nama / Inisial terlebih dahulu."
        );

        if (nama) {
            nama.focus();
        }

        return false;
    }


    if (!kelas || kelas.value.trim() === "") {

        bukaAngket();

        alert(
            "Silakan isi Kelas terlebih dahulu."
        );

        if (kelas) {
            kelas.focus();
        }

        return false;
    }


    if (!kontak || kontak.value.trim() === "") {

        bukaAngket();

        alert(
            "Silakan isi Gmail / Nomor HP terlebih dahulu."
        );

        if (kontak) {
            kontak.focus();
        }

        return false;
    }


    return true;
}


/* =========================================
   MEMILIH BIDANG DARI 02
========================================= */

function bukaBidang(bidang) {

    if (!biodataLengkap()) {
        return;
    }

    pilihBidang(bidang);
}


function pilihBidang(bidang) {

    if (!pertanyaanBidang[bidang]) {

        alert(
            "Pertanyaan untuk bidang " +
            bidang +
            " belum ditemukan."
        );

        return;
    }


    bidangTerpilih = bidang;


    tampilkanPertanyaanBidang(bidang);


    const tempat =
        document.getElementById("pertanyaanBidang");


    if (tempat) {

        setTimeout(function () {

            tempat.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }
}


/* =========================================
   MEMBUAT 6 KOTAK TERLIHAT KLIKABLE
========================================= */

function aktifkanKotakBidang() {

    const kotak =
        document.querySelectorAll(".problem-card");

    if (!kotak.length) return;


    kotak.forEach(function (card) {

        card.style.cursor = "pointer";

    });
}


/* =========================================
   MENAMPILKAN 10 PERTANYAAN BIDANG
   TAMPILAN ANGKET MODERN
========================================= */

function tampilkanPertanyaanBidang(bidang) {

    const tempat =
        document.getElementById("pertanyaanBidang");

    if (!tempat) return;


    const daftar =
        pertanyaanBidang[bidang];


    if (!daftar) {

        tempat.innerHTML = "";

        return;
    }


    let html = `

        <div class="angket-bidang">

            <div class="angket-header">

                <div class="angket-icon">
                    📋
                </div>

                <h3>
                    Pemetaan Bidang ${bidang}
                </h3>

                <p>
                    Jawablah setiap pernyataan sesuai
                    dengan keadaanmu saat ini.
                </p>

                <div class="skala-info">

                    <span>
                        1 = Sangat Tidak Sesuai
                    </span>

                    <span>
                        5 = Sangat Sesuai
                    </span>

                </div>

            </div>


            <div class="daftar-soal">

    `;


    daftar.forEach(function (pertanyaan, index) {

        const nomor =
            index + 1;


        html += `

            <div class="soal-card">

                <div class="nomor-soal">
                    ${nomor}
                </div>


                <div class="isi-soal">

                    <p class="teks-soal">
                        ${pertanyaan}
                    </p>


                    <div class="pilihan-angket">

                        <label class="pilihan-item">

                            <input
                                type="radio"
                                name="bidang_${nomor}"
                                value="1"
                            >

                            <span class="pilihan-bulat">
                                1
                            </span>

                            <span class="pilihan-teks">
                                Sangat Tidak Sesuai
                            </span>

                        </label>


                        <label class="pilihan-item">

                            <input
                                type="radio"
                                name="bidang_${nomor}"
                                value="2"
                            >

                            <span class="pilihan-bulat">
                                2
                            </span>

                            <span class="pilihan-teks">
                                Tidak Sesuai
                            </span>

                        </label>


                        <label class="pilihan-item">

                            <input
                                type="radio"
                                name="bidang_${nomor}"
                                value="3"
                            >

                            <span class="pilihan-bulat">
                                3
                            </span>

                            <span class="pilihan-teks">
                                Cukup Sesuai
                            </span>

                        </label>


                        <label class="pilihan-item">

                            <input
                                type="radio"
                                name="bidang_${nomor}"
                                value="4"
                            >

                            <span class="pilihan-bulat">
                                4
                            </span>

                            <span class="pilihan-teks">
                                Sesuai
                            </span>

                        </label>


                        <label class="pilihan-item">

                            <input
                                type="radio"
                                name="bidang_${nomor}"
                                value="5"
                            >

                            <span class="pilihan-bulat">
                                5
                            </span>

                            <span class="pilihan-teks">
                                Sangat Sesuai
                            </span>

                        </label>

                    </div>

                </div>

            </div>

        `;

    });


    html += `

            </div>


            <button
                type="button"
                onclick="lihatHasilBidang()"
                class="tombol-hasil-angket"
            >

                📊 Lihat Hasil Pemetaan

            </button>


        </div>

    `;


    tempat.innerHTML = html;
}

/* =========================================
   HASIL PEMETAAN BIDANG
========================================= */

function lihatHasilBidang() {

    if (!bidangTerpilih) {

        alert(
            "Silakan pilih salah satu bidang terlebih dahulu."
        );

        return;
    }


    const daftarSoal =
        pertanyaanBidang[bidangTerpilih];


    if (!daftarSoal) {

        alert(
            "Pertanyaan bidang tidak ditemukan."
        );

        return;
    }


    let total =
        0;


    for (
        let index = 0;
        index < daftarSoal.length;
        index++
    ) {

        const nomor =
            index + 1;

const pilihan =
    document.querySelector(
        `input[name="bidang_${nomor}"]:checked`
    );


if (!pilihan) {

    alert(
        "Mohon jawab semua 10 pertanyaan terlebih dahulu."
    );

    return;
}

total += Number(pilihan.value);

    }


    const rataRata =
        total / daftarSoal.length;


    const persentase =
        Math.round(
            ((rataRata - 1) / 4) * 100
        );


    let kategori = "";
    let pesan = "";
    let rekomendasi = "";


    if (persentase <= 30) {

        kategori =
            "Kondisi relatif baik 🌱";

        pesan =
            "Jawabanmu menunjukkan bahwa kondisi pada bidang ini relatif baik.";

        rekomendasi =
            "Pertahankan kebiasaan positif yang sudah kamu lakukan dan tetap kenali kebutuhan dirimu.";

    }

    else if (persentase <= 60) {

        kategori =
            "Perlu perhatian 💭";

        pesan =
            "Ada beberapa hal pada bidang ini yang mungkin membutuhkan perhatian.";

        rekomendasi =
            "Cobalah mengenali bagian yang masih menjadi kesulitan dan pertimbangkan untuk bercerita kepada orang yang kamu percaya.";

    }

    else if (persentase <= 80) {

        kategori =
            "Perlu perhatian lebih 💙";

        pesan =
            "Jawabanmu menunjukkan adanya beberapa hal pada bidang ini yang cukup membutuhkan perhatian.";

        rekomendasi =
            "Kamu dapat mempertimbangkan untuk bercerita kepada guru BK, konselor, atau orang yang kamu percaya.";

    }

    else {

        kategori =
            "Perlu dukungan lebih lanjut 🤝";

        pesan =
            "Hasil pemetaan menunjukkan bahwa bidang ini cukup membutuhkan perhatian.";

        rekomendasi =
            "Jangan menghadapi semuanya sendirian. Kamu dapat melanjutkan cerita kepada guru BK atau konselor untuk mendapatkan dukungan yang sesuai.";

    }


    const namaElement =
        document.getElementById("namaAngket");

    const kelasElement =
        document.getElementById("kelasAngket");

    const catatanElement =
        document.getElementById("catatanAngket");


    const nama =
        namaElement
            ? namaElement.value.trim()
            : "";

    const kelas =
        kelasElement
            ? kelasElement.value.trim()
            : "";

    const catatan =
        catatanElement
            ? catatanElement.value.trim()
            : "";


    const tempat =
        document.getElementById("pertanyaanBidang");


    if (!tempat) return;

const kontakElement =
        document.getElementById("kontakAngket");

    const kontak =
        kontakElement
            ? kontakElement.value.trim()
            : "";


    // SIMPAN DATA KE GOOGLE SHEETS
    simpanKeGoogleSheets({

        nama: nama,

        kelas: kelas,

        kontak: kontak,

        bidang: bidangTerpilih,

        jawaban1:
            document.querySelector(`input[name="bidang_1"]:checked`)?.value || "",

        jawaban2:
            document.querySelector(`input[name="bidang_2"]:checked`)?.value || "",

        jawaban3:
            document.querySelector(`input[name="bidang_3"]:checked`)?.value || "",

        jawaban4:
            document.querySelector(`input[name="bidang_4"]:checked`)?.value || "",

        jawaban5:
            document.querySelector(`input[name="bidang_5"]:checked`)?.value || "",

        jawaban6:
            document.querySelector(`input[name="bidang_6"]:checked`)?.value || "",

        jawaban7:
            document.querySelector(`input[name="bidang_7"]:checked`)?.value || "",

        jawaban8:
            document.querySelector(`input[name="bidang_8"]:checked`)?.value || "",

        jawaban9:
            document.querySelector(`input[name="bidang_9"]:checked`)?.value || "",

        jawaban10:
            document.querySelector(`input[name="bidang_10"]:checked`)?.value || "",

        persentase: persentase,

        kategori: kategori,

        catatan: catatan

    });

    tempat.innerHTML = `

        <div class="hasil-card">

            <h3>
                📊 Hasil Pemetaan
            </h3>


            <p>
                Halo,
                <strong>${nama}</strong>
                dari kelas
                <strong>${kelas}</strong>.
            </p>


            <hr>


            <p>
                <strong>
                    Bidang yang dipilih:
                </strong>
            </p>


            <h2 style="
                text-align:center;
                color:#2f80ed;
                margin:15px 0;
            ">

                ${bidangTerpilih}

            </h2>


            <p>
                <strong>
                    Tingkat perhatian kondisi:
                </strong>
            </p>


            <div style="
                width:100%;
                height:14px;
                background:#e8f0f7;
                border-radius:20px;
                overflow:hidden;
                margin:15px 0;
            ">

                <div style="
                    width:${persentase}%;
                    height:100%;
                    background:#4d94dd;
                    border-radius:20px;
                "></div>

            </div>


            <h2 style="
                text-align:center;
                color:#2f80ed;
                margin:10px 0;
            ">

                ${persentase}%

            </h2>


            <p style="
                text-align:center;
            ">

                <strong>
                    ${kategori}
                </strong>

            </p>


            <hr>


            <p>
                ${pesan}
            </p>


            <h3>
                💡 Rekomendasi
            </h3>


            <p>
                ${rekomendasi}
            </p>


            ${
                catatan
                ?
                `
                <hr>

                <h3>
                    💬 Cerita Tambahan
                </h3>

                <p>
                    ${catatan}
                </p>
                `
                :
                ""
            }


            <p style="
                margin-top:20px;
                padding:12px;
                background:#f4f8fb;
                border-radius:10px;
                font-size:12px;
                color:#71879c;
            ">

                ℹ️ Hasil ini merupakan pemetaan awal
                untuk membantu mengenali kondisi diri
                dan bukan merupakan diagnosis psikologis.

            </p>


            <button
                type="button"
                onclick="tampilkanKonselor()"
                class="assessment-button"
                style="
                    width:100%;
                    margin-top:15px;
                "
            >

                💬 Saya Ingin Melanjutkan Cerita

            </button>


            <button
                type="button"
                onclick="isiUlangBidang()"
                class="assessment-button"
                style="
                    width:100%;
                    margin-top:10px;
                "
            >

                🔄 Isi Ulang Pemetaan

            </button>

        </div>

    `;


    tempat.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   ISI ULANG BIDANG
========================================= */

function isiUlangBidang() {

    if (!bidangTerpilih) return;

    tampilkanPertanyaanBidang(
        bidangTerpilih
    );


    const tempat =
        document.getElementById("pertanyaanBidang");


    if (tempat) {

        tempat.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================================
   KIRIM ANGKET LAMA
   DIPERTAHANKAN AGAR TOMBOL HTML
   TIDAK ERROR
========================================= */

function kirimAngket() {

    if (!biodataLengkap()) {
        return;
    }


    if (!bidangTerpilih) {

        alert(
            "Silakan pilih salah satu bidang di bagian 02 — Temukan Arah."
        );

        return;
    }


    lihatHasilBidang();
}


/* =========================================
   PINDAHKAN PEMETAAN DIRI
   KE ATAS 02 — TEMUKAN ARAH
========================================= */

function pindahkanPemetaan() {

    const problemSection =
        document.getElementById("temukan-arah");

    const assessmentSection =
        document.querySelector(".assessment-section");

    const formAngket =
        document.getElementById("formAngket");


    if (!problemSection) return;


    /*
       Pemetaan Diri dipindahkan
       tepat sebelum 02.
    */

    if (assessmentSection) {

        problemSection.parentNode.insertBefore(
            assessmentSection,
            problemSection
        );

    }


    /*
       Form biodata dipindahkan
       tepat setelah Pemetaan Diri.
    */

    if (formAngket) {

        problemSection.parentNode.insertBefore(
            formAngket,
            problemSection
        );

    }


    /*
       Form awalnya disembunyikan.
       Dibuka ketika tombol
       "Mulai Pemetaan Diri" ditekan.
    */

    if (formAngket) {

        formAngket.style.display = "none";

    }


    /*
       Sembunyikan pertanyaan lama
       yang sudah digantikan oleh
       6 bidang di bagian 02.
    */

    const kondisi =
        document.getElementById("kondisiAngket");

    const perasaan =
        document.getElementById("perasaanAngket");

    const skala =
        document.getElementById("skalaAngket");


    if (kondisi) {

        const group =
            kondisi.closest(".form-group");

        if (group) {
            group.style.display = "none";
        }

    }


    if (perasaan) {

        const group =
            perasaan.closest(".form-group");

        if (group) {
            group.style.display = "none";
        }

    }


    if (skala) {

        const group =
            skala.closest(".form-group");

        if (group) {
            group.style.display = "none";
        }

    }


    /*
       Placeholder pertanyaan lama
       tidak digunakan lagi.
    */

    const pertanyaanLama =
        document.getElementById(
            "pertanyaanBidangAngket"
        );


    if (pertanyaanLama) {

        pertanyaanLama.innerHTML = "";

        pertanyaanLama.style.display = "none";

    }

}


/* =========================================
   DAFTAR KONSELOR
========================================= */
/* =========================================
   DAFTAR KONSELOR
========================================= */

function tampilkanKonselor() {

    const hasil =
        document.getElementById("hasil");


    if (!hasil) return;


    const daftarLama =
        document.getElementById("daftarKonselor");


    if (daftarLama) {

        daftarLama.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return;
    }


    hasil.innerHTML += `

        <div
            id="daftarKonselor"
            class="hasil-card"
            style="
                margin-top:20px;
                border-top:2px solid #e8f0f7;
            "
        >

            <h3>
                👩‍💼 Konselor yang Dapat Dihubungi
            </h3>


            <p>
                Jika kamu ingin bercerita lebih lanjut,
                kamu dapat menghubungi salah satu konselor
                berikut melalui WhatsApp.
            </p>


            <div style="
                display:flex;
                flex-direction:column;
                gap:12px;
            ">


                <!-- LILIS MARLINA -->

                <div style="
                    padding:15px;
                    background:#f4f8fb;
                    border-radius:12px;
                ">

                    <strong>
                        Lilis Marlina
                    </strong>

                    <br><br>

                    <a
                        href="https://wa.me/6289679210852"
                        target="_blank"
                        rel="noopener"
                        style="
                            display:inline-block;
                            padding:9px 15px;
                            background:#25D366;
                            color:white;
                            text-decoration:none;
                            border-radius:8px;
                        "
                    >

                        💬 Hubungi via WhatsApp

                    </a>

                </div>


                <!-- SAFNA NAFISAH -->

                <div style="
                    padding:15px;
                    background:#f4f8fb;
                    border-radius:12px;
                ">

                    <strong>
                        Safna Nafisah
                    </strong>

                    <br><br>

                    <a
                        href="https://wa.me/62882015421074"
                        target="_blank"
                        rel="noopener"
                        style="
                            display:inline-block;
                            padding:9px 15px;
                            background:#25D366;
                            color:white;
                            text-decoration:none;
                            border-radius:8px;
                        "
                    >

                        💬 Hubungi via WhatsApp

                    </a>

                </div>


                <!-- SITI FATIMAH -->

                <div style="
                    padding:15px;
                    background:#f4f8fb;
                    border-radius:12px;
                ">

                    <strong>
                        Siti Fatimah
                    </strong>

                    <br><br>

                    <a
                        href="https://wa.me/6285922978976"
                        target="_blank"
                        rel="noopener"
                        style="
                            display:inline-block;
                            padding:9px 15px;
                            background:#25D366;
                            color:white;
                            text-decoration:none;
                            border-radius:8px;
                        "
                    >

                        💬 Hubungi via WhatsApp

                    </a>

                </div>


                <!-- PUTRI KESUMA -->

                <div style="
                    padding:15px;
                    background:#f4f8fb;
                    border-radius:12px;
                ">

                    <strong>
                        Putri Kesuma
                    </strong>

                    <br><br>

                    <a
                        href="https://wa.me/62882015468442"
                        target="_blank"
                        rel="noopener"
                        style="
                            display:inline-block;
                            padding:9px 15px;
                            background:#25D366;
                            color:white;
                            text-decoration:none;
                            border-radius:8px;
                        "
                    >

                        💬 Hubungi via WhatsApp

                    </a>

                </div>


                <!-- NABILA RASYA -->

                <div style="
                    padding:15px;
                    background:#f4f8fb;
                    border-radius:12px;
                ">

                    <strong>
                        Nabila Rasya
                    </strong>

                    <br><br>

                    <a
                        href="https://wa.me/6283149474226"
                        target="_blank"
                        rel="noopener"
                        style="
                            display:inline-block;
                            padding:9px 15px;
                            background:#25D366;
                            color:white;
                            text-decoration:none;
                            border-radius:8px;
                        "
                    >

                        💬 Hubungi via WhatsApp

                    </a>

                </div>


            </div>


            <p style="
                margin-top:18px;
                padding:12px;
                background:#fff;
                border-radius:10px;
                font-size:12px;
                color:#71879c;
            ">

                🔒 Silakan hubungi konselor jika kamu
                ingin melanjutkan cerita atau membutuhkan
                bantuan konseling.

            </p>

        </div>

    `;


    const daftar =
        document.getElementById(
            "daftarKonselor"
        );


    if (daftar) {

        daftar.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}

/* =========================================
   SAAT HTML SELESAI DIMUAT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Pindahkan Pemetaan Diri
           dan Biodata ke atas 02.
        */

        pindahkanPemetaan();


        /*
           Aktifkan tampilan 6 kotak.
        */

        aktifkanKotakBidang();


        /*
           Pastikan hasil pertanyaan
           masih kosong saat halaman dibuka.
        */

        const tempat =
            document.getElementById(
                "pertanyaanBidang"
            );


        if (tempat) {
            tempat.innerHTML = "";
        }

    }
);