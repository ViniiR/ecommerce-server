import axios from "axios";
import ServerURL from "../config";

export async function retrieveQueryData(inputValue: string){
    try {
        const res = await axios.get(`${ServerURL}query-data`, {
            params: {
                query: inputValue,
            },
        });
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

type ApiResponse = {
    data: {userName: string};
    userName: string;
    status: number;
}

export async function isValidToken() {
    if (!localStorage.getItem('loginToken')) {
        return {isValidToken: false, userName: ''}
    }
    const res: ApiResponse = await axios.get(`${ServerURL}auth-token`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`
        }
    });
    const userName = res.data.userName
    const isValidToken = res.status === 200;
    return {isValidToken, userName};
}

export async function resolveImages(products: UnresolvedSPData[]) {
    const resolved = await Promise.all(products.map(async (product: UnresolvedSPData) => ({
        title: product.title,
        price: product.price,
        oldPrice: product.oldPrice,
        percentOFF: String(product.percentOFF),
        dividedPrice: product.dividedPrice,
        image: await import(/* @vite-ignore */product.imagePath),
    })));
    return resolved
}
