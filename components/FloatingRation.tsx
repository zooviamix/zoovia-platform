"use client";
import {useState} from "react";
import Link from "next/link";
export default function FloatingRation(){const [open,setOpen]=useState(false);return <div className="float-wrap"><div className={`float-panel ${open?"show":""}`}><button className="float-close" onClick={()=>setOpen(false)}>×</button><span className="float-kicker">ZOOVIA ASİSTAN</span><h3>Rasyonunuzu birlikte değerlendirelim.</h3><p>Hayvan grubunuzu seçerek rasyon hazırlama adımına geçebilirsiniz.</p><Link href="/ration" className="btn">Rasyon Hazırla ↗</Link></div><button className="float-button" onClick={()=>setOpen(!open)}><span className="float-dot"></span><span>{open?"Kapat":"Rasyon Hazırla"}</span><b>✳</b></button></div>}
