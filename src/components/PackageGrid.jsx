import { Sparkles, Check } from "lucide-react";

export default function PackageGrid({ packages, selectedPkg, onSelect }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {packages.map((pkg) => {
                const active = selectedPkg?.id === pkg.id;
                return (
                    <button
                        key={pkg.id}
                        onClick={() => onSelect(pkg)}
                        className={`relative rounded-2xl p-6 border-2 transition-all ${
                            active ? "border-orange-500 bg-orange-500/10" : "border-zinc-800 bg-zinc-950/40"
                        }`}
                    >
                        <div className="text-2xl font-black">{pkg.uc.toLocaleString()}</div>
                        <div className="text-xs text-zinc-500 mb-3">UC شدة</div>
                        <div className="text-orange-400 font-bold">{pkg.price_iqd.toLocaleString()} د.ع</div>
                        {active && <Check className="absolute top-2 left-2 w-4 h-4 text-orange-400" />}
                    </button>
                );
            })}
        </div>
    );
}

