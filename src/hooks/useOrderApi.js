Enterimport { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";

export function usePackagesConfig() {
    const [packages, setPackages] = useState([]);
    const [asiaCell, setAsiaCell] = useState("");

    const fetchConfig = useCallback(async () => {
        try {
            const r = await axios.get("/api/config");
            setPackages(r.data.packages);
            setAsiaCell(r.data.asia_cell_number);
        } catch {
            toast.error("تعذر تحميل الباقات");
        }
    }, []);

    useEffect(() => {
        fetchConfig();
    }, [fetchConfig]);

    return { packages, asiaCell };
}
