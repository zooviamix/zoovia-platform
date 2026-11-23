"use client";
import Image from "next/image";
import {useMemo,useState} from "react";
const products=[
 {name:"Süt Sığırı Premiks",group:"Büyükbaş",image:"/products/premix-1.webp",tag:"SÜT SIĞIRI"},
 {name:"Besi Sığırı Premiks",group:"Büyükbaş",image:"/products/premix-2.webp",tag:"BESİ"},
 {name:"Buzağı Premiks",group:"Büyükbaş",image:"/products/premix-3.webp",tag:"BUZAĞI"},
 {name:"Küçükbaş Premiks",group:"Küçükbaş",image:"/products/premix-4.webp",tag:"KOYUN & KEÇİ"},
 {name:"Kanatlı Premiks",group:"Kanatlı",image:"/products/premix-5.webp",tag:"KANATLI"},
 {name:"Dairy Premiks",group:"Büyükbaş",image:"/products/feed-1.webp",tag:"SÜT"},
 {name:"Besi Premiks",group:"Büyükbaş",image:"/products/feed-2.webp",tag:"BESİ"},
 {name:"Mineral Premiks",group:"Büyükbaş",image:"/products/feed-3.webp",tag:"MİNERAL"},
 {name:"Vitamin Premiks",group:"Büyükbaş",image:"/products/feed-4.webp",tag:"VİTAMİN"},
];
const groups=["Tümü","Büyükbaş","Küçükbaş","Kanatlı"];
export default function Products(){const [active,setActive]=useState("Tümü");const visible=useMemo(()=>active==="Tümü"?products:products.filter(p=>p.group===active),[active]);return <main className="page-shell products-page"><div className="eyebrow">ZOOVIA ÜRÜN KOLEKSİYONU</div><h1>İhtiyaca uygun<br/><em>besleme çözümleri.</em></h1><p className="page-lead">ZOOVIA ürün gruplarını inceleyin.</p><div className="product-filter" aria-label="Ürün grupları">{groups.map(g=><button type="button" key={g} className={active===g?"selected":""} onClick={()=>setActive(g)}>{g}</button>)}</div><div className="product-gallery">{visible.map((p,i)=><article className="product-tile" key={`${p.image}-${i}`}><div className="product-photo"><Image src={p.image} alt={p.name} fill sizes="(max-width:760px) 90vw, 30vw" style={{objectFit:"contain"}}/><span>{p.tag}</span></div><div className="product-info"><small>{p.group.toLocaleUpperCase('tr-TR')} / ZOOVIA</small><h2>{p.name}</h2><p>ZOOVIA ürün serisi.</p><span className="product-soon">ÜRÜN KATALOĞU <b>✳</b></span></div></article>)}</div></main>}
