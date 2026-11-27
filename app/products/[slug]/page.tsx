import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../products-data";

const slugify = (name: string) => name.toLocaleLowerCase("tr-TR").replace(/®/g, "").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function generateStaticParams() {
  return products.map(product => ({ slug: slugify(product.name) }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(item => slugify(item.name) === slug);
  if (!product) notFound();

  return <main className="product-detail-page">
    <div className="product-detail-top"><Link href="/products" className="product-back-link">← Tüm ürünlere dön</Link><div className="eyebrow">ZOOVIA ÜRÜN KOLEKSİYONU</div></div>
    <section className="product-detail-hero">
      <div className="product-detail-visual"><Image src={product.image} alt={`${product.name} ${product.title}`} fill priority sizes="(max-width: 800px) 100vw, 50vw" style={{objectFit:"contain"}}/><span>{product.tag}</span></div>
      <div className="product-detail-intro"><div className="eyebrow">{product.group.toLocaleUpperCase("tr-TR")} / ZOOVIA</div><h1>{product.name}</h1><h2>{product.title}</h2><p className="product-detail-tagline">{product.tagline}</p><p className="product-detail-summary">{product.description}</p><a className="product-contact-cta" href="/contact">Ürün hakkında bilgi alın <b>↗</b></a></div>
    </section>
    <section className="product-detail-content"><div className="product-content-heading"><div className="eyebrow">ZOOVIA / {product.name}</div><h2>Ürün hakkında <em>detaylı bilgi</em></h2><p>{product.tagline}</p></div>
      <div className="product-detail-sections">{product.sections.map((section, index) => <article className="product-detail-section" key={`${product.name}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{section.heading}</h3><p>{section.body}</p></div></article>)}</div>
      <p className="product-usage-note">Ürünün kullanım şekli ve miktarı için ambalaj üzerindeki talimatları ve teknik ürün bilgisini esas alınız.</p>
      <div className="product-detail-bottom"><Link href="/products" className="product-back-link">← Diğer ZOOVIA ürünlerini keşfedin</Link><Link href="/contact" className="product-contact-cta">Bizimle iletişime geçin <b>↗</b></Link></div>
    </section>
  </main>;
}
