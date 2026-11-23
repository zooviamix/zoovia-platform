import Image from "next/image";
import Link from "next/link";

const products = [
 {name:"Süt Sığırı Premiks",group:"Büyükbaş",image:"/products/premix-1.webp",tag:"SÜT SIĞIRI"},
 {name:"Besi Sığırı Premiks",group:"Büyükbaş",image:"/products/premix-2.webp",tag:"BESİ"},
 {name:"Buzağı Premiks",group:"Büyükbaş",image:"/products/premix-3.webp",tag:"BUZAĞI"},
 {name:"Küçükbaş Premiks",group:"Küçükbaş",image:"/products/premix-4.webp",tag:"KOYUN & KEÇİ"},
 {name:"Kanatlı Premiks",group:"Kanatlı",image:"/products/premix-5.webp",tag:"KANATLI"},
 {name:"Dairy Premiks",group:"Büyükbaş",image:"/products/feed-1.webp",tag:"SÜT"},
 {name:"Besi Premiks",group:"Büyükbaş",image:"/products/feed-2.webp",tag:"BESİ"},
 {name:"Mineral Premiks",group:"Büyükbaş",image:"/products/feed-3.webp",tag:"MİNERAL"},
 {name:"Vitamin Premiks",group:"Büyükbaş",image:"/products/feed-4.webp",tag:"VİTAMİN"},
 {name:"Küçükbaş Premiks",group:"Küçükbaş",image:"/products/feed-5.webp",tag:"KÜÇÜKBAŞ"},
];
const groups=[{label:"Tümü",id:"urunler"},{label:"Büyükbaş",id:"buyukbas"},{label:"Küçükbaş",id:"kucukbas"},{label:"Kanatlı",id:"kanatli"}];
export default function Products(){return <main className="page-shell products-page">
 <div className="eyebrow">ZOOVIA ÜRÜN KOLEKSİYONU</div><h1>İhtiyaca uygun<br/><em>besleme çözümleri.</em></h1>
 <p className="page-lead">Ürünlerimizi inceleyin. Teknik açıklamalar ve ürün detayları daha sonra eklenecektir.</p>
 <div className="product-filter" aria-label="Ürün grupları">{groups.map(g=><a key={g.id} href={`#${g.id}`}>{g.label}</a>)}</div>
 <div id="urunler" className="product-gallery">{products.map((p,i)=><article className="product-tile" key={`${p.name}-${i}`} id={products.findIndex(x=>x.group===p.group)===i?(p.group==="Büyükbaş"?"buyukbas":p.group==="Küçükbaş"?"kucukbas":"kanatli"):undefined}>
  <div className="product-photo"><Image src={p.image} alt={p.name} fill sizes="(max-width:760px) 90vw, 30vw" style={{objectFit:"contain"}}/><span>{p.tag}</span></div>
  <div className="product-info"><small>{p.group.toLocaleUpperCase('tr-TR')} / ZOOVIA</small><h2>{p.name}</h2><p>Ürün açıklaması yakında eklenecek.</p><span className="product-soon">ÜRÜN KATALOĞU <b>✳</b></span></div>
 </article>)}</div>
 <div className="product-admin-hint">Yeni ürün eklemek ve ürün görsellerini yönetmek için <Link href="/admin">yönetici panelini</Link> kullanabilirsin.</div>
 </main>}
