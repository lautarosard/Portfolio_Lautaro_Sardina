//import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark text-light">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary">Contáctame</h2>

                <p className="mb-12 text-lg text-gray-300 max-w-2xl mx-auto">
                    ¿Te interesa mi perfil o quieres colaborar en un proyecto?
                    ¡Envíame un mensaje directo o contáctame por redes!
                </p>

                {/* Contenedor de los botones */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">

                    {/* Botón de Email */}
                    <a
                        href="mailto:lautarosardina@gmail.com"
                        className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-primary transition-colors duration-300 rounded-lg shadow-lg group"
                    >
                        <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                        <span className="font-medium">lautarosardina@gmail.com</span>
                    </a>

                    {/* Botón de LinkedIn */}
                    <a
                        href="https://linkedin.com/in/ariel-lautaro-sardina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-[#0077b5] transition-colors duration-300 rounded-lg shadow-lg group"
                    >
                        <Linkedin className="w-6 h-6 text-primary group-hover:text-white" />
                        <span className="font-medium">LinkedIn</span>
                    </a>

                    {/* Botón de GitHub */}
                    <a
                        href="https://github.com/lautarosard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-black transition-colors duration-300 rounded-lg shadow-lg group"
                    >
                        <Github className="w-6 h-6 text-primary group-hover:text-white" />
                        <span className="font-medium">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;