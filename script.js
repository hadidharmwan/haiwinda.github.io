 const balloonContainer = document.getElementById('balloon-container');
        const loveMessageContainer = document.getElementById('love-message-container');

        // Daftar kalimat romantis yang akan muncul saat balon meletus
const loveMessages = [
    "Hai Winda, ada pantun nih disimak ya!",
    "Cek",
    "1",
    "2",
    "3",
    "Bunga mawar di tepi jalan,",
    "Harum semerbak menggoda hati.",
    "Berharap kau jadi teman sejalan,",
    "Menjalani cerita yang penuh arti.❤️",

    "...Lanjut",
    "Bulan purnama malam bersinar,",
            "Cahaya lembut memikat pandangan.",
            "Semoga cinta ini takkan pudar,",
            "Bersama kita wujudkan impian.💕",
        
    "Sekali lagi ya..",
"    Hati ini penuh harapan,",
"Menyimpan rasa yang tulus dan suci.",
"Mari kita jalani perjalanan,",
    "Dengan senyuman dan cinta sejati.",

    "Penutup",
    "Burung Irian,",
    "Burung Cendrawasih,",
    "Itulah nama-nama burung :D",
];
        
let baru = 0;

        // Fungsi untuk membuat balon cinta
        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}vw`;
            balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;

            // Menambahkan event listener untuk meletus saat diklik
            balloon.addEventListener('click', () => {
                balloon.classList.add('balloon-pop');

                // Menampilkan love icon terlebih dahulu
                // showLoveIcon();

                // Menampilkan kalimat romantis setelah love icon
                setTimeout(showLoveMessage, 1000); // Delay untuk kalimat romantis

                setTimeout(() => {
                    balloon.remove();
                }, 300); // Menghapus balon setelah meletus
            });

            balloonContainer.appendChild(balloon);

            // Hapus balon dari DOM setelah 8 detik jika tidak diklik
            setTimeout(() => {
                balloon.remove();
            }, 8000);
        }

        // Fungsi untuk menampilkan love icon
        function showLoveIcon() {
            const loveIcon = document.createElement('div');
            loveIcon.classList.add('love-icon');
            loveIcon.innerHTML = "❤️"; // Ikon hati

            loveMessageContainer.appendChild(loveIcon);

            // Menghapus love icon setelah animasi selesai
            setTimeout(() => {
                loveIcon.remove();
            }, 1000);
        }

        // Fungsi untuk menampilkan pesan romantis selama 5 detik
        function showLoveMessage() {
            const message = document.createElement('div');
            message.classList.add('love-message');
            // const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
            const randomMessage = loveMessages[baru];

            message.innerHTML = randomMessage;

            loveMessageContainer.appendChild(message);

            // Menghapus pesan setelah animasi selesai
            setTimeout(() => {
                message.remove();
            }, 5000);

            baru = (baru + 1) % loveMessages.length;
        }

        // Membuat balon secara terus-menerus
        setInterval(createBalloon, 1000);
