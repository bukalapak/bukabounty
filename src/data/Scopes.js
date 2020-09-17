import React from 'react';

import ComputerIcon from '@material-ui/icons/Computer';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HTTPIcon from '@material-ui/icons/Http';

const Domains = [
  {
    domain: 'www.bukalapak.com',
    description: 'Bukalapak versi desktop',
    icon: <ComputerIcon />,
  },
  {
    domain: 'm.bukalapak.com',
    description: 'Bukalapak versi mobile',
    icon: <SmartphoneIcon />,
  },
  {
    domain: 'api.bukalapak.com',
    description: 'API Bukalapak',
    icon: <HTTPIcon />,
  },
  {
    domain: 'seller.bukalapak.com',
    description: 'Bukalapak seller center untuk pelapak',
    icon: <ComputerIcon />,
  },
  {
    domain: 'mitra.bukalapak.com',
    description: 'Progressive web app (PWA) untuk mitra Bukalapak',
    icon: <SmartphoneIcon />
  },
];

const Vulnerabilities = [
  {
    name: 'Remote Command Execution (RCE)',
    description: 'Cukup tampilkan output dari command id dan IP internal sebagai PoC'
  },
  {
    name: 'Leaked Private Keys',
    description: 'Kecuali key sudah tidak digunakan lagi oleh Bukalapak'
  },
  {
    name: 'Leaked PII',
    description: 'Informasi pengguna Bukalapak yang bersifat rahasia.'
  },
  {
    name: 'SQL/NoSQL Injection',
    description: 'Cukup tampilkan output SELECT user() sebagai PoC'
  },
  {
    name: 'Local/Remote File Inclusion (LFI/RFI)',
  },
  {
    name: 'Authentication Bypass',
  },
  {
    name: 'Multi-factor Authentication Bypass',
    description: 'Bypass OTP untuk untrusted devices',
  },
  {
    name: 'Cross-Site Scripting (XSS)',
    description: 'Kecuali XSS yang hanya berdampak pada diri sendiri (Self-XSS)',
  },
  {
    name: 'Broken Access Control',
    description: 'Cukup tampilkan 1 atau 2 data sebagai PoC',
  },
  {
    name: 'Server-Side Request Forgery (SSRF)',
    description: 'Hanya SSRF ke jaringan internal',
  },
  {
    name: 'Cross-Site Request Forgery (CSRF)',
    description: 'Kecuali CSRF pada logout atau memang disengaja untuk user anonymous',
  },
  {
    name: 'Business Logic Flaws',
    description: 'Celah yang dapat merugikan Bukalapak atau penggunanya',
  },
]

const OutOfScopeVulnerabilities = [
  {
    name: 'Temuan yang melanggar aturan dan/atau di luar cakupan',
  },
  {
    name: 'Temuan dengan risiko rendah',
    description: 'Self XSS, Login/Logout CSRF, CORS tanpa melampirkan bukti yang berakibat kepada pengguna lain',
  },
  {
    name: 'Pemakaian automated scanner',
    description: 'Hasil output dari tools seperti Nmap, SSL Scan, dan lainnya tidak diterima',
  },
  {
    name: 'Social engineering',
    description: 'Memanfaatkan phising/fraud diluar Bukalapak (email, sms, facebook messenger, whatsapp, dan lainnya)',
  },
  {
    name: 'Open redirects',
    description: 'Pada kasus tertentu, kami akan memproses jika risikonya tinggi. Misalnya mampu melakukan pencurian token',
  },
  {
    name: 'Missing security headers',
    description: 'Contoh: HSTS, cookie flags, X-Frame-Options, X-XSS-Protection, dll',
  },
  {
    name: 'DDoS',
    description: 'Kecuali DoS pada level aplikasi dan eksploitnya mudah',
  },
  {
    name: 'Clickjacking',
  },
  {
    name: 'Kesalahan pada konfigurasi SPF, DKIM, dan DMARC.',
    description: 'SPF, DKIM, dan DMARC yang hanya menggunakan teknik social engineering untuk eksploitasinya',
  },
]

export { Domains, Vulnerabilities, OutOfScopeVulnerabilities };
