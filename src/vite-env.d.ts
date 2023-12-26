/// <reference types="vite/client" />

type scrollNode = {
    image: string;
    title: string;
};

type contentNode = {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
};

type meliPlusNode = {
    icon: typeof import("*.png");
    description: string;
};

type dataObject = {
    icon: string;
    description: string;
};

type beneficiosNode = {
    background: typeof import("*.jpg");
    icon: typeof import("*.jpg");
    title: string;
    description: string;
};

type SPData = {
    image: typeof import("*.webp");
    title: string;
    price: string;
    oldPrice: string;
    percentOFF: string;
    dividedPrice: string;
};

type UnresolvedSPData = {
    title: string;
    price: string;
    oldPrice: string;
    percentOFF: number;
    dividedPrice: string;
    imagePath: string;
};

type UlData = {
    icon: ReactElement;
    name: string;
};

type InputProps = {
    label: string;
    id: string;
    name: string;
    type: string;
};

type DataForm = {
    name: string;
    email: string;
    password: string;
};
