"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products, productGroups } from "./products-data";

const slugify = (name: string) => name.toLocaleLowerCase("tr-TR").replace(/®/g, "").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function Products() {
  const [active, setActive] = useState<string>("Tümü");
  const visible = useMemo(() => active === "Tümü" ? products : products.filter(p => p.group === active), [active]);
  return <main className="page-shell products-page">
    <div className="eyebrow">ZOOVIA ÜRÜN KOLEKSİYONU</div>
    <h1>Her gramında<br/><em>güven.</em></h1>
    <p className="page-lead">Hayvan besleme ihtiyaçlarına yönelik ZOOVIA ürün serisi.</p>
    <div className="product-filter">{productGroups.map(g => <button type="button" key={g} className={active === g ? "selected" : ""} onClick={() => setActive(g)}>{g}</button>)}</div>
    <div className="product-gallery">{visible.map(p => <Link className="product-tile product-tile-link" key={p.name} href={`/products/${slugify(p.name)}`} aria-label={`${p.name} ürün detaylarını incele`}>
      <div className="product-photo"><Image src={p.image} alt={`${p.name} ${p.title}`} fill sizes="(max-width:760px) 90vw, 30vw" style={{objectFit:"contain"}}/><span>{p.tag}</span></div>
      <div className="product-info"><small>{p.group.toLocaleUpperCase("tr-TR")} / ZOOVIA</small><h2>{p.name}</h2><p>{p.title}</p><p className="product-description">{p.description}</p><div className="product-detail-btn">Ürünün Tüm Özelliklerini İncele <b>↗</b></div></div>
    </Link>)}</div>
  </main>;
}
