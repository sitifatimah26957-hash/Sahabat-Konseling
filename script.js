function cekKondisi() {
    let kondisi = prompt(
        "CEK KONDISI DIRI\n\n" +
        "Layanan ini membantu kamu mengenali kondisi dirimu " +
        "sebagai langkah awal dalam memahami kebutuhan pribadi.\n\n" +
        "Bagaimana kondisi yang paling menggambarkan dirimu saat ini?\n\n" +
        "1. Senang dan bersemangat\n" +
        "2. Biasa saja / cukup stabil\n" +
        "3. Sedih atau kehilangan semangat\n" +
        "4. Cemas atau khawatir\n" +
        "5. Bingung atau sulit menentukan arah"
    );

    if (kondisi == "1") {
        alert(
            "HASIL REFLEKSI DIRI\n\n" +
            "Kamu sedang berada dalam kondisi yang cukup positif.\n\n" +
            "Dalam BK, mengenali dan mempertahankan kondisi positif " +
            "merupakan bagian dari upaya pengembangan diri. " +
            "Coba kenali hal-hal yang membuatmu merasa bersemangat " +
            "dan gunakan energi positif tersebut untuk melakukan " +
            "kegiatan yang bermanfaat.\n\n" +
            "REFLEKSI:\n" +
            "Apa hal yang membuatmu merasa senang hari ini?"
        );
    }

    else if (kondisi == "2") {
        alert(
            "HASIL REFLEKSI DIRI\n\n" +
            "Kondisimu saat ini cukup stabil.\n\n" +
            "Kondisi yang biasa saja bukan berarti tidak penting. " +
            "Justru kamu dapat menggunakan waktu ini untuk lebih " +
            "mengenali dirimu, kebutuhanmu, serta hal-hal yang ingin " +
            "kamu kembangkan.\n\n" +
            "REFLEKSI:\n" +
            "Apa satu hal dalam dirimu yang ingin kamu kembangkan?"
        );
    }

    else if (kondisi == "3") {
        alert(
            "HASIL REFLEKSI DIRI\n\n" +
            "Kamu sedang merasakan kesedihan atau berkurangnya semangat.\n\n" +
            "Dalam proses BK, perasaan tersebut dapat menjadi bagian " +
            "dari proses memahami diri. Kamu tidak perlu langsung " +
            "memaksa dirimu untuk terlihat baik-baik saja. Cobalah " +
            "mengenali apa yang menjadi pemicu perasaan tersebut dan " +
            "hal apa yang sebenarnya kamu butuhkan.\n\n" +
            "REFLEKSI:\n" +
            "Apa yang paling memengaruhi perasaanmu akhir-akhir ini?\n\n" +
            "LANGKAH AWAL:\n" +
            "Kamu dapat menggunakan fitur Ruang Cerita untuk menuliskan " +
            "hal yang sedang kamu rasakan."
        );
    }

    else if (kondisi == "4") {
        alert(
            "HASIL REFLEKSI DIRI\n\n" +
            "Kamu sedang merasakan kecemasan atau kekhawatiran.\n\n" +
            "Dalam BK, mengenali sumber kecemasan merupakan langkah " +
            "awal agar seseorang dapat memahami dirinya dan menentukan " +
            "cara menghadapi situasi dengan lebih tepat.\n\n" +
            "Cobalah membedakan antara hal yang dapat kamu kendalikan " +
            "dan hal yang berada di luar kendalimu.\n\n" +
            "REFLEKSI:\n" +
            "Hal apa yang paling membuatmu merasa khawatir saat ini?\n\n" +
            "LANGKAH AWAL:\n" +
            "Tarik napas perlahan, beri waktu untuk dirimu, lalu " +
            "coba tuliskan hal yang menjadi sumber kekhawatiranmu."
        );
    }

    else if (kondisi == "5") {
        alert(
            "HASIL REFLEKSI DIRI\n\n" +
            "Kamu sedang mengalami kebingungan dalam memahami kondisi " +
            "atau menentukan arah yang ingin kamu ambil.\n\n" +
            "Dalam BK, proses mengenali diri dapat membantu seseorang " +
            "memahami minat, kebutuhan, kemampuan, nilai diri, serta " +
            "pilihan yang tersedia sebelum mengambil keputusan.\n\n" +
            "Kamu tidak harus menemukan semua jawabannya sekaligus. " +
            "Mulailah dengan mengenali satu hal yang paling ingin " +
            "kamu pahami terlebih dahulu.\n\n" +
            "REFLEKSI:\n" +
            "Hal apa yang paling membuatmu bingung saat ini?\n\n" +
            "LANGKAH AWAL:\n" +
            "Kamu dapat menggunakan fitur Peta Masalah untuk membantu " +
            "mengidentifikasi masalah yang sedang kamu hadapi."
        );
    }

    else {
        alert(
            "Pilihan belum sesuai.\n\n" +
            "Silakan pilih angka 1 sampai 5."
        );
    }
}

