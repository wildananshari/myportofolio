document.addEventListener('DOMContentLoaded', function () {

    // Inisialisasi Typed.js untuk efek ketikan
    if (document.querySelector('.typing-effect')) {
        new Typed('.typing-effect', {
            strings: ['Operator Produksi', 'Pekerja Keras', 'Profesional Berdedikasi', 'Mudah Beradaptasi'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    // Smooth Scroll untuk link navigasi
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Kode untuk penanganan form kontak telah dihapus karena tidak lagi diperlukan.

});