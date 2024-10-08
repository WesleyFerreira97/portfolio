import Image1 from "../../public/images/bg.png"
import BgWebThumb from "../../public/images/bela_garota_images/home_main_content.png"
import BGSingleImage from "@/../public/images/bela_garota_images/home_widgets.png"
import SiamMockup from "../../public/images/bela_garota_images/SiamMockup.png"
import { StaticImageData } from "next/image";

type SingleInfoProps = {
    mainTitle: string[];
    articleTitle: string;
    thumb: StaticImageData;
    gallery: StaticImageData[];
    article: string[];
    links: {
        repo: string;
        preview: string;
    }
}

type ProjectDataProps = {
    projectType: string;
    projectTitle: string;
    description: string;
    skills: string[];
    thumb: StaticImageData;
    singleData: SingleInfoProps;
}

const BGApp: SingleInfoProps = {
    mainTitle: ["Bela Garota - App", "React Native"],
    thumb: BgWebThumb,
    gallery: [BgWebThumb, BgWebThumb, BgWebThumb, BgWebThumb],
    articleTitle: "Admin App",
    article: ["Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase)."
    ],
    links: {
        repo: "https://github.com/WesleyFerreira97/BG-React-native-app",
        preview: "https://bg-next-theme-seven.vercel.app/"
    }
}

const singleBGWeb: SingleInfoProps = {
    mainTitle: ["Bela Garota - Web", "Next JS"],
    thumb: BGSingleImage,
    gallery: [BGSingleImage],
    articleTitle: "Web E-commerce",
    article: ["O Projeto Bela Garota foi desenvolvido com o propósito base de criar uma plataforma de e-commerce voltada para pequenos e médios empreendedores e suprir uma deficiência comum em pequenos negócios onde a limitação financeira torna inviável desenvolver e manter um projeto para vendas online integrada as principais redes sociais como Instagram e Whatsapp.", 
    "Aqui temos a versão Web do projeto, desenvolvida utilizando as principais bibliotecas e frameworks atuais web, como React, Next JS, Next UI, entre outros.",
    "Foi utilizado um serviço de backend as a service ( BaaS ), Supabase, utilizando como banco de dados o postgrest, onde todos os produtos, categorias e pedidos são cadastrados e disponibilizados. "
    ],
    links: {
        repo: "https://github.com/WesleyFerreira97/BG-next-theme",
        preview: "https://bg-next-theme-seven.vercel.app/"
    }
}


const frontEndProjectsData: ProjectDataProps[] = [
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "Bela Garota Web",
        description: "E-commerce Web, feito com Next JS, exibe todos os produtos cadastrados no banco de dados, com a possibilidade de adicionar ao carrinho, visualizar detalhes do produto e finalizar a compra.",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase", "Supabase"],
        thumb: BgWebThumb,
        singleData: singleBGWeb
    },
    // {
    //     projectType: "E-commerce React JS/Native",
    //     projectTitle: "RD Encomendas",
    //     description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
    //     skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
    //     thumb: SiamMockup,
    //     singleData: single2
    // },
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "Bela Garota APP",
        description: "",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: SiamMockup,
        singleData: BGApp
    }
]

export type { SingleInfoProps, ProjectDataProps }
export { singleBGWeb, frontEndProjectsData }