function pahamiPerasaan() {
    let perasaan = prompt(
        "PAHAMI PERASAANMU\n\n" +
        "Layanan ini membantu kamu mengenali emosi yang sedang " +
        "dirasakan dan memahami kebutuhan dirimu.\n\n" +
        "Perasaan apa yang paling kamu rasakan saat ini?\n\n" +
        "1. Senang\n" +
        "2. Sedih\n" +
        "3. Cemas\n" +
        "4. Marah\n" +
        "5. Bingung"
    );

    if (perasaan == "1") {
        alert(
            "MEMAHAMI PERASAAN: SENANG\n\n" +
            "Perasaan senang dapat muncul ketika kebutuhan, harapan, " +
            "atau sesuatu yang bermakna bagi dirimu terpenuhi.\n\n" +
            "Dalam BK, mengenali hal-hal yang membuatmu merasa positif " +
            "dapat membantu kamu memahami kekuatan dan sumber dukungan " +
            "dalam dirimu.\n\n" +
            "REFLEKSI:\n" +
            "Apa yang membuatmu merasa senang hari ini?\n\n" +
            "PENGEMBANGAN DIRI:\n" +
            "Coba pertahankan kegiatan positif yang membuatmu merasa " +
            "bermakna dan tetap menghargai dirimu sendiri."
        );
    }

    else if (perasaan == "2") {
        alert(
            "MEMAHAMI PERASAAN: SEDIH\n\n" +
            "Sedih merupakan salah satu emosi yang dapat muncul ketika " +
            "seseorang mengalami kehilangan, kekecewaan, tekanan, atau " +
            "situasi yang tidak sesuai dengan harapan.\n\n" +
            "Perasaan tersebut tidak perlu langsung diabaikan. " +
            "Mengenali dan memahami penyebabnya dapat menjadi langkah " +
            "awal dalam memahami kebutuhan diri.\n\n" +
            "REFLEKSI:\n" +
            "Apa yang mungkin menjadi penyebab kesedihanmu?\n\n" +
            "KEBUTUHAN DIRI:\n" +
            "Apa yang kamu butuhkan saat ini: waktu untuk beristirahat, " +
            "bercerita, dukungan dari orang lain, atau menyelesaikan " +
            "masalah tertentu?"
        );
    }

    else if (perasaan == "3") {
        alert(
            "MEMAHAMI PERASAAN: CEMAS\n\n" +
            "Cemas dapat muncul ketika seseorang menghadapi sesuatu " +
            "yang dianggap tidak pasti, sulit, atau berada di luar " +
            "kendali dirinya.\n\n" +
            "Dalam BK, memahami sumber kecemasan dapat membantu seseorang " +
            "menentukan respons yang lebih sesuai terhadap situasi yang " +
            "dihadapinya.\n\n" +
            "REFLEKSI:\n" +
            "Apa yang sedang kamu khawatirkan?\n\n" +
            "LANGKAH AWAL:\n" +
            "Coba bedakan hal yang dapat kamu kendalikan dengan hal yang " +
            "tidak dapat kamu kendalikan. Fokuslah terlebih dahulu pada " +
            "hal yang masih dapat kamu lakukan."
        );
    }

    else if (perasaan == "4") {
        alert(
            "MEMAHAMI PERASAAN: MARAH\n\n" +
            "Marah dapat muncul ketika seseorang merasa terganggu, " +
            "kecewa, tidak dihargai, atau menghadapi sesuatu yang " +
            "dianggap tidak sesuai dengan harapannya.\n\n" +
            "Emosi marah merupakan informasi tentang sesuatu yang sedang " +
            "terjadi dalam diri. Yang penting adalah bagaimana emosi " +
            "tersebut dikelola dan disampaikan dengan cara yang tepat.\n\n" +
            "REFLEKSI:\n" +
            "Situasi apa yang membuatmu merasa marah?\n\n" +
            "PENGELOLAAN DIRI:\n" +
            "Berikan jeda sebelum merespons. Setelah lebih tenang, coba " +
            "pahami kebutuhanmu dan sampaikan perasaanmu dengan cara " +
            "yang tidak merugikan diri sendiri maupun orang lain."
        );
    }

    else if (perasaan == "5") {
        alert(
            "MEMAHAMI PERASAAN: BINGUNG\n\n" +
            "Bingung dapat muncul ketika seseorang menghadapi banyak " +
            "pikiran, pilihan, tuntutan, atau belum memahami apa yang " +
            "sebenarnya diinginkan.\n\n" +
            "Dalam BK, proses memahami diri dapat membantu seseorang " +
            "mengenali kebutuhan, kemampuan, minat, nilai, dan pilihan " +
            "sebelum mengambil keputusan.\n\n" +
            "REFLEKSI:\n" +
            "Apa hal utama yang sedang memenuhi pikiranmu?\n\n" +
            "LANGKAH AWAL:\n" +
            "Tuliskan satu masalah yang paling ingin kamu pahami terlebih " +
            "dahulu. Tidak perlu menyelesaikan semuanya sekaligus."
        );
    }

    else {
        alert(
            "Pilihan belum sesuai.\n\n" +
            "Silakan pilih angka 1 sampai 5."
        );
    }
}
function ruangCerita() {
    let cerita = prompt(
        "RUANG CERITA\n\n" +
        "Ruang ini dapat digunakan untuk menuangkan pikiran, " +
        "perasaan, atau pengalaman yang sedang kamu hadapi.\n\n" +
        "Dalam proses BK, bercerita dapat menjadi salah satu langkah " +
        "untuk membantu seseorang memahami apa yang sedang dialaminya.\n\n" +
        "Kamu bisa menuliskan apa yang sedang ada di pikiranmu.\n\n" +
        "CATATAN PRIVASI:\n" +
        "Jangan tuliskan nama lengkap, alamat rumah, nomor telepon, " +
        "kata sandi, atau informasi pribadi lainnya."
    );

    if (cerita && cerita.trim() !== "") {

        alert(
            "TERIMA KASIH SUDAH BERCERITA\n\n" +
            "Kamu sudah meluangkan waktu untuk mengungkapkan apa yang " +
            "sedang kamu pikirkan atau rasakan.\n\n" +
            "Coba tanyakan kepada dirimu:\n\n" +
            "• Apa yang sebenarnya sedang aku rasakan?\n" +
            "• Apa yang menjadi penyebabnya?\n" +
            "• Apa yang sebenarnya aku butuhkan saat ini?\n" +
            "• Apakah ada orang yang dapat menjadi tempatku mencari dukungan?\n\n" +
            "REFLEKSI BK:\n" +
            "Mengenali dan mengungkapkan perasaan merupakan salah satu " +
            "langkah awal dalam proses memahami diri."
        );

    } else {

        alert(
            "TIDAK APA-APA\n\n" +
            "Kamu belum ingin bercerita sekarang.\n\n" +
            "Setiap orang memiliki waktu yang berbeda untuk menceritakan " +
            "apa yang sedang dialaminya. Kamu dapat kembali menggunakan " +
            "Ruang Cerita ketika sudah merasa lebih siap."
        );
    }
}

