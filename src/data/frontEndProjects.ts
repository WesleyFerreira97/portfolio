import Image1 from "../../public/images/bg.png"
import BgWebThumb from "../../public/images/bela_garota_images/home_main_content.png"
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

const single: SingleInfoProps = {
    mainTitle: ["App Administrativo", "React Native"],
    thumb: BgWebThumb,
    gallery: [BgWebThumb, BgWebThumb, BgWebThumb, BgWebThumb],
    articleTitle: "Admin App",
    article: ["Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase)."
    ],
    links: {
        repo: "https://github.com/WesleyFerreira97/portfolio",
        preview: "https://github.com/WesleyFerreira97/portfolio"
    }
}

const single2: SingleInfoProps = {
    mainTitle: ["Rio Doce Encomendas", "React Native"],
    thumb: BgWebThumb,
    gallery: [BgWebThumb, BgWebThumb, BgWebThumb, BgWebThumb],
    articleTitle: "App Encomendas",
    article: ["Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase)."
    ],
    links: {
        repo: "https://github.com/WesleyFerreira97/portfolio",
        preview: "https://github.com/WesleyFerreira97/portfolio"
    }
}


const frontEndProjectsData: ProjectDataProps[] = [
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "Bela Garota Web",
        description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: BgWebThumb,
        singleData: single
    },
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "RD Encomendas",
        description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: SiamMockup,
        singleData: single2
    },
    {
        projectType: "E-commerce React JS/Native",
        projectTitle: "Bela Garota APP",
        description: "Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).",
        skills: ["React JS", "Next JS", "Typescript", "Next UI", "Supabase"],
        thumb: SiamMockup,
        singleData: single
    }
]

export type { SingleInfoProps, ProjectDataProps }
export { single, frontEndProjectsData }