import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Terminal, Cpu } from 'lucide-react';

const About = () => {
    // Aquí puedes agregar o quitar tus habilidades reales
    const skills = [
        { name: "C# / .NET", icon: <Code2 size={20} /> },
        { name: "Node.js", icon: <Server size={20} /> },
        { name: "SQL / PostgreSQL", icon: <Database size={20} /> },
        { name: "TypeScript / Express", icon: <Terminal size={20} /> },
        { name: "React", icon: <Globe size={20} /> },
        { name: "API REST", icon: <Cpu size={20} /> },
    ];

    return (
        <section id="about" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-light">
                        Sobre <span className="text-primary">Mí</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                Más allá de escribir código, me apasiona <span className="text-white font-semibold">entender cómo funcionan las cosas por dentro</span>.
                                Mi fuerte es el desarrollo Backend: diseñar bases de datos, crear APIs eficientes y asegurar que la lógica de negocio sea sólida.
                            </p>
                            <p>
                                Aunque mi especialidad está en el servidor, no soy ajeno al Frontend.
                                Me manejo con React y TypeScript lo suficiente para <span className="text-white font-semibold">construir interfaces funcionales</span> que consuman mis propios servicios.
                            </p>
                            <p>
                                Busco proyectos donde pueda aportar lógica robusta y seguir aprendiendo sobre arquitectura de software.
                            </p>
                        </div>

                        {/* Caja decorativa o de estadísticas */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                                <Terminal className="text-secondary" />
                                Mi Stack Técnico
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 bg-black/40 hover:bg-primary/20 border border-white/10 hover:border-primary/50 px-4 py-2 rounded-lg transition-all cursor-default"
                                    >
                                        <span className="text-secondary">{skill.icon}</span>
                                        <span className="font-medium text-gray-200">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;