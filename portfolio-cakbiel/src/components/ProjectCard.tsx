import { motion } from "framer-motion";
import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data";

interface ProjectCardProps {
  project: Project & { externalLink?: string };
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasExternal = !!project.externalLink;

  // Wrapper dinamis: eksternal → <a>, internal → <Link>
  const Wrapper: any = hasExternal ? "a" : Link;
  const wrapperProps = hasExternal
    ? { href: project.externalLink!, target: "_blank", rel: "noopener noreferrer" }
    : { href: `/work#${project.slug}` };

  return (
    <Wrapper {...wrapperProps}>
      <motion.div
        whileHover={{ y: -5 }}
        className={`group relative bg-gray-50 dark:bg-dark-800 rounded-3xl overflow-hidden ${
          featured ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        {/* LAYER 1: Foto */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* LAYER 2: Gradient permanen */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

        {/* Badge sumber (jika eksternal) */}
        {hasExternal && (
          <span className="absolute top-4 right-4 z-30 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
            <ExternalLink className="w-3 h-3" /> Detail
          </span>
        )}

        {/* LAYER 3: Konten */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 lg:p-8 flex flex-col justify-end">
          <span className="text-primary-400 text-sm font-medium mb-2 tracking-wide uppercase">
            {project.category}
          </span>

          <h3
            className={`font-display font-bold text-white mb-2 drop-shadow-lg ${
              featured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="text-gray-200 text-sm mb-4 line-clamp-2 drop-shadow">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
              <span>{project.year}</span>
              <span className="opacity-50">•</span>
              <span className="truncate max-w-[160px]">{project.role}</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
            >
              {hasExternal ? (
                <ExternalLink className="w-5 h-5 text-white" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-white" />
              )}
            </motion.div>
          </div>

          {project.metrics && (
            <div className="flex flex-wrap gap-3 mt-4">
              {project.metrics.slice(0, 3).map((metric, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <Award className="w-3.5 h-3.5 text-primary-400" />
                  <span className="text-xs font-medium text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Wrapper>
  );
}
