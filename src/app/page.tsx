import Hero from "../../components/Hero";
import Services from "../../components/Services";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Services />
      <footer className="w-full text-center text-xs text-gray-700 p-4">
        © {new Date().getFullYear()} Paola – oladesign.co
      </footer>
    </main>
  );
}
