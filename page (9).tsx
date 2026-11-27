"use client";
import {useState} from "react";import {useRouter} from "next/navigation";import Link from "next/link";
type Member={name:string;email:string;phone:string;password:string};
export default function Login(){
 const router=useRouter();const [mode,setMode]=useState<"login"|"register">("login");const [name,setName]=useState("");const [identifier,setIdentifier]=useState("");const [password,setPassword]=useState("");const [msg,setMsg]=useState("");
 const submit=()=>{
  const key="zoovia_members";const id=identifier.trim().toLocaleLowerCase("tr-TR");
  if(!id||!password){setMsg("Telefon numarası veya e-posta ile şifrenizi girin.");return;}
  let users:Member[]=[];try{users=JSON.parse(localStorage.getItem(key)||"[]")}catch{users=[]}
  if(mode==="register"){
   if(!name.trim()){setMsg("Ad soyad girin.");return;}
   const entered=id.includes("@");const normalizedEmail=entered?id:"";const normalizedPhone=entered?"":identifier.trim();
   if(!normalizedEmail&&!normalizedPhone){setMsg("Telefon veya e-posta bilgilerinden en az birini girin.");return;}
   if(users.some(u=>(normalizedEmail&&u.email?.toLowerCase()===normalizedEmail)||(normalizedPhone&&u.phone===normalizedPhone))){setMsg("Bu telefon veya e-posta ile daha önce üyelik oluşturulmuş.");return;}
   const u={name:name.trim(),email:normalizedEmail,phone:normalizedPhone,password};users.push(u);localStorage.setItem(key,JSON.stringify(users));localStorage.setItem("zoovia_current_user",JSON.stringify({name:u.name,email:u.email,phone:u.phone}));window.dispatchEvent(new Event("zoovia-auth"));setMsg("Üyeliğiniz oluşturuldu. Ana sayfaya yönlendiriliyorsunuz.");setTimeout(()=>router.push("/"),500);
  }else{
   const u=users.find(x=>(x.phone===identifier.trim()||x.email?.toLowerCase()===id)&&x.password===password);
   if(!u){setMsg("Giriş bilgileri eşleşmedi. Kayıt olurken kullandığınız telefon veya e-postayı ve şifreyi kontrol edin.");return;}
   localStorage.setItem("zoovia_current_user",JSON.stringify({name:u.name,email:u.email,phone:u.phone}));window.dispatchEvent(new Event("zoovia-auth"));setMsg(`Hoş geldiniz ${u.name}. Ana sayfaya yönlendiriliyorsunuz.`);setTimeout(()=>router.push("/"),500);
  }
 };
 return <main className="auth-page"><div className="auth-card"><Link href="/" className="auth-logo">ZOOVIA<span>.</span></Link><div className="eyebrow">ÜRETİCİ HESABI</div><h1>{mode==="login"?"Tekrar hoş geldiniz.":"ZOOVIA’ya katılın."}</h1><p>Üyeliğinizi oluşturun ve rasyon desteği talebinizi bize iletin.</p><div className="auth-tabs"><button className={mode==="login"?"active":""} onClick={()=>{setMode("login");setMsg("");setIdentifier("")}}>Giriş yap</button><button className={mode==="register"?"active":""} onClick={()=>{setMode("register");setMsg("");setIdentifier("")}}>Üye ol</button></div>{mode==="register"&&<label>Ad soyad<input value={name} onChange={e=>setName(e.target.value)} placeholder="Adınız ve soyadınız"/></label>}<label>{mode==="login"?"Giriş için e-posta veya telefon":"Giriş için e-posta veya telefon"}<input value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder="05__... veya ornek@mail.com" autoComplete="username"/></label><label>Şifre<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Şifreniz" autoComplete={mode==="login"?"current-password":"new-password"}/></label><button className="btn auth-submit" onClick={submit}>{mode==="login"?"Giriş yap":"Hesap oluştur"} ↗</button>{msg&&<p className="form-feedback">{msg}</p>}<div className="auth-admin-entry"><span>Yönetici misiniz?</span><Link href="/admin/login">Yönetici girişi ↗</Link></div><small className="auth-foot">E-posta veya telefon doğrulaması yapılmaz. Üyelik ve talepler bu tarayıcıda saklanır; farklı cihazlarda ortak kullanım için veritabanı bağlantısı gerekir.</small></div></main>
}
