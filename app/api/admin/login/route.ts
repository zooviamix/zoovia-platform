import {NextRequest,NextResponse} from "next/server";
import {createHmac,timingSafeEqual} from "crypto";
export async function POST(req:NextRequest){
 const {username,password}=await req.json();
 const expectedUser=process.env.ADMIN_USERNAME;const expectedPass=process.env.ADMIN_PASSWORD;const secret=process.env.ADMIN_SESSION_SECRET;
 if(!expectedUser||!expectedPass||!secret)return NextResponse.json({error:"Yönetici giriş bilgileri sunucu ortam değişkenlerinde tanımlanmamış."},{status:503});
 const a=Buffer.from(String(username||""));const b=Buffer.from(expectedUser);const c=Buffer.from(String(password||""));const d=Buffer.from(expectedPass);
 if(a.length!==b.length||c.length!==d.length||!timingSafeEqual(a,b)||!timingSafeEqual(c,d))return NextResponse.json({error:"Kullanıcı adı veya şifre hatalı."},{status:401});
 const expires=Date.now()+8*60*60*1000;const payload=Buffer.from(JSON.stringify({u:expectedUser,e:expires})).toString("base64url");const sig=createHmac("sha256",secret).update(payload).digest("base64url");const res=NextResponse.json({ok:true});res.cookies.set("zoovia_admin",`${payload}.${sig}`,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:8*60*60});return res;
}
