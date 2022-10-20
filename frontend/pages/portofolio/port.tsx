import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import styles from '../../styles/Home.module.css';

export default function port() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.imgur.com/XtPIXR8.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="xl:max-w-xl md:max-w-md xs:max-w-xs text-center">
                        <h1 className="mb-5 text-5xl font-bold">Hi guyss</h1>
                        <p className="mb-5 ">Perkenalkan Nama Saya Surya Tirta Chandra, selamat datang di halaman portofolio saya. Di halaman web
                        saya terdapat beberapa project yang saya kerjakan mulai dari Web design, Web Developer dan Multimedia lainnya</p>
                        <button className="btn btn-primary w-52">Review lebih banyak</button>
                    </div>
                </div>
            </div>
            <Footer />
        </ div>
    );
}

