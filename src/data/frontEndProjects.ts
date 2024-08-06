import Image1 from "../../public/images/bg.png"
import BgWebThumb from "../../public/images/bela_garota_images/home_main_content.png"
import SiamMockup from "../../public/images/bela_garota_images/SiamMockup.png"

export type SingleInfoProps = {
    thumb: string;
    gallery: string;
    article: string;
    links: {
        repo: string;
        preview: string;
    }
}

const singleInfo: SingleInfoProps = {
    thumb: "",
    gallery: "",
    article: "",
    links: {
        repo: "",
        preview: ""
    }
}

export const frontEndProjectsData = [
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "Bela Garota Web",
        description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: BgWebThumb,
        singleData: singleInfo
    },
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "RD Encomendas",
        description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: SiamMockup,
        singleData: singleInfo
    },
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "Bela Garota APP",
        description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: SiamMockup,
        singleData: singleInfo
    }
]