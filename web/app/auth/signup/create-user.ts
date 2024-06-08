"use server";

import { API_URL } from "@/constants/api";
import { getErrorMessage } from "@/utils/errorMessages";
import { redirect } from "next/navigation";

async function createUser(
    formData: any
) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        return { };
    }
    return "response";    
}

export default createUser;


