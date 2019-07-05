import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const reportSteps = [
  {
    label: 'Tulis laporan dengan email',
    content: (
      <>
        <Typography>
        Anda tidak perlu menuliskan laporan pada file PDF, cukup tuliskan di badan email saja. Bagian-bagian yang wajib ada pada laporan adalah:
        </Typography>
        <ul>
          <li>Jenis celah keamanan yang ditemukan.</li>
          <li>Langkah-langkah singkat yang diperlukan untuk mereplikasi celah keamanan.</li>
          <li>Bukti atau Proof of Concept (PoC) yang dapat berbentuk gambar atau video. Jadikan sebagai lampiran email.</li>
          <li>Dampak yang dapat ditimbulkan akibat adanya celah keamanan ini.</li>
        </ul>
      </>
    )
  },
  {
    label: 'Kirim ke security@bukalapak.com',
    content: (
      <>
        Kirimkan laporan ke <MuiLink color="primary" target="_blank" rel="noopener noreferrer" href="mailto:security@bukalapak.com">security@bukalapak.com</MuiLink> dengan subjek berformat:
        <br />
        <b>[BUKABOUNTY] Judul Laporan</b>
        <br />
        <br />
        Contoh: [BUKABOUNTY] Stored XSS pada Ulasan Barang
      </>
    ),
  },
  {
    label: 'Tunggu balasan',
    content: (
      <>
        Silakan tunggu balasan dari kami. Kami akan membalas email hanya pada hari dan jam efektif kerja (Senin-Jumat pukul 10.00-17.00 WIB). Cepat atau tidaknya respon kami terhadap laporan Anda bergantung pada kelengkapan dan kejelasan bukti yang disertakan.
      </>
    )
  }
];

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(2),
  },
  stepperActions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  stepperActionsReset: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function Bounty() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleStepNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleStepBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepReset() {
    setActiveStep(0);
  }

  return (
    <Typography component="div" align="justify">
      <Typography variant="h5" gutterBottom>
        Temukan celah, dapat hadiah!
      </Typography>
      <Typography variant="body1" paragraph>
        Secanggih apapun teknologinya, takkan pernah ada yang terlindungi sempurna. Kami pun merasakan hal yang sama, dan menyadari bahwa kolaborasi dengan para periset keamanan punya peran krusial dalam meningkatkan kualitas keamanan kami. Jika Anda yakin telah menemukan celah keamanan pada produk dan layanan Bukalapak, jangan ragu untuk segera melaporkannya. Dengan senang hati, kami akan berdiskusi dan bekerja sama untuk menyelesaikan masalah itu.
      </Typography>
      <Typography variant="body1" paragraph>
        Sebagai wujud penghargaan kami terhadap partisipasi Anda, kami akan memberikan imbalan untuk setiap laporan celah keamanan yang dinyatakan valid. Nilai imbalan yang diberikan bervariasi, tergantung pada tingkat risiko dari celah keamanan yang dilaporkan. Ingat, keputusan pemberian imbalan bersifat mutlak.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Perhatikan sebelum melaporkan!
      </Typography>
      <Typography variant="body1" paragraph>
        Sebelum melakukan percobaan riset keamanan pada Bukalapak, mohon baca dan pahami beberapa informasi dan peraturan berikut:
      </Typography>
      <ul>
        <li>Pemeriksaan celah keamanan hanya <b>menggunakan akun sendiri</b>.</li>
        <li>Usaha pemeriksaan tersebut <b>tidak boleh membahayakan</b> pengguna lain atau sistem yang ada di Bukalapak.</li>
        <li>Anda <b>tidak boleh mempublikasikan</b> temuan celah keamanan kepada khalayak umum tanpa seizin kami.</li>
        <li>Anda <b>hanya boleh mempublikasikan</b> temuan celah keamanan yang dianggap valid, bukan merupakan duplikat, dan telah melalui proses verifikasi dari kami.</li>
        <li>Anda <b>tidak boleh memanfaatkan</b> celah keamanan yang ditemukan untuk kepentingan pribadi atau kelompok tertentu.</li>
        <li>Bukalapak tidak akan memberikan sanksi atau tindakan hukum kepada periset keamanan selama mematuhi peraturan program BukaBounty.</li>
        <li>Bukalapak <b>akan memberikan sanksi dan/atau langkah hukum</b> terhadap mereka yang tidak mengikuti peraturan berdasarkan hukum yang berlaku, meliputi tapi tidak terbatas pada <MuiLink color="primary" target="_blank" rel="noopener noreferrer" href="https://www.anri.go.id/assets/download/97UU-Nomor-11-Tahun-2008-Tentang-Informasi-dan-Transaksi-Elektronik.pdf">Undang-Undang Republik Indonesia No. 11 Tahun 2008</MuiLink> tentang Informasi dan Transaksi Elektronik atau hukum lokal lainnya di bidang informasi dan transaksi elektronik.</li>
      </ul>
      <Typography variant="body1" paragraph>
        Dengan mengikuti program ini, Anda telah mengetahui segala informasi di atas dan setuju untuk terikat pada aturan-aturan yang telah disebutkan.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Langkah pelaporan
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {reportSteps.map((step, index) => (
          <Step key={`report-steps-${index}`}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <div>{step.content}</div>
              <div className={classes.stepperActions}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleStepBack}
                  className={classes.stepperButton}
                >
                  Kembali
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStepNext}
                  className={classes.stepperButton}
                >
                  {activeStep >= reportSteps.length - 1 ? 'Selesai' : 'Lanjut'}
                </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === reportSteps.length && (
        <Paper square elevation={0} className={classes.stepperActionsReset}>
          <Typography>Jika dinyatakan valid, selamat! Tunggu email selanjutnya dari kami untuk pemberian imbalan.</Typography>
          <Button variant="con" onClick={handleStepReset} className={classes.stepperButton}>
            Ulang
          </Button>
        </Paper>
      )}

      <Typography variant="h5" gutterBottom>
        Contoh laporan yang baik
      </Typography>
      <img src="sample_report.png" alt="Contoh laporan"></img>
    </Typography>
  )
};
