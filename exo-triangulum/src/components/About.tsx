
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layers } from 'lucide-react';

const About = () => {
    const skills = [
        { name: "React", icon: <Code2 size={20} /> },
        { name: "TypeScript", icon: <Code2 size={20} /> },
        { name: "TailwindCSS", icon: <Layers size={20} /> },
        { name: "Node.js", icon: <Database size={20} /> },
        { name: "Next.js", icon: <Globe size={20} /> },
        { name: "PostgreSQL", icon: <Database size={20} /> },
    ];

    return (
        <section id="about" className="py-24 bg-dark relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> based in the cloud.
                                I specialize in building exceptional digital experiences that are fast, accessible, and visually stunning.
                            </p>
                            <p>
                                With a strong foundation in modern web technologies, I love transforming complex problems into simple, beautiful, and intuitive solutions.
                                When I'm not coding, you can find me exploring new tech or sipping good coffee.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-white">My Toolkit</h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-primary/50 px-4 py-2 rounded-lg transition-all cursor-default shadow-sm"
                                    >
                                        <span className="text-primary">{skill.icon}</span>
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
