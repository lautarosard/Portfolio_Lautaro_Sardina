
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
            <div className="container mx-auto px-4">
                <div className="flex justify-center gap-6 mb-8">
                    <SocialLink href="#" icon={<Github size={20} />} />
                    <SocialLink href="#" icon={<Linkedin size={20} />} />
                    <SocialLink href="#" icon={<Twitter size={20} />} />
                </div>
                <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} Designed & Built by Lau.
                </p>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
    >
        {icon}
    </a>
);

export default Footer;
