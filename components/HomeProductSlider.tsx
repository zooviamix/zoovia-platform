"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/app/products/products-data";
const slugify=(name:string)=>name.toLocaleLowerCase("tr-TR").replace(/®/g,"").replace(/ı/g,"i").replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s").replace(/ö/g,"o").replace(/ç/g,"c").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
export default function HomeProductSlider(){
 const [index,setIndex]=useState(0);
 useEffect(()=>{const timer=window.setInterval(()=>setIndex(v=>(v+1)%products.length),5000);return()=>window.clearInterval(timer)},[]);
 const p=products[index];
 return <div className="home-product-slider" aria-label="ZOOVIA ürün vitrini">
  <Link href={`/products/${slugify(p.name)}`} className="home-product-slide" key={p.name}>
   <div className="home-product-image"><Image src={p.image} alt={`${p.name} ${p.title}`} fill priority sizes="(max-width:760px) 90vw, 45vw" style={{objectFit:"contain"}}/></div>
   <div className="home-product-copy"><span className="eyebrow">ÜRÜN KOLEKSİYONUMUZ · {p.group.toLocaleUpperCase("tr-TR")}</span><h2>{p.name}</h2><h3>{p.title}</h3><p>{p.tagline}</p><span className="home-product-link">Ürünü incele <b>↗</b></span></div>
  </Link>
  <div className="home-product-controls"><button aria-label="Önceki ürün" onClick={()=>setIndex(v=>(v-1+products.length)%products.length)}>←</button><div className="home-product-dots">{products.map((item,i)=><button key={item.name} aria-label={`${item.name} ürününü göster`} className={i===index?"active":""} onClick={()=>setIndex(i)}/>)}</div><button aria-label="Sonraki ürün" onClick={()=>setIndex(v=>(v+1)%products.length)}>→</button></div>
 </div>
}
