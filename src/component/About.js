import {Container} from "react-bootstrap"


const About = () => {
    return(
        <div>
            <Container className="text-light">
                <h1 className="text-center p-5 sectionTitle">ABOUT</h1>
                <div>
                <h4 className="subSectionTitle">Description</h4>
                    <p>       
                    Nama saya Akbar Rahmat Mulyatama. Saya adalah alumni SMK Program studi Teknik Komputer & Jaringan dan sekarang saya adalah mahasiswa di salah satu Univeritas swasta di Jakarta Program Studi Sistem Informasi. Selain tertarik pada dunia Network Engineering, Saya juga tertarik pada bidang Programming. Pada saat ini saya sedang belajar Web Programming yaitu React JS & Laravel.
                    </p>
                </div>
                <div>
                <h4 className="subSectionTitle">Education Background</h4>
                    <ul class="timeline">
                        <li>
                            <strong>SMP Negeri 267 (2015 - 2018)</strong>
                        </li>
                        <li>
                            <strong>SMK Negeri 43 (2018 - 2021)</strong>
                            <p>Program Studi : Teknik Komputer Dan Jaringan</p>
                        </li>
                        <li>
                            <strong>Universitas Budi Luhur (2021 - 2025)</strong>
                            <p>Fakultas : Teknologi Informasi<br/>Program Studi : Sistem Informasi</p>
                        </li>
                    </ul>
                </div>
                <div>
                <h4 className="subSectionTitle">Experience</h4>
                    <ul class="timeline">
                        <li>
                            <strong>Direktorat Kelaikudaraan Dan Pengoperasian Pesawat Udara (January 2020 - March 2020)</strong>
                            <p>
                                Jobdesk :
                                <ul>
                                    <li>Staff Pembuatan Lisensi Dangerous Good (Verifikasi data, entry data, dan cetak lisensi)</li>
                                    <li>Troubleshooting Dan Instalasi Jaringan</li>
                                    <li>Pekerjaan Administrasi (Membuat surat, nota dinas, dan lain-lain)</li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default About