"use client";
import Image from "next/image";
import {useMemo,useState} from "react";

const products = [
  {
    "name": "VIAMILK®",
    "title": "Süt Premiksi",
    "group": "Büyükbaş",
    "image": "/products/viamilk.webp",
    "tag": "SÜT SIĞIRI",
    "tagline": "Süt Sürülerinde Dengeli Beslemenin Güvencesi",
    "sections": [
      {
        "heading": "Süt Sığırlarında Beslenmenin Önemi",
        "body": "Süt sığırlarında verim; genetik yapı, laktasyon dönemi, canlı ağırlık, çevre koşulları ve besleme yönetimi gibi birçok faktörden etkilenir. Hayvanların ihtiyaçlarına uygun hazırlanmış dengeli bir rasyon, sağlığın ve üretim performansının desteklenmesinde temel rol oynar."
      },
      {
        "heading": "Vitamin ve Mineral Dengesinin Rolü",
        "body": "Süt sığırlarının vitamin ve mineral gereksinimleri laktasyon evresine ve üretim düzeyine göre değişebilir. Rasyonun enerji ve protein içeriği kadar vitamin ve mineral yönünden de değerlendirilmesi gerekir. İhtiyaca uygun destek, normal metabolik fonksiyonların ve vücut kondisyonunun korunmasına katkıda bulunur."
      },
      {
        "heading": "ZOOVIA VIAMILK®'in Rolü",
        "body": "ZOOVIA VIAMILK®, süt sığırlarının beslenme programında vitamin ve mineral ihtiyaçlarının karşılanmasını desteklemek amacıyla geliştirilmiş bir premiks olarak konumlandırılmıştır. Günlük rasyonun tamamlayıcı bir bileşeni olarak, dengeli besleme yaklaşımını destekler."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Hayvanların fizyolojik dönemi ve rasyon içeriği dikkate alınarak kullanıldığında vitamin-mineral beslenmesinin desteklenmesine, sürü besleme yönetiminin düzenlenmesine ve üretim hedeflerine uygun bir besleme programı oluşturulmasına yardımcı olur."
      }
    ],
    "description": "Süt sığırlarında verim; genetik yapı, laktasyon dönemi, canlı ağırlık, çevre koşulları ve besleme yönetimi gibi birçok faktörden etkilenir. Hayvanların ihtiyaçlarına uygun hazırlanmış dengeli bir rasyon, sağlığın ve üretim performansının desteklenmesinde temel rol oynar."
  },
  {
    "name": "VIAMILK PLUS®",
    "title": "Güçlendirilmiş Süt Premiksi",
    "group": "Büyükbaş",
    "image": "/products/viamilk-plus.webp",
    "tag": "SÜT SIĞIRI",
    "tagline": "Yüksek Performanslı Sürülere Daha Kapsamlı Destek",
    "sections": [
      {
        "heading": "Yoğun Laktasyon Döneminde Beslenme",
        "body": "Yüksek süt verimli sürülerde beslenme yönetimi daha fazla özen gerektirir. Laktasyon dönemi, süt verim düzeyi, canlı ağırlık, yem tüketimi ve çevre koşulları hayvanların günlük besin madde ihtiyaçlarını etkiler. Bu nedenle rasyonun düzenli olarak değerlendirilmesi ve ihtiyaçlara göre güncellenmesi önemlidir."
      },
      {
        "heading": "Genişletilmiş Vitamin-Mineral Desteği",
        "body": "Yoğun üretim dönemlerinde vitamin ve mineral dengesinin doğru planlanması, normal metabolik fonksiyonların ve genel beslenme durumunun desteklenmesine katkıda bulunur. Rasyonun tüm bileşenleri birlikte değerlendirilerek hayvanların fizyolojik dönemlerine uygun bir besleme programı oluşturulmalıdır."
      },
      {
        "heading": "ZOOVIA VIAMILK PLUS®'ın Rolü",
        "body": "ZOOVIA VIAMILK PLUS®, VIAMILK ürün ailesinin daha kapsamlı destek yaklaşımıyla konumlandırılmış versiyonudur. Özellikle yüksek verim hedeflenen süt sığırı işletmelerinde rasyonun vitamin-mineral yönünden desteklenmesine ve yoğun laktasyon dönemindeki besleme programının tamamlanmasına yardımcı olmak amacıyla tasarlanmıştır."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Hayvanların ihtiyaçlarına ve mevcut rasyonun içeriğine uygun kullanıldığında vitamin-mineral beslenmesinin desteklenmesine, besleme yönetiminin güçlendirilmesine ve sürü performans hedeflerinin sürdürülebilir şekilde takip edilmesine katkı sağlar."
      }
    ],
    "description": "Yüksek süt verimli sürülerde beslenme yönetimi daha fazla özen gerektirir. Laktasyon dönemi, süt verim düzeyi, canlı ağırlık, yem tüketimi ve çevre koşulları hayvanların günlük besin madde ihtiyaçlarını etkiler. Bu nedenle rasyonun düzenli olarak değerlendirilmesi ve ihtiyaçlara göre güncellenmesi önemlidir."
  },
  {
    "name": "VIAMIXBEEF®",
    "title": "Besi Premiksi",
    "group": "Büyükbaş",
    "image": "/products/viamix-beef.webp",
    "tag": "BESİ",
    "tagline": "Besicilerin Tercihi",
    "sections": [
      {
        "heading": "Yoğun Beslemede Dengeli Destek",
        "body": "Besi sığırlarında hedeflenen gelişim ve performansın desteklenmesi; enerji ve protein düzeyleri uygun şekilde planlanmış, vitamin ve mineral ihtiyaçları da dikkate alınmış dengeli bir rasyonla mümkündür. ZOOVIA VIAMIXBEEF®, besi rasyonlarının vitamin-mineral yönünden desteklenmesine yardımcı olmak üzere konumlandırılmıştır."
      },
      {
        "heading": "Vitamin ve Mineral Dengesinin Önemi",
        "body": "Besi döneminde hayvanların ihtiyaçları canlı ağırlık, yaş, genetik yapı, besleme yoğunluğu ve yetiştirme koşullarına göre değişebilir. Rasyonun yalnızca enerji ve protein bakımından değil, vitamin ve mineral yönünden de değerlendirilmesi önem taşır. Dengeli besleme yaklaşımı, normal metabolik fonksiyonların ve sağlıklı gelişimin desteklenmesine katkıda bulunur."
      },
      {
        "heading": "ZOOVIA VIAMIXBEEF®'in Rolü",
        "body": "ZOOVIA VIAMIXBEEF®, besi sığırlarının günlük beslenme programında vitamin ve mineral desteği sunmak üzere tasarlanmış bir premiks ürünüdür. Rasyonun genel besin madde profilinin tamamlanmasına ve besleme programının daha kontrollü yürütülmesine yardımcı olur."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Hayvanların ihtiyaçlarına uygun hazırlanmış bir rasyonun parçası olarak kullanıldığında vitamin-mineral dengesinin desteklenmesine, normal büyüme ve gelişim süreçlerinin sürdürülmesine ve besleme yönetiminin güçlendirilmesine katkı sağlar."
      }
    ],
    "description": "Besi sığırlarında hedeflenen gelişim ve performansın desteklenmesi; enerji ve protein düzeyleri uygun şekilde planlanmış, vitamin ve mineral ihtiyaçları da dikkate alınmış dengeli bir rasyonla mümkündür. ZOOVIA VIAMIXBEEF®, besi rasyonlarının vitamin-mineral yönünden desteklenmesine yardımcı olmak üzere konumlandırılmıştır."
  },
  {
    "name": "VIAMIX OVIN®",
    "title": "Küçükbaş Premiksi",
    "group": "Küçükbaş",
    "image": "/products/viamix-ovin.webp",
    "tag": "KOYUN & KEÇİ",
    "tagline": "Küçükbaş Sürülerinde Dengeli Besleme Desteği",
    "sections": [
      {
        "heading": "Koyunlarda Beslenme ve Mineral Dengesi",
        "body": "Koyunların beslenme ihtiyaçları yaş, canlı ağırlık, gebelik ve laktasyon dönemi, büyüme hedefi, mera koşulları ve kullanılan kaba yemlerin niteliğine göre değişir. Mera imkânlarının sınırlı olduğu veya kaba yem ağırlıklı besleme yapılan işletmelerde rasyonun vitamin ve mineral yönünden değerlendirilmesi özellikle önemlidir."
      },
      {
        "heading": "Pika Davranışı ve Beslenme Yönetimi",
        "body": "Toprak, yün, plastik veya benzeri yabancı maddeleri yeme davranışı pika olarak tanımlanır. Bu davranışın birçok olası nedeni bulunabilir; beslenme dengesizlikleri bunlardan biri olabilir. Pika görülen sürülerde yalnızca premiks kullanımıyla sorunun kesin olarak önleneceği varsayılmamalı; rasyon, mineral erişimi, parazit durumu ve çevresel koşullar birlikte değerlendirilmelidir."
      },
      {
        "heading": "ZOOVIA VIAMIX OVIN®'in Rolü",
        "body": "ZOOVIA VIAMIX OVIN®, koyun ve küçükbaş hayvanların beslenme programında vitamin ve mineral desteği sağlamak üzere konumlandırılmıştır. Rasyonun tamamlayıcı bir bileşeni olarak, hayvanların fizyolojik dönemleri ve işletme koşulları dikkate alınarak kullanılmalıdır."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Uygun rasyon ve sürü yönetimiyle birlikte kullanıldığında vitamin-mineral beslenmesinin desteklenmesine, besleme programının düzenlenmesine ve küçükbaş sürülerinde sağlıklı gelişim ile üretim hedeflerinin desteklenmesine katkı sağlar."
      }
    ],
    "description": "Koyunların beslenme ihtiyaçları yaş, canlı ağırlık, gebelik ve laktasyon dönemi, büyüme hedefi, mera koşulları ve kullanılan kaba yemlerin niteliğine göre değişir. Mera imkânlarının sınırlı olduğu veya kaba yem ağırlıklı besleme yapılan işletmelerde rasyonun vitamin ve mineral yönünden değerlendirilmesi özellikle önemlidir."
  },
  {
    "name": "VIACALF®",
    "title": "Buzağı Gelişim Premiksi",
    "group": "Buzağı",
    "image": "/products/viacalf.webp",
    "tag": "BUZAĞI",
    "tagline": "Sağlıklı Başlangıç, Güçlü Gelişim",
    "sections": [
      {
        "heading": "Buzağılık Döneminde Beslenmenin Önemi",
        "body": "Buzağıların yaşamın ilk dönemindeki beslenmesi, büyüme ve gelişim süreçlerinin temelini oluşturur. Kolostrumun zamanında ve yeterli miktarda verilmesi, temiz suya erişim, hijyen, uygun barınak koşulları ve yaşa uygun besleme programı bu dönemin temel unsurlarıdır."
      },
      {
        "heading": "Vitamin ve Mineral Desteği",
        "body": "Buzağıların vitamin ve mineral ihtiyaçları yaşlarına, canlı ağırlıklarına, büyüme dönemlerine ve mevcut besleme programlarına göre değişir. Süt veya süt ikame yemi, başlangıç yemi ve kaba yem geçişleri birlikte değerlendirilerek dengeli bir beslenme programı oluşturulmalıdır."
      },
      {
        "heading": "ZOOVIA VIACALF®'ın Rolü",
        "body": "ZOOVIA VIACALF®, buzağıların büyüme ve gelişim dönemindeki beslenme programını tamamlamak üzere konumlandırılmış bir premiks ürünüdür. Vitamin ve mineral desteğiyle günlük besleme programının dengelenmesine yardımcı olmayı hedefler. Kullanım şekli ve miktarı, ürünün kesin formülasyonu ve etiket talimatları doğrultusunda belirlenmelidir."
      },
      {
        "heading": "Sindirim ve Gelişim Sürecinin Desteklenmesi",
        "body": "Buzağıların sağlıklı gelişimi için ani yem değişikliklerinden kaçınılması, süt ve başlangıç yemi yönetiminin doğru yapılması, temiz su ve hijyen koşullarının sağlanması önemlidir. Besleme desteği, bu temel yetiştirme uygulamalarının yerine geçmez; onları tamamlayan bir unsur olarak değerlendirilmelidir."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Yaşa ve ihtiyaca uygun bir besleme programının parçası olarak kullanıldığında vitamin-mineral beslenmesinin desteklenmesine, büyüme-gelişme dönemindeki ihtiyaçların gözetilmesine ve buzağı yetiştirme programının düzenli yürütülmesine katkı sağlar."
      }
    ],
    "description": "Buzağıların yaşamın ilk dönemindeki beslenmesi, büyüme ve gelişim süreçlerinin temelini oluşturur. Kolostrumun zamanında ve yeterli miktarda verilmesi, temiz suya erişim, hijyen, uygun barınak koşulları ve yaşa uygun besleme programı bu dönemin temel unsurlarıdır."
  },
  {
    "name": "VIASACC®",
    "title": "Canlı Maya",
    "group": "Yem Katkıları",
    "image": "/products/viasacc.webp",
    "tag": "CANLI MAYA",
    "tagline": "Rumen Dengesini Destekleyen Canlı Maya",
    "sections": [
      {
        "heading": "Rumen Sağlığının Önemi",
        "body": "Rumen, geviş getiren hayvanlarda yemlerin sindirimi ve besin maddelerinden yararlanılması açısından merkezi bir role sahiptir. Rumen ortamındaki mikrobiyal dengenin korunması; yem tüketimi, sindirim süreci ve genel performans bakımından önem taşır."
      },
      {
        "heading": "Mayaların Rumen Ortamındaki Rolü",
        "body": "Canlı maya ürünleri, rumen mikrobiyal ortamını desteklemeye yönelik besleme programlarında kullanılabilir. Uygun rasyon ve yönetim koşullarıyla birlikte değerlendirildiğinde rumen ortamının dengeli işleyişine ve yemlerden yararlanma sürecine katkı sunmayı hedefler."
      },
      {
        "heading": "Yem Değişiklikleri ve Yoğun Besleme Dönemleri",
        "body": "Hammadde geçişleri, rasyon değişiklikleri ve yoğun besleme dönemleri rumen ortamında değişimlere yol açabilir. Bu dönemlerde rasyon geçişlerinin kontrollü yapılması, kaba yem ve kesif yem dengesinin gözetilmesi ve yemleme yönetiminin düzenli sürdürülmesi önemlidir. ZOOVIA VIASACC®, bu besleme programlarında canlı maya desteği sunmak üzere konumlandırılmıştır."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Dengeli bir rasyon ve doğru işletme yönetimiyle birlikte kullanıldığında rumen sağlığının ve sindirim süreçlerinin desteklenmesine, besleme programının tamamlanmasına ve sürü performansının takip edilmesine katkı sağlamayı amaçlar."
      }
    ],
    "description": "Rumen, geviş getiren hayvanlarda yemlerin sindirimi ve besin maddelerinden yararlanılması açısından merkezi bir role sahiptir. Rumen ortamındaki mikrobiyal dengenin korunması; yem tüketimi, sindirim süreci ve genel performans bakımından önem taşır."
  },
  {
    "name": "VIATOKS®",
    "title": "Mikotoksin Bağlayıcı",
    "group": "Yem Katkıları",
    "image": "/products/viatoks.webp",
    "tag": "YEM GÜVENLİĞİ",
    "tagline": "Yem Güvenliğinde Kontrollü Destek",
    "sections": [
      {
        "heading": "Mikotoksinlerin Önemi",
        "body": "Tahıl ve diğer yem hammaddeleri; hasat, taşıma, depolama ve çevresel koşullara bağlı olarak mikotoksinlerle kontamine olabilir. Mikotoksin maruziyeti hayvan türüne, toksinin çeşidine ve maruziyet düzeyine göre yem tüketimi, sağlık ve üretim performansı üzerinde olumsuz etkiler oluşturabilir."
      },
      {
        "heading": "Yem Güvenliği ve Risk Yönetimi",
        "body": "Mikotoksin riskinin yönetiminde kaliteli hammadde seçimi, uygun depolama, düzenli kontrol ve riskli partilerin değerlendirilmesi temel öneme sahiptir. Toksin bağlayıcı ürünler, bu bütüncül yaklaşımın bir parçası olarak yem kaynaklı risklerin yönetimini desteklemek amacıyla kullanılabilir."
      },
      {
        "heading": "ZOOVIA VIATOKS®'un Rolü",
        "body": "ZOOVIA VIATOKS®, yem hammaddeleri ve karma yemlerde karşılaşılabilecek mikotoksin risklerinin yönetimine destek olmak üzere tasarlanmış bir toksin bağlayıcı ürün olarak konumlandırılmıştır. Kullanım amacı ve etkinliği, ürünün gerçek formülasyonu, hedeflenen toksinler ve etiket talimatları doğrultusunda değerlendirilmelidir."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Hammadde kontrolü, doğru depolama ve uygun besleme yönetimiyle birlikte değerlendirildiğinde yem güvenliği programının tamamlanmasına ve mikotoksin kaynaklı risklerin kontrolüne katkıda bulunmayı hedefler."
      }
    ],
    "description": "Tahıl ve diğer yem hammaddeleri; hasat, taşıma, depolama ve çevresel koşullara bağlı olarak mikotoksinlerle kontamine olabilir. Mikotoksin maruziyeti hayvan türüne, toksinin çeşidine ve maruziyet düzeyine göre yem tüketimi, sağlık ve üretim performansı üzerinde olumsuz etkiler oluşturabilir."
  },
  {
    "name": "VIABUFFER®",
    "title": "Rumen Tamponlayıcı",
    "group": "Yem Katkıları",
    "image": "/products/viabuffer.webp",
    "tag": "RUMEN DENGESİ",
    "tagline": "Rumen Ortamında Dengeyi Destekleyin",
    "sections": [
      {
        "heading": "Rumen pH Dengesinin Önemi",
        "body": "Geviş getiren hayvanlarda rumen ortamının dengeli olması, yemlerin sindirimi ve besin maddelerinden yararlanılması açısından önemlidir. Özellikle yüksek kesif yem içeren rasyonlarda, hızlı yem değişikliklerinde ve yoğun üretim dönemlerinde rumen pH'ındaki dalgalanmalar yakından takip edilmelidir."
      },
      {
        "heading": "Tamponlayıcı Desteğin Rolü",
        "body": "Tamponlayıcı yem katkıları, uygun rasyon ve yemleme yönetimiyle birlikte rumen pH dengesinin korunmasını desteklemek amacıyla kullanılabilir. Bununla birlikte etkileri ürünün bileşimine, kullanım miktarına, rasyonun yapısına ve hayvanların besleme koşullarına bağlıdır."
      },
      {
        "heading": "ZOOVIA VIABUFFER®'ın Rolü",
        "body": "ZOOVIA VIABUFFER®, geviş getiren hayvanların besleme programında rumen ortamının dengelenmesine destek olmak üzere konumlandırılmış bir tamponlayıcı üründür. Kaba yem-kesif yem dengesi, yemleme sıklığı ve rasyon geçişleriyle birlikte değerlendirilmelidir."
      },
      {
        "heading": "İşletmenize Katkıları",
        "body": "Doğru rasyon formülasyonu ve uygun yemleme yönetimiyle birlikte kullanıldığında rumen sağlığını destekleyen besleme programının tamamlanmasına ve yoğun besleme dönemlerinde rumen dengesinin gözetilmesine katkı sağlamayı hedefler."
      }
    ],
    "description": "Geviş getiren hayvanlarda rumen ortamının dengeli olması, yemlerin sindirimi ve besin maddelerinden yararlanılması açısından önemlidir. Özellikle yüksek kesif yem içeren rasyonlarda, hızlı yem değişikliklerinde ve yoğun üretim dönemlerinde rumen pH'ındaki dalgalanmalar yakından takip edilmelidir."
  }
];

