// Template
/*

{
  name: '',
  profile: '',
  lastSubmission: Date.parse('January 1, 1970'),
  bounties: {
    medium: 0,
    high: 0,
    critical: 0,
    emergency: 0,
  }
},

*/

const Researchers = [
  {
    name: 'Aidil Arief',
    profile: 'https://www.linkedin.com/in/aidil-arief-927b48209',
    lastSubmission: Date.parse('March 12, 2021'),
    bounties: {
      low: 1,
      medium: 0,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Rudi Andriano',
    profile: 'https://www.linkedin.com/in/rudiandriano/',
    lastSubmission: Date.parse('January 28, 2021'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'jasayosep',
    profile: 'https://medium.com/@jasayosep',
    lastSubmission: Date.parse('January 3, 2021'),
    bounties: {
      low: 0,
      medium: 2,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Bima Ikhsan',
    profile: 'https://twitter.com/Ikhsaanaa_',
    lastSubmission: Date.parse('October 29, 2020'),
    bounties: {
      low: 0,
      medium: 2,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Benediktus Sava',
    profile: 'https://twitter.com/savabenediktus',
    lastSubmission: Date.parse('October 16, 2020'),
    bounties: {
      low: 1,
      medium: 0,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Tommy Elco Geraldi',
    profile: 'https://www.linkedin.com/in/tommyelcogeraldi/',
    lastSubmission: Date.parse('October 12, 2020'),
    bounties: {
      low: 1,
      medium: 0,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Emanuel Beni Harijanto',
    profile: 'https://www.linkedin.com/in/emanuelharijanto/',
    lastSubmission: Date.parse('August 25, 2020'),
    bounties: {
      low: 1,
      medium: 0,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Reynaldi Hartono',
    profile: 'https://reynhartono.com',
    lastSubmission: Date.parse('July 19, 2020'),
    bounties: {
      low: 1,
      medium: 0,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Rahmat Rhamadhan',
    profile: null,
    lastSubmission: Date.parse('June 13, 2020'),
    bounties: {
      low: 1,
      medium: 0,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Muhammad Thomas Fadhila Y',
    profile: 'https://www.linkedin.com/in/fadhilthomas',
    lastSubmission: Date.parse('April 26, 2020'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Stevanus Eka Setya MM',
    profile: 'https://twitter.com/StevanMbabalu',
    lastSubmission: Date.parse('March 10, 2020'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Muhammad Visat Sutarno',
    profile: 'https://visat.me/',
    lastSubmission: Date.parse('March 4, 2020'),
    bounties: {
      low: 0,
      medium: 1,
      high: 1,
      critical: 1,
      // emergency: 0,
    }
  },
  {
    name: 'Gilang Sukma Wijaya',
    profile: 'https://medium.com/@g.sukma',
    lastSubmission: Date.parse('February 26, 2020'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Muhammad R. Maulana',
    profile: 'https://twitter.com/agamimaulana',
    lastSubmission: Date.parse('March 3, 2020'),
    bounties: {
      low: 1,
      medium: 2,
      high: 4,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Anggi Gunawan',
    profile: 'https://bugbounty-hunter.blogspot.co.id',
    lastSubmission: Date.parse('December 19, 2019'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Daffa Ilham Ramadan',
    profile: 'https://medium.com/@daffailhamr',
    lastSubmission: Date.parse('December 6, 2019'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Dani Ilman Naviangga',
    profile: 'https://medium.com/@ilman.dani11',
    lastSubmission: Date.parse('November 22, 2019'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Rahmat Wahyu Hadi',
    profile: 'https://github.com/wahyuhadi',
    lastSubmission: Date.parse('September 5, 2019'),
    bounties: {
      low: 0,
      medium: 0,
      high: 0,
      critical: 1,
      // emergency: 0,
    }
  },
  {
    name: 'Ichsan Adit',
    profile: null,
    lastSubmission: Date.parse('July 9, 2018'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
    {
    name: 'Becausewhynut',
    profile: 'https://twitter.com/becausewhynut_',
    lastSubmission: Date.parse('August 13, 2019'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Luthfi Bia Susilo Putra',
    profile: 'https://medium.com/@trimatrasec',
    lastSubmission: Date.parse('January 22, 2019'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 1,
      // emergency: 0,
    }
  },
  {
    name: 'Bastian Welfrid',
    profile: null,
    lastSubmission: Date.parse('June 21, 2019'),
    bounties: {
      low: 0,
      medium: 4,
      high: 2,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Fathur Waldi L',
    profile: null,
    lastSubmission: Date.parse('July 11, 2018'),
    bounties: {
      low: 0,
      medium: 1,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Tomi A',
    profile: 'https://www.linkedin.com/in/tomi-a-3b7a0a11b/',
    lastSubmission: Date.parse('November 23, 2018'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Arif Mukhlis',
    profile: 'https://medium.com/@arifmukhlis',
    lastSubmission: Date.parse('August 03, 2019'),
    bounties: {
      low: 0,
      medium: 3,
      high: 2,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'M Irfan Sulaiman',
    profile: 'https://linkedin.com/in/mirfansulaiman/',
    lastSubmission: Date.parse('August 21, 2019'),
    bounties: {
      low: 0,
      medium: 3,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Abdillah Muhammad Hasni',
    profile: 'https://abdilahrf.github.io/',
    lastSubmission: Date.parse('June 26, 2019'),
    bounties: {
      low: 0,
      medium: 2,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Dicky Achmad Fauzi',
    profile: 'https://twitter.com/dckyachmd',
    lastSubmission: Date.parse('February 18, 2019'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Rahmadil Adha',
    profile: 'https://www.linkedin.com/in/rahmadil-adha-5011435a/',
    lastSubmission: Date.parse('February 25, 2019'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Nosa Shandy',
    profile: 'https://apapedulimu.click/',
    lastSubmission: Date.parse('March 7, 2019'),
    bounties: {
      low: 0,
      medium: 2,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Bahtiyar Istiyarno',
    profile: 'https://www.linkedin.com/in/bahtiyar-istiyarno/',
    lastSubmission: Date.parse('April 28, 2019'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Mukul Malviya',
    profile: 'https://www.linkedin.com/in/mukul-malviya-16a40a121/',
    lastSubmission: Date.parse('April 30, 2019'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'M. Bilal Giri Nabhan',
    profile: 'https://linkedin.com/in/bilalgiri',
    lastSubmission: Date.parse('May 18, 2019'),
    bounties: {
      low: 0,
      medium: 0,
      high: 1,
      critical: 0,
      // emergency: 0,
    }
  },
  {
    name: 'Abir Khan',
    profile: null,
    lastSubmission: Date.parse('May 26, 2019'),
    bounties: {
      low: 0,
      medium: 1,
      high: 0,
      critical: 0,
      // emergency: 0,
    }
  },
];

export default Researchers;
