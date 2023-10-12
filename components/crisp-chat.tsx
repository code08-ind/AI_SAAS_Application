"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("a7c962b2-48cb-4a6f-bd5d-8966a5c14825");
    }, []);

    return null;
};