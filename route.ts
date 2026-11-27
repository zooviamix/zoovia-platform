import {NextRequest,NextResponse} from "next/server";
import {createHmac,timingSafeEqual} from "crypto";
function valid(req:NextRequest){try{const token=req.cookies.get("zoovia_admin")?.value||"";const [payload,sig]=token.split(".");const secret=process.env.ADMIN_SESSION_SECRET;if(!payload||!sig||!secret)return false;const expected=createHmac("sha256",secret).update(payload).digest();const actual=Buffer.from(sig,"base64url");if(actual.length!==expected.length||!timingSafeEqual(actual,expected))return false;const data=JSON.parse(Buffer.from(payload,"base64url").toString());return data.u===process.env.ADMIN_USERNAME&&data.e>Date.now();}catch{return false}}
export async function GET(req:NextRequest){return NextResponse.json({authenticated:valid(req)},{status:valid(req)?200:401});}
export async function DELETE(){const res=NextResponse.json({ok:true});res.cookies.set("zoovia_admin","",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0});return res;}