function layananKonseling() {

    let bidang = prompt(
        "LAYANAN KONSELING\n\n" +
        "Pilih bidang yang paling sesuai dengan kebutuhanmu.\n\n" +
        "1. Pribadi\n" +
        "2. Sosial\n" +
        "3. Belajar\n" +
        "4. Karier"
    );

    // =========================
    // BIDANG PRIBADI
    // =========================

    if (bidang == "1") {

        let masalah = prompt(
            "BIDANG PRIBADI\n\n" +
            "Hal apa yang paling ingin kamu pahami?\n\n" +
            "1. Kepercayaan diri\n" +
            "2. Pengelolaan emosi\n" +
            "3. Mengenali diri\n" +
            "4. Penyesuaian diri"
        );

        if (masalah == "1") {

            let penyebab = prompt(
                "KEPERCAYAAN DIRI\n\n" +
                "Apa yang paling memengaruhi rasa percaya dirimu?\n\n" +
                "1. Takut dinilai orang lain\n" +
                "2. Sering membandingkan diri\n" +
                "3. Takut melakukan kesalahan\n" +
                "4. Merasa kurang mampu"
            );

            if (penyebab >= 1 && penyebab <= 4) {

                alert(
                    "REFLEKSI DIRI\n\n" +
                    "Kamu sedang mencoba memahami hal yang memengaruhi " +
                    "kepercayaan dirimu.\n\n" +
                    "Dalam BK, mengenali pikiran dan pengalaman yang " +
                    "memengaruhi kepercayaan diri merupakan salah satu " +
                    "langkah dalam proses pengembangan diri.\n\n" +
                    "LANGKAH AWAL:\n" +
                    "Coba tuliskan tiga kemampuan atau hal positif yang " +
                    "pernah berhasil kamu lakukan.\n\n" +
                    "Ingat, kemampuan seseorang tidak hanya dilihat dari " +
                    "keberhasilan, tetapi juga dari proses belajar dan usaha."
                );

            } else {
                alert("Silakan pilih angka 1 sampai 4.");
            }

        }

        else if (masalah == "2") {

            let emosi = prompt(
                "PENGELOLAAN EMOSI\n\n" +
                "Emosi apa yang paling sering sulit kamu kelola?\n\n" +
                "1. Sedih\n" +
                "2. Cemas\n" +
                "3. Marah\n" +
                "4. Kecewa"
            );

            if (emosi >= 1 && emosi <= 4) {

                alert(
                    "MEMAHAMI EMOSI\n\n" +
                    "Emosi merupakan bagian dari pengalaman manusia. " +
                    "Mengenali emosi dapat membantu kamu memahami " +
                    "apa yang sedang terjadi dalam dirimu.\n\n" +
                    "REFLEKSI:\n" +
                    "Apa yang biasanya terjadi sebelum emosi tersebut muncul?\n\n" +
                    "LANGKAH AWAL:\n" +
                    "Coba beri jeda sebelum merespons suatu situasi. " +
                    "Kenali perasaan, pikiran, dan kebutuhanmu terlebih dahulu."
                );

            } else {
                alert("Silakan pilih angka 1 sampai 4.");
            }

        }

        else if (masalah == "3") {

            alert(
                "MENGENALI DIRI\n\n" +
                "Pengenalan diri membantu kamu memahami karakteristik, " +
                "minat, kemampuan, kebutuhan, serta hal-hal yang penting " +
                "bagi dirimu.\n\n" +
                "REFLEKSI:\n" +
                "Apa kelebihan yang kamu miliki?\n\n" +
                "Apa hal yang masih ingin kamu kembangkan?\n\n" +
                "LANGKAH AWAL:\n" +
                "Tuliskan satu kelebihan dan satu hal yang ingin kamu kembangkan."
            );

        }

        else if (masalah == "4") {

            alert(
                "PENYESUAIAN DIRI\n\n" +
                "Penyesuaian diri berkaitan dengan kemampuan seseorang " +
                "menghadapi perubahan dan tuntutan dari lingkungan.\n\n" +
                "REFLEKSI:\n" +
                "Situasi apa yang membuatmu sulit menyesuaikan diri?\n\n" +
                "LANGKAH AWAL:\n" +
                "Kenali bagian dari situasi yang dapat kamu kendalikan " +
                "dan tentukan satu tindakan kecil yang dapat kamu lakukan."
            );

        }

        else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }


    // =========================
    // BIDANG SOSIAL
    // =========================

    else if (bidang == "2") {

        let masalah = prompt(
            "BIDANG SOSIAL\n\n" +
            "Hal apa yang sedang kamu hadapi?\n\n" +
            "1. Masalah pertemanan\n" +
            "2. Kesulitan berkomunikasi\n" +
            "3. Konflik dengan orang lain\n" +
            "4. Sulit menyesuaikan diri"
        );

        if (masalah == "1") {

            let teman = prompt(
                "MASALAH PERTEMANAN\n\n" +
                "Apa yang paling kamu rasakan dalam hubungan pertemanan?\n\n" +
                "1. Merasa dijauhi\n" +
                "2. Sering terjadi salah paham\n" +
                "3. Sulit mendapatkan teman\n" +
                "4. Konflik dengan teman"
            );

            if (teman >= 1 && teman <= 4) {

                alert(
                    "REFLEKSI HUBUNGAN SOSIAL\n\n" +
                    "Hubungan dengan teman dapat memengaruhi kenyamanan " +
                    "seseorang dalam lingkungan sosial.\n\n" +
                    "REFLEKSI:\n" +
                    "Apa yang sebenarnya kamu harapkan dari hubungan tersebut?\n\n" +
                    "LANGKAH AWAL:\n" +
                    "Cobalah memahami situasi dari sudut pandangmu dan " +
                    "orang lain. Jika memungkinkan, komunikasikan masalah " +
                    "dengan cara yang tenang dan saling menghargai."
                );

            } else {
                alert("Silakan pilih angka 1 sampai 4.");
            }

        }

        else if (masalah == "2") {

            alert(
                "KOMUNIKASI INTERPERSONAL\n\n" +
                "Komunikasi yang baik bukan hanya tentang menyampaikan " +
                "pendapat, tetapi juga mendengarkan dan memahami orang lain.\n\n" +
                "REFLEKSI:\n" +
                "Apakah kamu lebih sering sulit menyampaikan perasaan, " +
                "pendapat, atau memahami orang lain?\n\n" +
                "LANGKAH AWAL:\n" +
                "Cobalah menyampaikan perasaan menggunakan kalimat yang " +
                "jelas tanpa menyalahkan orang lain."
            );

        }

        else if (masalah == "3") {

            alert(
                "MENGELOLA KONFLIK\n\n" +
                "Konflik merupakan bagian dari interaksi sosial. " +
                "Yang penting adalah bagaimana konflik tersebut dihadapi.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang menjadi sumber utama konflik tersebut?\n\n" +
                "LANGKAH AWAL:\n" +
                "Berikan waktu untuk menenangkan diri sebelum membicarakan " +
                "masalah. Fokus pada masalah, bukan menyerang pribadi orang lain."
            );

        }

        else if (masalah == "4") {

            alert(
                "PENYESUAIAN SOSIAL\n\n" +
                "Beradaptasi dengan lingkungan baru membutuhkan waktu. " +
                "Setiap orang memiliki proses penyesuaian yang berbeda.\n\n" +
                "REFLEKSI:\n" +
                "Bagian apa dari lingkunganmu yang paling sulit kamu hadapi?\n\n" +
                "LANGKAH AWAL:\n" +
                "Mulailah dari interaksi sederhana dengan orang yang " +
                "membuatmu merasa cukup nyaman."
            );

        }

        else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }


    // =========================
    // BIDANG BELAJAR
    // =========================

    else if (bidang == "3") {

        let masalah = prompt(
            "BIDANG BELAJAR\n\n" +
            "Apa yang paling menghambat proses belajarmu?\n\n" +
            "1. Kurang motivasi\n" +
            "2. Sulit berkonsentrasi\n" +
            "3. Sulit mengatur waktu\n" +
            "4. Sulit memahami materi"
        );

        if (masalah == "1") {

            alert(
                "MOTIVASI BELAJAR\n\n" +
                "Motivasi dapat memengaruhi kemauan seseorang untuk " +
                "memulai dan mempertahankan kegiatan belajar.\n\n" +
                "REFLEKSI:\n" +
                "Apa alasan utama kamu ingin belajar atau mencapai tujuanmu?\n\n" +
                "LANGKAH AWAL:\n" +
                "Tentukan satu tujuan belajar yang jelas dan realistis. " +
                "Mulailah dari target kecil yang dapat kamu lakukan secara konsisten."
            );

        }

        else if (masalah == "2") {

            alert(
                "KONSENTRASI BELAJAR\n\n" +
                "Kesulitan berkonsentrasi dapat dipengaruhi oleh kondisi " +
                "lingkungan, kebiasaan, pikiran, maupun pengelolaan waktu.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang paling sering mengganggu konsentrasimu saat belajar?\n\n" +
                "LANGKAH AWAL:\n" +
                "Coba belajar dalam waktu tertentu dengan mengurangi " +
                "gangguan yang tidak diperlukan."
            );

        }

        else if (masalah == "3") {

            let waktu = prompt(
                "MANAJEMEN WAKTU BELAJAR\n\n" +
                "Apa yang paling membuat jadwal belajarmu tidak teratur?\n\n" +
                "1. Sering menunda tugas\n" +
                "2. Terlalu banyak kegiatan\n" +
                "3. Tidak tahu menentukan prioritas\n" +
                "4. Sulit konsisten"
            );

            if (waktu >= 1 && waktu <= 4) {

                alert(
                    "REFLEKSI MANAJEMEN WAKTU\n\n" +
                    "Mengatur waktu merupakan bagian dari keterampilan " +
                    "belajar dan pengembangan kemandirian.\n\n" +
                    "LANGKAH AWAL:\n" +
                    "Buat daftar kegiatan yang harus dilakukan. " +
                    "Tentukan mana yang paling penting dan kerjakan " +
                    "secara bertahap.\n\n" +
                    "Tidak perlu langsung membuat jadwal yang sempurna. " +
                    "Yang penting adalah menemukan pola yang dapat kamu jalankan."
                );

            } else {
                alert("Silakan pilih angka 1 sampai 4.");
            }

        }

        else if (masalah == "4") {

            alert(
                "KESULITAN MEMAHAMI MATERI\n\n" +
                "Kesulitan memahami materi tidak selalu berarti kamu " +
                "tidak mampu belajar. Setiap orang memiliki cara dan " +
                "kecepatan belajar yang berbeda.\n\n" +
                "REFLEKSI:\n" +
                "Bagian materi apa yang paling sulit kamu pahami?\n\n" +
                "LANGKAH AWAL:\n" +
                "Coba pecah materi menjadi bagian yang lebih kecil, " +
                "catat bagian yang belum dipahami, kemudian cari bantuan " +
                "dari guru, teman, atau sumber belajar yang sesuai."
            );

        }

        else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }


    // =========================
    // BIDANG KARIER
    // =========================

    else if (bidang == "4") {

        let masalah = prompt(
            "BIDANG KARIER\n\n" +
            "Hal apa yang sedang ingin kamu pahami?\n\n" +
            "1. Minat\n" +
            "2. Kemampuan dan potensi\n" +
            "3. Pilihan pendidikan\n" +
            "4. Perencanaan masa depan"
        );

        if (masalah == "1") {

            alert(
                "MENGENALI MINAT\n\n" +
                "Minat dapat membantu seseorang mengenali bidang " +
                "yang menarik dan ingin dikembangkan.\n\n" +
                "REFLEKSI:\n" +
                "Kegiatan apa yang membuatmu merasa tertarik dan ingin " +
                "mempelajarinya lebih jauh?\n\n" +
                "LANGKAH AWAL:\n" +
                "Tuliskan beberapa kegiatan yang kamu sukai, kemudian " +
                "lihat bidang apa yang memiliki kesamaan."
            );

        }

        else if (masalah == "2") {

            alert(
                "MENGENALI KEMAMPUAN DAN POTENSI\n\n" +
                "Mengenali kemampuan membantu kamu memahami kekuatan " +
                "yang dapat dikembangkan untuk tujuan pendidikan maupun karier.\n\n" +
                "REFLEKSI:\n" +
                "Dalam kegiatan apa kamu merasa cukup mampu atau sering " +
                "mendapatkan hasil yang baik?\n\n" +
                "LANGKAH AWAL:\n" +
                "Catat kemampuan yang kamu miliki dan kemampuan yang masih " +
                "ingin kamu kembangkan."
            );

        }

        else if (masalah == "3") {

            alert(
                "PILIHAN PENDIDIKAN\n\n" +
                "Menentukan pilihan pendidikan sebaiknya mempertimbangkan " +
                "minat, kemampuan, tujuan, serta informasi mengenai pilihan " +
                "yang tersedia.\n\n" +
                "REFLEKSI:\n" +
                "Apa bidang pendidikan yang sedang kamu pertimbangkan?\n\n" +
                "LANGKAH AWAL:\n" +
                "Kumpulkan informasi mengenai jurusan atau bidang yang kamu " +
                "minati sebelum membuat keputusan."
            );

        }

        else if (masalah == "4") {

            alert(
                "PERENCANAAN MASA DEPAN\n\n" +
                "Perencanaan karier merupakan proses yang dapat berkembang " +
                "seiring dengan pengalaman dan pemahaman diri.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang ingin kamu capai dalam beberapa tahun ke depan?\n\n" +
                "LANGKAH AWAL:\n" +
                "Tentukan satu tujuan jangka pendek yang dapat kamu mulai " +
                "lakukan sekarang sebagai bagian dari tujuan jangka panjangmu."
            );

        }

        else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }


    else {
        alert(
            "Pilihan belum sesuai.\n\n" +
            "Silakan pilih angka 1 sampai 4."
        );
    }
}
                
