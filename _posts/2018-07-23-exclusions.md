---
layout: post
title: "Exclusions"
comments: true
description: ""
keywords: "Exclusions, exclusion"
---

### While researching, we’d like to ask you to refrain from:

- Denial of service
- Spamming
- Social engineering (including phishing) of Bukalapak staff or contractors
- Any physical attempts against Bukalapak property or data centers
- Missing cookie flags on non-sensitive cookies
- Our policies on presence/absence of SPF/DMARC records
- Login/logout CSRF, or CSRF in forms that are available to anonymous users (e.g. the contact form).
- Issues relating to Password Policy
- Any local attack/MITM
- Information disclosure (excluding customer data) eg. server version, os version…
- Fingerprinting / banner disclosure on common/public services.
- Disclosure of known public files or directories, (e.g. robots.txt).
- Clickjacking/tapjacking and issues only exploitable through clickjacking/tapjacking.
- CSV injection.
- Issues that require physical access to a victim’s computer.
- Descriptive error messages (e.g. Stack Traces, application or server errors)
- Open redirects. 99% of open redirects have low security impact. For the rare cases where the impact is higher, example: stealing auth tokens. we still need them.
- Reports that state that software is out of date/vulnerable without a proof of concept.
- Most issues dealing with HTTP transmission.
- Presence of application or web browser ‘autocomplete’ or ‘save password’ functionality.
- Lack of Secure/HTTPOnly flags on non-security-sensitive Cookies.
- Lack of Security Speed bump when leaving the site.
- Weak Captcha / Captcha Bypass
- Login or Forgot Password page brute force and account lockout not enforced.
- OPTIONS HTTP method enabled
- Content injection issues.
- HTTPS Mixed Content Scripts
- Broken Links
- Path Disclosure that have low security impact
- Self-XSS that cannot be used to exploit other users. We require evidence on how the XSS can be used to attack another Bukalapak user (this includes having a user paste JavaScript into the browser console).
- Most brute forcing issues
- Issues relating to Password Policy
- Any local attack/MITM
- Information disclosure (excluding customer data) eg. server version
- Best practices concerns.
- window.opener-related issues.
- Highly speculative reports about theoretical damage. Be concrete.
- Missing HTTP security headers, specifically, For e.g. Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy, X-Content-Security-Policy, X-WebKit-CSP, Content-Security-Policy-Report-Only
- Outdated web browsers: vulnerabilities contingent upon outdated or unpatched browsers will not be honoured, including Internet Explorer all versions
- Vulnerabilities involving active content such as web browser add-ons
- Physical or social engineering attempts (this includes phishing attacks against Bukalapak employees).
- Issues requiring user-interaction