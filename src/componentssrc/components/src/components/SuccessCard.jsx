import { CheckCircle } from "lucide-react";

export default function SuccessCard({ orderId, onReset }) {
    return (
        <div className="text-center p-10 bg-zinc-900 rounded-3xl border border-orange-500/30">
            <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-2">تم استلام طلبك!</h2>
            <p className="text-zinc-400 mb-6">رقم الطلب الخاص بك هو: <span className="text-orange-400 font-mono">{orderId}</span></p>
            <button onClick={onReset} className="bg-orange-600 px-6 py-3 rounded-xl font-bold">طلب جديد</button>
        </div>
    );
}

