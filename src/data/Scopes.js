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
    description: 'Hanya untuk untrusted devices',
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
]

const OutOfScopeVulnerabilities = [
  {
    name: 'Penemuan yang melanggar aturan dan/atau di luar cakupan',
  },
  {
    name: 'Social engineering',
  },
  {
    name: 'Open redirects',
    description: 'Pada kasus tertentu, kami akan memproses jika risikonya tinggi. Misalnya mampu melakukan pencurian token',
  },
  {
    name: 'Missing security headers',
    description: 'Contoh: HSTS, cookie flags, X-Frame-Options, X-XSS-Protection, dll',
  },
]

export { Domains, Vulnerabilities, OutOfScopeVulnerabilities };
