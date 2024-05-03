import Head from 'next/head';
import { Landing } from "@/components/landing";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Devis Gratuit pour Installation Écran Graphique en Hauts-de-France | SF Enseignes</title>
                <meta name="description" content="Demandez un devis gratuit pour l'installation d'écrans graphiques en Hauts-de-France. Améliorez votre communication avec nos solutions d'affichage dynamique." />
                <meta property="og:title" content="Devis Gratuit pour Installation Écran Graphique en Hauts-de-France | SF Enseignes" />
                <meta property="og:description" content="Profitez d'un devis gratuit pour vos besoins en écrans graphiques et solutions de communication visuelle en Hauts-de-France." />
                <meta property="og:image" content="https://sfenseignes.fr" />
                <meta property="og:url" content="https://sfenseignes.fr" />
                <link rel="canonical" href="https://sfenseignes.fr" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Landing />
            </main>
        </div>
    );
}