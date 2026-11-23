"use client";
import Link from "next/link";
import Image from "next/image";
import {useEffect,useState} from "react";
type Member={name:string};
export default function Header(){
 const [member,setMember]=useState<Member|null>(null);
 useEffect(()=>{const sync=()=>{try{setMember(JSON.parse(localStorage.getItem("zoovia_current_user")||"null"))}catch{setMember(null)}};sync();window.addEventListener("storage",sync);window.addEventListener("zoovia-auth",sync);return()=>{window.removeEventListener("storage",sync);window.removeEventListener("zoovia-auth",sync)}},[]);
 return <header className="header"><Link href="/" className="logo" aria-label="ZOOVIA ana sayfa"><Image src="/zoovia-logo.svg" alt="ZOOVIA – Her gramında güven" width={175} height={52} priority style={{width:175,height:"auto",objectFit:"contain"}}/></Link><nav><Link href="/">Ana Sayfa</Link><Link href="/about">Kurumsal</Link><Link href="/ration">Kontrol Formları</Link><Link href="/products">Ürünlerimiz</Link><Link href="/gallery">Bizden Kareler</Link><Link href="/news">Haberler</Link><Link href="/contact">İletişim</Link></nav><div className="header-actions"><Link href="/login" className="login-link">{member?.name||"Üye Ol / Üye Girişi"}</Link><Link href="/admin/login" className="admin-login-link">Yönetici</Link><Link href="/contact" className="contact-cta">Bize Ulaşın ↗</Link><Link href="/ration" className="btn btn-small leaf-cta">✳ Rasyon Hazırla <b>↗</b></Link></div></header>
}
