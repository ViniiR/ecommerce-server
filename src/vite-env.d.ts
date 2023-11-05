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
    icon: Promise<typeof import("*.png")> | string;
    description: string;
};

type iconsString = string | typeof import("*.png");

type iconsObject = {
    default: string,
};