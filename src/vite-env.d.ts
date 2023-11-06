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
    icon: typeof import("*.png"),
    description: string,
};

type dataObject = {
    icon: string,
    description: string,
}