function petaMasalah() {

    let masalah = prompt(
        "PETA MASALAH\n\n" +
        "Fitur ini membantu kamu mengenali masalah yang sedang " +
        "dihadapi sebelum menentukan langkah yang dapat dilakukan.\n\n" +
        "Masalah apa yang paling ingin kamu pahami?\n\n" +
        "1. Belajar\n" +
        "2. Pertemanan\n" +
        "3. Keluarga\n" +
        "4. Percaya diri\n" +
        "5. Karier"
    );

    if (masalah == "1") {

        let kondisi = prompt(
            "PETA MASALAH - BELAJAR\n\n" +
            "Apa yang paling kamu alami?\n\n" +
            "1. Kurang motivasi\n" +
            "2. Sulit berkonsentrasi\n" +
            "3. Sering menunda tugas\n" +
            "4. Sulit memahami materi"
        );

        if (kondisi >= 1 && kondisi <= 4) {

            alert(
                "HASIL PEMETAAN AWAL\n\n" +
                "Bidang: Belajar\n\n" +
                "Kamu sedang mencoba mengenali hambatan yang " +
                "memengaruhi proses belajarmu.\n\n" +
                "REFLEKSI:\n" +
                "Menurutmu, apa yang menjadi penyebab utama masalah tersebut?\n\n" +
                "DAMPAK:\n" +
                "Apakah masalah tersebut memengaruhi tugas, nilai, " +
                "konsentrasi, atau semangat belajarmu?\n\n" +
                "LANGKAH AWAL:\n" +
                "Tentukan satu hal kecil yang dapat kamu ubah terlebih dahulu. " +
                "Tidak harus menyelesaikan seluruh masalah sekaligus."
            );

        } else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }

    else if (masalah == "2") {

        let kondisi = prompt(
            "PETA MASALAH - PERTEMANAN\n\n" +
            "Apa yang sedang kamu alami?\n\n" +
            "1. Salah paham dengan teman\n" +
            "2. Merasa dijauhi\n" +
            "3. Sulit mendapatkan teman\n" +
            "4. Konflik dengan teman"
        );

        if (kondisi >= 1 && kondisi <= 4) {

            alert(
                "HASIL PEMETAAN AWAL\n\n" +
                "Bidang: Sosial - Pertemanan\n\n" +
                "Hubungan sosial dapat memengaruhi kenyamanan seseorang " +
                "dalam menjalani aktivitas sehari-hari.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang sebenarnya terjadi dalam hubungan tersebut?\n\n" +
                "PERASAAN:\n" +
                "Apa yang kamu rasakan akibat situasi tersebut?\n\n" +
                "KEBUTUHAN:\n" +
                "Apa yang kamu harapkan dari hubungan tersebut?\n\n" +
                "LANGKAH AWAL:\n" +
                "Jika situasinya memungkinkan, cobalah membicarakan masalah " +
                "dengan komunikasi yang tenang dan saling menghargai."
            );

        } else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }

    else if (masalah == "3") {

        let kondisi = prompt(
            "PETA MASALAH - KELUARGA\n\n" +
            "Apa yang paling kamu rasakan?\n\n" +
            "1. Sulit berkomunikasi\n" +
            "2. Sering terjadi konflik\n" +
            "3. Merasa kurang dipahami\n" +
            "4. Merasa tertekan oleh tuntutan"
        );

        if (kondisi >= 1 && kondisi <= 4) {

            alert(
                "HASIL PEMETAAN AWAL\n\n" +
                "Bidang: Pribadi - Keluarga\n\n" +
                "Masalah dalam keluarga dapat melibatkan berbagai " +
                "perasaan dan kebutuhan dari setiap anggota keluarga.\n\n" +
                "REFLEKSI:\n" +
                "Apa situasi yang paling sering memunculkan masalah tersebut?\n\n" +
                "PERASAAN:\n" +
                "Bagaimana situasi tersebut memengaruhi dirimu?\n\n" +
                "LANGKAH AWAL:\n" +
                "Coba kenali apa yang dapat kamu komunikasikan dengan " +
                "cara yang tenang. Jika masalah terasa sulit dihadapi " +
                "sendiri, kamu dapat mencari dukungan dari orang dewasa " +
                "atau konselor yang dapat dipercaya."
            );

        } else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }

    else if (masalah == "4") {

        let kondisi = prompt(
            "PETA MASALAH - PERCAYA DIRI\n\n" +
            "Dalam situasi apa kamu paling merasa kurang percaya diri?\n\n" +
            "1. Berbicara di depan orang lain\n" +
            "2. Bergaul dengan teman\n" +
            "3. Mengemukakan pendapat\n" +
            "4. Menghadapi tugas atau tantangan"
        );

        if (kondisi >= 1 && kondisi <= 4) {

            alert(
                "HASIL PEMETAAN AWAL\n\n" +
                "Bidang: Pribadi - Kepercayaan Diri\n\n" +
                "Kepercayaan diri dapat berkembang melalui pengalaman, " +
                "pengenalan terhadap kemampuan diri, dan kesempatan untuk " +
                "mencoba secara bertahap.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang biasanya kamu pikirkan ketika berada dalam situasi tersebut?\n\n" +
                "KEKUATAN DIRI:\n" +
                "Apa kemampuan yang sebenarnya kamu miliki tetapi belum " +
                "kamu sadari atau gunakan secara optimal?\n\n" +
                "LANGKAH AWAL:\n" +
                "Pilih satu situasi kecil untuk dilatih secara bertahap."
            );

        } else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }

    else if (masalah == "5") {

        let kondisi = prompt(
            "PETA MASALAH - KARIER\n\n" +
            "Apa yang sedang kamu pikirkan tentang masa depan?\n\n" +
            "1. Belum mengetahui minat\n" +
            "2. Bingung memilih jurusan\n" +
            "3. Belum mengetahui kemampuan diri\n" +
            "4. Bingung menentukan rencana masa depan"
        );

        if (kondisi >= 1 && kondisi <= 4) {

            alert(
                "HASIL PEMETAAN AWAL\n\n" +
                "Bidang: Karier\n\n" +
                "Perencanaan karier dimulai dari proses mengenali diri " +
                "dan mengumpulkan informasi mengenai berbagai pilihan.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang paling membuatmu ragu terhadap pilihan masa depan?\n\n" +
                "PEMAHAMAN DIRI:\n" +
                "Coba pertimbangkan minat, kemampuan, nilai yang kamu anggap " +
                "penting, serta pengalaman yang pernah kamu miliki.\n\n" +
                "LANGKAH AWAL:\n" +
                "Cari informasi tentang pilihan yang sedang kamu pertimbangkan " +
                "dan bandingkan dengan kondisi serta tujuan dirimu."
            );

        } else {
            alert("Silakan pilih angka 1 sampai 4.");
        }
    }

    else {
        alert(
            "Pilihan belum sesuai.\n\n" +
            "Silakan pilih angka 1 sampai 5."
        );
    }
}

