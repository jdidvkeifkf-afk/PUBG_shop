import { Upload } from "lucide-react";

export default function ReceiptUpload({ previewUrl, onFile }) {
    const onChange = (e) => onFile(e.target.files[0]);

    return (
        <div className="border-2 border-dashed border-zinc-700 bg-zinc-950/40 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center min-h-[200px]">
            {previewUrl ? (
                <img src={previewUrl} alt="وصل التحويل" className="max-h-40 rounded-xl" />
            ) : (
                <>
                    <Upload className="w-8 h-8 text-orange-500" />
                    <div>
                        <div className="font-bold">ارفع صورة التحويل</div>
                        <div className="text-xs text-zinc-500">اضغط هنا لاختيار الصورة</div>
                    </div>
                </>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={onChange} id="receipt-upload" />
            <label htmlFor="receipt-upload" className="absolute inset-0 cursor-pointer"></label>
        </div>
    );
}

