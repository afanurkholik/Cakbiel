// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/work#${project.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className={`group relative bg-gray-50 dark:bg-dark-800 rounded-3xl overflow-hidden ${
          featured ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-700 dark:to-dark-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-600 text-sm">
              {project.image}
            </span>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
          {/* Category */}
          <span className="text-primary-400 text-sm font-medium mb-2">
            {project.category}
          </span>

          {/* Title */}
          <h3 className={`font-display font-bold text-white mb-2 ${
            featured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
          }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.role}</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex gap-4 mt-4">
              {project.metrics.slice(0, 3).map((metric, idx) => (
                <div key={idx} className="flex items-center gap-1 text-white">
                  <Award className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
