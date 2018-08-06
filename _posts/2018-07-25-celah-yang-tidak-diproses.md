---
layout: post
title: "Celah keamanan yang tidak diproses"
description: ""
comments: true
keywords: "Celah keamanan yang tidak diproses"
---

##### Sebagian laporan tidak akan diproses, tergantung pada risiko yang ditimbulkan. Meskipun demikian, kami tetap akan melakukan pemeriksaan semua kasus. Berikut adalah laporan umum yang memiliki tingkat risiko rendah dan tidak mendapatkan hadiah:

- **Semua celah keamanan yang melanggar aturan dan/atau di luar cakupan.**
- **Cross site-scripting (XSS)** dengan tingkat risiko rendah. Contohnya XSS yang hanya berdampak pada akun anda sendiri.
- **Open redirects.** 99% dari open redirect memiliki tingkat risiko keamanan yang rendah. Pada kasus tertentu, kami masih menerima laporan celah keamanan ini jika memiliki risiko yang lebih tinggi. Misalnya, mampu melakukan pencurian otentikasi token.
- **Miskonfigurasi.** Misalnya: HSTS, Missing cookie flags, Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy, X-Content-Security-Policy, X-WebKit-CSP, Content-Security-Policy-Report-Only.
- **Celah yang memanfaatkan browser dan aplikasi versi lama.** Celah keamanan yang memanfaatkan versi celah browser dan aplikasi versi lama.