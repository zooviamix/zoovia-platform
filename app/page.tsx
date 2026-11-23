import Link from "next/link";
const strengths=[
 ["01","İşletmeye özel yaklaşım","Hayvan grubunu, üretim hedefini ve işletmenin yem kaynaklarını birlikte değerlendiririz."],
 ["02","Bilimsel besleme","Rasyon kararlarını doğrulanmış besin değerleri ve hayvan ihtiyaçları üzerinden ele alırız."],
 ["03","Anlaşılır raporlama","Yapılan değişiklikleri, nedenleriyle birlikte açık ve takip edilebilir şekilde sunarız."]
];
export default function Home(){return <main>
 <section className="hero">
  <div className="hero-copy"><div className="eyebrow"><i/> HAYVAN BESLEMEDE YENİ NESİL YAKLAŞIM</div>
   <h1>Verimin yolu<br/><em>doğru beslemeden</em><br/>geçer.</h1>
   <p>ZOOVIA; hayvan besleme, premiks çözümleri ve rasyon danışmanlığını bir araya getirir. Her işletmenin ihtiyacına uygun, veriye dayalı çözümler için yanınızdayız.</p>
   <div className="hero-buttons"><Link href="/ration" className="btn">Rasyon Hazırla <b>↗</b></Link><Link href="/about" className="btn btn-outline">ZOOVIA’yı Tanıyın</Link></div>
   <div className="hero-proof"><span className="proof-icon">✳</span><span><b>ZOOVIA</b><small>Her gramında güven.</small></span><span className="proof-line"></span><small>Verimin Yeni Yolu.</small></div>
  </div>
  <div className="hero-visual"><div className="visual-bg"></div><div className="visual-ring ring-a"></div><div className="visual-ring ring-b"></div><div className="visual-center"><div className="visual-logo">Z<span>.</span></div><b>ZOOVIA</b><small>HER GRAMINDA GÜVEN</small></div><div className="visual-label label-a"><span>✳</span> BİLİMSEL BESLEME</div><div className="visual-label label-b"><span>↗</span> GÜÇLÜ İŞLETME</div><div className="visual-leaf leaf-a">✳</div><div className="visual-leaf leaf-b">✳</div></div>
 </section>
 <div className="ticker"><span>ZOOVIA</span><i>✳</i><span>HAYVAN BESLEME</span><i>✳</i><span>RASYON DANIŞMANLIĞI</span><i>✳</i><span>VERİMİN YENİ YOLU</span></div>
 <section className="section intro"><div><div className="eyebrow">ZOOVIA’NIN YAKLAŞIMI</div><h2>Her işletmenin<br/><em>ihtiyacı farklıdır.</em></h2></div><p>Doğru rasyon; hayvanın ihtiyacını, kullanılan yemlerin özelliklerini ve işletmenin hedeflerini birlikte değerlendirmekle başlar. ZOOVIA’da amacımız, üreticinin kararlarını daha anlaşılır ve veriye dayalı hale getirmek.</p></section>
 <section className="strengths">{strengths.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></article>)}</section>
 <section className="product-teaser"><div className="eyebrow">ÜRÜN GRUPLARIMIZ</div><h2>Her tür için doğru<br/><em>besleme çözümleri.</em></h2><div className="teaser-grid"><Link href="/products#buyukbas"><span>01 / BÜYÜKBAŞ</span><b>→</b><h3>Büyükbaş</h3><p>Süt, besi, kuru dönem ve düve.</p></Link><Link href="/products#kucukbas"><span>02 / KÜÇÜKBAŞ</span><b>→</b><h3>Küçükbaş</h3><p>Koyun ve keçi besleme çözümleri.</p></Link><Link href="/products#kanatli"><span>03 / KANATLI</span><b>→</b><h3>Kanatlı</h3><p>Kanatlı besleme ve premiks grupları.</p></Link></div></section>
 <section className="closing-cta"><div><div className="eyebrow">ZOOVIA RASYON ASİSTANI</div><h2>İşletmenizin rasyonunu<br/>birlikte ele alalım.</h2><p>Hayvan grubunuzu seçin, mevcut rasyonunuzu girin ve değerlendirme sürecini başlatın.</p></div><Link href="/ration" className="btn btn-light">Rasyon Hazırla <b>↗</b></Link></section>
 </main>}
