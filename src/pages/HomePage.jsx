import { useState, useRef } from "react";
import { toast } from "sonner";
import { Crown, Zap, ShieldCheck, Sparkles, Trophy, Clock, ChevronDown, User, Hash, Loader2 } from "lucide-react";

export default function HomePage() {
    const orderRef = useRef(null);
    const scrollToOrder = () => orderRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-zinc-950/60 border-b border-zinc-900/80">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                            <Crown className="w-5 h-5 text-zinc-950" strokeWidth={3} />
                        </div>
                        <div>
                            <div className="font-black text-lg leading-none">UC SHOP</div>
                            <div className="text-[10px] text-orange-400 tracking-widest mt-1">IRAQ • شحن بوبجي</div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="relative pt-32 pb-24 text-center">
                <h1 className="text-5xl font-black mb-6">شحن شدات <span className="text-orange-500">بوبجي</span></h1>
                <p className="text-zinc-400 mb-8">الاسرع والاوثق في العراق، استلم شداتك خلال دقائق</p>
                <button onClick={scrollToOrder} className="bg-orange-600 px-8 py-4 rounded-xl font-bold">اشحن الآن</button>
            </section>

            <section ref={orderRef} className="py-20 bg-zinc-900/50">
                <div className="max-w-4xl mx-auto p-6 border border-zinc-800 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-6">ادخل بياناتك</h2>
                    <input type="text" placeholder="اسم اللاعب" className="w-full p-4 mb-4 bg-zinc-950 border border-zinc-800 rounded-xl" />
                    <input type="text" placeholder="ID اللاعب" className="w-full p-4 mb-6 bg-zinc-950 border border-zinc-800 rounded-xl" />
                    <button className="w-full bg-orange-600 py-4 rounded-xl font-black">إرسال الطلب</button>
                </div>
            </section>
        </div>
    );
}
