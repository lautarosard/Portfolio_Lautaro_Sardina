
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
            tags: ["React", "TypeScript", "Tailwind", "Recharts"],
            links: { demo: "#", code: "#" },
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Social Media App",
            description: "A modern social platform featuring real-time messaging, feed updates, and user profiles.",
            tags: ["Next.js", "Supabase", "Prisma"],
            links: { demo: "#", code: "#" },
            color: "from-emerald-500 to-green-500"
        },
        {
            title: "AI Image Generator",
            description: "An application that uses AI to generate unique images based on user prompts.",
            tags: ["React", "OpenAI API", "Node.js"],
            links: { demo: "#", code: "#" },
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Task Management Tool",
            description: "A productivity tool for teams to organize tasks and collaborate efficiently.",
            tags: ["Vue", "Firebase", "Pinia"],
            links: { demo: "#", code: "#" },
            color: "from-orange-500 to-red-500"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A diverse collection of projects showcasing my journey and technical capabilities.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <Folder size={64} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-900 text-primary rounded-full border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-white hover:text-primary font-medium transition-colors">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={project.links.code} className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors">
                                        <Github size={18} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-16">
                    <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-white font-semibold transition-colors border-b border-primary/20 hover:border-primary pb-1">
                        View All Projects <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
