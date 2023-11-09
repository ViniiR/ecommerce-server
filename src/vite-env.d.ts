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