function skalaPerasaan() {

    let skala = prompt(
        "SKALA PERASAAN\n\n" +
        "Nilai kondisi perasaanmu saat ini dari 1 sampai 10.\n\n" +
        "1 = Sangat tidak nyaman\n" +
        "5 = Cukup nyaman\n" +
        "10 = Sangat nyaman\n\n" +
        "Masukkan angka 1-10:"
    );

    if (skala >= 1 && skala <= 10) {

        let hasil = "";

        if (skala <= 3) {

            hasil =
                "KONDISI PERASAAN: PERLU PERHATIAN\n\n" +
                "Nilai yang kamu pilih menunjukkan bahwa saat ini " +
                "kamu mungkin sedang merasakan kondisi yang kurang nyaman.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang paling memengaruhi perasaanmu saat ini?\n\n" +
                "KEBUTUHAN DIRI:\n" +
                "Coba beri dirimu waktu untuk memahami apa yang sedang " +
                "kamu rasakan tanpa langsung menyalahkan diri sendiri.\n\n" +
                "LANGKAH AWAL:\n" +
                "Kenali satu hal yang membuatmu tidak nyaman dan pikirkan " +
                "satu langkah kecil yang dapat kamu lakukan.";

        } else if (skala <= 6) {

            hasil =
                "KONDISI PERASAAN: CUKUP STABIL\n\n" +
                "Kondisi perasaanmu berada pada tingkat sedang. " +
                "Kamu dapat menggunakan kesempatan ini untuk memahami " +
                "apa yang membuatmu merasa lebih nyaman atau kurang nyaman.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang membuat kondisi perasaanmu berada pada angka tersebut?\n\n" +
                "PEMAHAMAN DIRI:\n" +
                "Perhatikan situasi, pikiran, dan aktivitas yang memengaruhi " +
                "perasaanmu sepanjang hari.\n\n" +
                "LANGKAH AWAL:\n" +
                "Pertahankan hal-hal yang membantu dirimu merasa lebih baik " +
                "dan kurangi hal yang membuatmu semakin terbebani.";

        } else {

            hasil =
                "KONDISI PERASAAN: CUKUP NYAMAN\n\n" +
                "Kondisi perasaanmu saat ini berada pada tingkat yang cukup nyaman.\n\n" +
                "REFLEKSI:\n" +
                "Apa yang sedang terjadi atau kamu lakukan sehingga merasa cukup nyaman?\n\n" +
                "KEKUATAN DIRI:\n" +
                "Kenali kebiasaan, dukungan, atau aktivitas yang membantu " +
                "menjaga kondisi positif tersebut.\n\n" +
                "LANGKAH AWAL:\n" +
                "Pertahankan kebiasaan positif dan tetap berikan ruang bagi " +
                "dirimu untuk mengenali perubahan perasaan.";
        }

        alert(
            "HASIL SKALA PERASAAN\n\n" +
            "Nilai yang kamu pilih: " + skala + "/10\n\n" +
            hasil +
            "\n\nCatatan: fitur ini merupakan media refleksi diri, " +
            "bukan alat diagnosis."
        );

    } else {

        alert(
            "Input belum sesuai.\n\n" +
            "Silakan masukkan angka dari 1 sampai 10."
        );
    }
}

