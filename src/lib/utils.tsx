import { useEffect, useState } from "react";

export const useAnimation = () => {
    const [isAnimation, setIsAnimation] = useState(true);

    useEffect(() => {
        const isVisitedBefore = localStorage.getItem("isVisitedBefore");
        if (isVisitedBefore){
            setIsAnimation(false);
        }
        else{
            localStorage.setItem("isVisitedBefore", "true");
        }
    },[])

    return [isAnimation, setIsAnimation] as const;

}