const groups=["Tümü","Büyükbaş","Küçükbaş","Buzağı","Yem Katkıları"];

export default function Products(){
  const [active,setActive]=useState("Tümü");
  const [selected,setSelected]=useState<typeof products[number]|null>(null);
  const visible=useMemo(()=>active==="Tümü"?products:products.filter(p=>p.group===active),[active]);
  return <main className="page-shell products-page">
    <div className="eyebrow">ZOOVIA ÜRÜN KOLEKSİYONU</div>
    <h1>Her gramında<br/><em>güven.</em></h1>
    <p className="page-lead">Hayvan besleme ihtiyaçlarına yönelik ZOOVIA ürün serisi.</p>
    <div className="product-filter">{groups.map(g=><button type="button" key={g} className={active===g?"selected":""} onClick={()=>setActive(g)}>{g}</button>)}</div>
    <div className="product-gallery">{visible.map(p=><article className="product-tile" key={p.name}>
      <div className="product-photo"><Image src={p.image} alt={`${p.name} ${p.title}`} fill sizes="(max-width:760px) 90vw, 30vw" style={{objectFit:"contain"}}/><span>{p.tag}</span></div>
      <div className="product-info"><small>{p.group.toLocaleUpperCase("tr-TR")} / ZOOVIA</small><h2>{p.name}</h2><p>{p.title}</p><p className="product-description">{p.description}</p><button type="button" className="product-detail-btn" onClick={()=>setSelected(p)}>Ürünü İncele <b>↗</b></button></div>
    </article>)}</div>
    {selected&&<div className="product-modal-backdrop" role="presentation" onClick={()=>setSelected(null)}><section className="product-modal" role="dialog" aria-modal="true" aria-label={`${selected.name} ürün detayları`} onClick={e=>e.stopPropagation()}>
      <button className="modal-close" onClick={()=>setSelected(null)} aria-label="Kapat">×</button>
      <div className="modal-product-image"><Image src={selected.image} alt={selected.name} fill sizes="320px" style={{objectFit:"contain"}}/></div>
      <div className="modal-product-copy"><div className="eyebrow">{selected.group} / ZOOVIA</div><h2>{selected.name}</h2><h3>{selected.title}</h3><p className="modal-tagline">{selected.tagline}</p>
        {selected.sections.map((section,index)=><section className="product-copy-section" key={`${selected.name}-${index}`}><h4>{section.heading}</h4><p>{section.body}</p></section>)}
        <small>Ürünün kullanım şekli ve miktarı için ambalaj üzerindeki talimatları ve teknik ürün bilgisini esas alınız.</small>
      </div>
    </section></div>}
  </main>;
}
