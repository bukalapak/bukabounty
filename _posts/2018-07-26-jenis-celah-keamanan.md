---
layout: post
title: "JENIS CELAH KEAMANAN"
description: ""
comments: true
keywords: "jenis celah keamanan"
---

Kami akan memeriksa semua laporan yang masuk. Akan tetapi, tak semua laporan celah keamanan akan kami proses, karena tergantung pada risiko yang ditimbulkan. Temukan perbedaannya, sebagai berikut:

| Celah Keamanan Yang Diproses (Semua yang berhubungan dan berakibat pada bocornya kerahasiaan dan integritas data pengguna Bukalapak) | Celah Keamanan Yang Tidak Diproses (Semua yang memiliki tingkat risiko rendah dan tidak mendapatkan imbalan)  |
|-------|--------|
| Injection (SQL, NoSQL) | Semua celah keamanan yang melanggar aturan dan/atau di luar cakupan |
| Cross-site Request Forgery (CSRF) | Cross site-scripting (XSS) berisiko rendah. Contohnya, XSS yang hanya berdampak pada akun Anda sendiri |
| Broken Access Control (IDOR) | Open redirects. Pada kasus tertentu, kami masih memproses jika memiliki risiko yang lebih tinggi. Misalnya, mampu melakukan pencurian otentikasi token |
| Server-side code execution bugs (RCE) | Miskonfigurasi. Misalnya: HSTS, Missing cookie flags, Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy, X-Content-Security-Policy, X-WebKit-CSP, Content-Security-Policy-Report-Only |
| Cross-site Scripting (XSS) | Celah yang memanfaatkan browser dan aplikasi versi lama, termasuk semua versi Internet Explorer |
