import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Lock, Layout } from 'lucide-react';

const Projects = () => {
    // AQUÍ: Reemplaza con tus proyectos reales.
    // He puesto ejemplos típicos de un perfil Backend/Fullstack.
    const projects = [
        {
            title: "API RESTful Escalable",
            description: "Arquitectura backend robusta diseñada para manejar alta concurrencia. Implementa caché con Redis y autenticación JWT.",
            tags: ["C# .NET", "SQL Server", "Redis", "Docker"],
            links: { demo: "#", code: "#" },
            icon: <Server size={48} />,
            gradient: "from-primary/80 to-secondary/80" // Usa tus rojos
        },
        {
            title: "Dashboard Administrativo",
            description: "Panel de control fullstack para gestión de inventarios. Lógica de negocio compleja en backend y visualización de datos en tiempo real.",
            tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            links: { demo: "#", code: "#" },
            icon: <Layout size={48} />,
            gradient: "from-gray-800 to-gray-900"
        },
        {
            title: "Microservicio de Auth",
            description: "Sistema de autenticación centralizado compatible con OAuth2. Diseñado para integrarse con múltiples aplicaciones cliente.",
            tags: ["Go", "MongoDB", "gRPC"],
            links: { demo: "#", code: "#" },
            icon: <Lock size={48} />,
            gradient: "from-[#4a0404] to-black" // Un rojo muy oscuro
        },
        {
            title: "Gestor de Tareas Real-time",
            description: "Aplicación colaborativa que utiliza WebSockets para sincronización instantánea entre usuarios.",
            tags: ["Node.js", "Socket.io", "React", "Express"],
            links: { demo: "#", code: "#" },
            icon: <Database size={48} />,
            gradient: "from-gray-700 to-black"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-24 bg-dark relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light">
                        Proyectos <span className="text-primary">Destacados</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Una selección de trabajos donde la <span className="text-white">lógica</span>, la <span className="text-white">seguridad</span> y el <span className="text-white">rendimiento</span> son prioridad.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            // Estilo de la tarjeta: Fondo semitransparente (glassmorphism) oscuro
                            className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                        >
                            {/* Cabecera de la tarjeta con icono */}
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="text-white/30 group-hover:text-white/80 group-hover:scale-110 transition-all duration-500 transform">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-light group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tags de tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-black/40 text-gray-300 rounded-full border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-white hover:text-primary font-medium transition-colors text-sm">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                    <a href={project.links.code} className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors text-sm">
                                        <Github size={16} /> Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Botón ver más */}
                <div className="text-center mt-16">
                    <a href="https://github.com/lautarosard" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                        Ver más en GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;