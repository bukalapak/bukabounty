---
layout: post
title: "JENIS CELAH KEAMANAN"
description: ""
comments: true
keywords: "jenis celah keamanan"
---

Kami akan memeriksa semua laporan yang masuk. Akan tetapi, tak semua laporan celah keamanan akan kami proses, karena tergantung pada risiko yang ditimbulkan. Temukan perbedaannya, sebagai berikut:

| Celah Keamanan Yang Diproses | Celah Keamanan Yang Tidak Diproses |
|:---|:---|
| Semua yang berhubungan dan berakibat pada bocornya kerahasiaan dan integritas data pengguna Bukalapak. Contohnya seperti:<br><br>1. Injection (SQL, NoSQL)<br>2. Cross-site Scripting (XSS)<br>3. Cross-site Request Forgery (CSRF)<br>4. Broken Access Control (IDOR)<br>5. Server-side code execution bugs (RCE)  | Semua yang memiliki tingkat risiko rendah dan tidak mendapatkan imbalan: <br><br>1.Semua celah keamanan yang melanggar aturan dan/atau di luar cakupan<br>2.Cross site-scripting (XSS) berisiko rendah. Contohnya, XSS yang hanya berdampak pada akun Anda sendiri<br>3.Open redirects. Pada kasus tertentu, kami masih memproses jika memiliki risiko yang lebih tinggi. Misalnya, mampu melakukan pencurian otentikasi token<br>4. Miskonfigurasi. Misalnya: HSTS, Missing cookie flags, Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy, X-Content-Security-Policy, X-WebKit-CSP, Content-Security-Policy-Report-Only, CORS<br>5. Celah yang memanfaatkan browser dan aplikasi versi lama, termasuk semua versi Internet Explorer  |