function rekomendasiLayanan() {

    let kebutuhan = prompt(
        "REKOMENDASI LAYANAN BK\n\n" +
        "Pilih kebutuhan yang paling sesuai dengan kondisi kamu:\n\n" +
        "1. Saya ingin lebih memahami diri sendiri\n" +
        "2. Saya sedang mengalami masalah dengan teman\n" +
        "3. Saya kesulitan dalam belajar\n" +
        "4. Saya bingung menentukan pilihan masa depan\n" +
        "5. Saya sedang mengalami masalah dalam keluarga"
    );

    if (kebutuhan == "1") {

        alert(
            "REKOMENDASI LAYANAN\n\n" +
            "Bidang: PRIBADI\n\n" +
            "Layanan yang sesuai:\n" +
            "Pemahaman dan pengembangan diri.\n\n" +
            "Fokus:\n" +
            "• Mengenali kelebihan dan kekurangan diri\n" +
            "• Memahami perasaan dan kebutuhan diri\n" +
            "• Meningkatkan kepercayaan diri\n" +
            "• Mengembangkan kemampuan mengelola emosi\n\n" +
            "LANGKAH AWAL:\n" +
            "Kamu dapat menggunakan fitur Cek Kondisi Diri atau " +
            "Pahami Perasaanmu untuk melakukan refleksi awal."
        );

    }

    else if (kebutuhan == "2") {

        alert(
            "REKOMENDASI LAYANAN\n\n" +
            "Bidang: SOSIAL\n\n" +
            "Layanan yang sesuai:\n" +
            "Pengembangan hubungan sosial dan komunikasi interpersonal.\n\n" +
            "Fokus:\n" +
            "• Memahami hubungan dengan teman\n" +
            "• Meningkatkan kemampuan komunikasi\n" +
            "• Mengatasi salah paham\n" +
            "• Mengembangkan hubungan sosial yang sehat\n\n" +
            "LANGKAH AWAL:\n" +
            "Coba gunakan fitur Peta Masalah untuk memahami " +
            "situasi sosial yang sedang kamu alami."
        );

    }

    else if (kebutuhan == "3") {

        alert(
            "REKOMENDASI LAYANAN\n\n" +
            "Bidang: BELAJAR\n\n" +
            "Layanan yang sesuai:\n" +
            "Pengembangan kebiasaan dan keterampilan belajar.\n\n" +
            "Fokus:\n" +
            "• Meningkatkan motivasi belajar\n" +
            "• Mengatur waktu belajar\n" +
            "• Meningkatkan konsentrasi\n" +
            "• Mengatasi kesulitan memahami materi\n\n" +
            "LANGKAH AWAL:\n" +
            "Identifikasi hambatan belajar yang paling sering kamu alami " +
            "dan tentukan satu perubahan kecil yang bisa dilakukan."
        );

    }

    else if (kebutuhan == "4") {

        alert(
            "REKOMENDASI LAYANAN\n\n" +
            "Bidang: KARIER\n\n" +
            "Layanan yang sesuai:\n" +
            "Perencanaan dan pengembangan karier.\n\n" +
            "Fokus:\n" +
            "• Mengenali minat\n" +
            "• Mengenali kemampuan dan potensi\n" +
            "• Mempertimbangkan pilihan pendidikan\n" +
            "• Menentukan tujuan masa depan\n\n" +
            "LANGKAH AWAL:\n" +
            "Mulailah dengan mengenali hal yang kamu minati, " +
            "kemampuan yang kamu miliki, dan pilihan yang sedang kamu pertimbangkan."
        );

    }

    else if (kebutuhan == "5") {

        alert(
            "REKOMENDASI LAYANAN\n\n" +
            "Bidang: PRIBADI - KELUARGA\n\n" +
            "Layanan yang sesuai:\n" +
            "Pemahaman diri dan pengembangan kemampuan komunikasi.\n\n" +
            "Fokus:\n" +
            "• Memahami perasaan dalam situasi keluarga\n" +
            "• Mengenali kebutuhan diri\n" +
            "• Mengembangkan komunikasi yang sehat\n" +
            "• Menentukan cara menghadapi masalah secara lebih tepat\n\n" +
            "LANGKAH AWAL:\n" +
            "Kenali situasi yang paling membuatmu tidak nyaman. " +
            "Jika masalah terasa berat, kamu dapat mencari bantuan " +
            "dari konselor atau orang dewasa yang dapat dipercaya."
        );

    }

    else {

        alert(
            "Pilihan belum sesuai.\n\n" +
            "Silakan pilih angka 1 sampai 5."
        );
    }
}
function catatanKonseling() {

    let catatan = prompt(
        "CATATAN REFLEKSI DIRI\n\n" +
        "Tuliskan hal yang sedang ingin kamu pahami atau ceritakan.\n\n" +
        "Contoh:\n" +
        "Saya akhir-akhir ini sulit fokus belajar karena banyak pikiran.\n\n" +
        "Silakan tuliskan catatanmu:"
    );

    if (catatan != null && catatan.trim() != "") {

        let hasil = document.getElementById("hasil");

        hasil.innerHTML =
            "<div class='hasil-card'>" +
            "<h3>Catatan Refleksi</h3>" +
            "<p><strong>Catatan kamu:</strong></p>" +
            "<p>" + catatan + "</p>" +
            "<hr>" +
            "<p><strong>Refleksi:</strong></p>" +
            "<p>Apa yang sebenarnya sedang kamu rasakan atau butuhkan dari situasi tersebut?</p>" +
            "<p><strong>Langkah awal:</strong></p>" +
            "<p>Tentukan satu hal kecil yang dapat kamu lakukan untuk membantu dirimu menghadapi situasi tersebut.</p>" +
            "<p><em>Catatan ini merupakan media refleksi diri dan bukan diagnosis.</em></p>" +
            "</div>";

    } else {

        alert(
            "Catatan belum diisi.\n\n" +
            "Kamu dapat menuliskan apa yang sedang kamu pikirkan " +
            "ketika sudah merasa siap."
        );
    }
}

