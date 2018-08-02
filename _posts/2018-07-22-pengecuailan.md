---
layout: post
title: "Pengecualian"
comments: true
description: ""
keywords: "Pengecualian, pengecualian"
---

`BukaBounty adalah program bug bounty yang berbasis impact (impact-based)`. Sehingga validasi akan dilakukan untuk melihat apakah issue berpengaruh terhadap user dan pelanggan produk Bukalapak atau tidak.

### Ketika melakukan penelitian terhadap celah keamanan, kami menghimbau kepada anda untuk tidak melakukan hal-hal berikut ini:

- **Social engineering** (termasuk **phising**) kepada staf Bukalapak ataupun kontraktor
- **Kontak fisik terhadap** properti atau data center Bukalapak

### Kategori laporan yang tidak masuk kualifikasi BukaBounty
- **Denial of service**
- **Spamming**
- **Missing cookie flags** pada cookies yang tidak sensitive
- **Policies** Bukalapak pada ada/tidak ada SPF/DMARC records
- **Login / logout CSRF**, atau **CSRF pada forms yang available untuk user anonymous** (user tak login). Contoh: form kontak
- Issue terkait **Password Policy**
- **Serangan lokal / MiTM** (Man in The Middle)
- **Information disclosure** (Kecuali data pelanggan/user Bukalapak) Contoh: server version, os version, dll
- **Fingerprinting / banner disclosure** pada common / public services.
- **Disclosure dari known public files atau direktori**. Contoh: robots.txt
- **Clickjacking / tapjacking** dan issue-issue yang hanya dapat dieksploitasi melalui clickjacking/tapjacking.
- **CSV injection**
- Issue yang membutuhkan **akses fisik ke kemputer korban**
- **Descriptive error messages**. Contoh: Stack Traces, application atau server errors
- **Open redirects**. 99% dari open redirects memiliki low security impact. Pada beberapa kasus dimana impact bernilai high, contoh: mencuri authentication token terkualifikasi BukaBounty
- Laporan yang menyatakan bahwa **software out of date / vulnerable** tanpa memberikan PoC (Proof of Concept)
- Issue-issue yang terkait dengan **HTTP transmission**
- Berhubungan dengan / adanya fitur **autocomplete** atau **save password** pada aplikasi atau web browser
- Ketidakadaan **Secure / HTTPOnly** flags pada non-security-sensitive Cookies
- Ketidakadaan dari **Security Speed bump** ketika meninggalkan aplikasi / website bukalapak
- **Bypass Captcha** yang lemah
- **Brute force** halaman Login / Forgot Password dan akun yang terkunci tanpa paksaan
- **OPTIONS HTTP method enabled**
- Issue **Content injection**
- **HTTPS Mixed Content Scripts**
- **Broken Links**
- **Path Disclosure** yang memiiki impact low
- **Self-XSS** yang tidak dapat digunakan untuk mengeksploitasi user lain. Kami membutuhkan bukti bagaimana XSS tersebut dapat digunakan untuk menyerang user Bukalapak lain (memaksa user lain untuk mengsubmit payload tidak masuk dalam kualifikasi BukaBounty)
- Issue-issee **Brute Force**
- Issue terkait **window.opener-related**
- Laporan yang mencantumkan **spekulasi tinggi terhadap kerusakan secara teori**. Laporan harus **kongkrit**
- **Tidak adanya HTTP security headers**, secara spesifik, contohnya Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy, X-Content-Security-Policy, X-WebKit-CSP, Content-Security-Policy-Report-Only
- **Outdated web browsers**: Vulnerabilities yang tergantung dari outdated atau unpatched browser tidak masuk kualifikasi BukaBounty, termasuk Internet Explorer semua versi
- **Vulnerabilities yang mencangkup konten aktif** seperti add-ons web browser
- **Kontak fisik atau serangan social engineering** terhadap user bukalapak (termasuk karyawan Bukalapak)
- Issue yang membutuhkan **interaksi user**