import Link from "next/link";
export default function Header(){
 return <header className="header">
  <Link href="/" className="logo" aria-label="ZOOVIA ana sayfa"><span className="logo-symbol">Z<span>.</span></span><span className="logo-word">ZOOVIA<small>VERİMİN YENİ YOLU</small></span></Link>
  <nav><Link href="/">Ana Sayfa</Link><Link href="/about">Hakkımızda</Link><Link href="/products">Ürünlerimiz</Link><Link href="/contact">İletişim</Link></nav>
  <div className="header-actions"><Link href="/login" className="login-link">Üye Girişi</Link><Link href="/ration" className="btn btn-small">Rasyon Hazırla <b>↗</b></Link></div>
 </header>;
}