const URL_GOOGLE_SHEETS = "https://script.google.com/macros/s/AKfycbxFFcE--YGOg1ojOE0R5gGM4IvHzZGpZ514p3fqrNc4ztmMHVrhUoGKVvgLCU9TuvR3BQ/exec";

function kirimAngket() {
    const nama = document.getElementById("namaAngket").value.trim();
    const kelas = document.getElementById("kelasAngket").value.trim();
    const kondisi = document.getElementById("kondisiAngket").value;
    const perasaan = document.getElementById("perasaanAngket").value;
    const bidang = document.getElementById("bidangAngket").value;
    const skala = document.getElementById("skalaAngket").value;
    const catatan = document.getElementById("catatanAngket").value.trim();

    if (!nama || !kelas || !kondisi || !perasaan || !bidang || !skala) {
        alert("Mohon lengkapi semua bagian angket terlebih dahulu.");
        return;
    }

    const data = {
        nama: nama,
        kelas: kelas,
        kondisi: kondisi,
        perasaan: perasaan,
        bidang: bidang,
        skala: skala,
        catatan: catatan
    };

    fetch(URL_GOOGLE_SHEETS, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    })
    .then(() => {
        alert(
            "ANGKET BERHASIL DIKIRIM!\n\n" +
            "Terima kasih sudah mengisi angket KONSELINGKU."
        );

        document.getElementById("namaAngket").value = "";
document.getElementById("kelasAngket").value = "";
document.getElementById("kondisiAngket").value = "";
document.getElementById("perasaanAngket").value = "";
document.getElementById("bidangAngket").value = "";
document.getElementById("skalaAngket").value = "";
document.getElementById("catatanAngket").value = "";
    })
    .catch((error) => {
        console.error(error);
        alert(
            "Angket belum berhasil dikirim.\n\n" +
            "Silakan coba lagi."
        );
    });
}