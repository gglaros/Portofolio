import { ArrowRight, ExternalLink, Github } from "lucide-react";
import projectjava from "../assets/projectjava.webp";
import photo from "../assets/photo.png";
import devops from "../assets/devops.png";
import django from "../assets/django.jpg";

const projects = [
  {
    id: 1,
    title: "Rental Rooms",
    description: "A beautiful landing page app using java and springboot.",
    image: projectjava,
    tags: ["java", "springboot", "html"],
    demoUrl: "#",
    githubUrl: "https://github.com/gglaros/javaProject",
  },
  {
    id: 2,
    title: "Full-Stack DevOps Information System",
    description:
    "A full-stack information system with Spring Boot, featuring authentication, database integration, email notifications, and a fully automated CI/CD pipeline using Docker, Kubernetes, Jenkins, and Ansible..",
    image: devops,
    tags: [" Spring Boot", "PostgreSQL", "Keycloak","Mailhog","Jenkins","Kubernetes"," Ansible playbooks"],
    demoUrl: "#",
    githubUrl: "https://github.com/gglaros/devops",
  },
  {
    id: 3,
    title: "Full-Stack Web Application with Django & React",
    description:
      "djankoProject is a full-stack web application built with Django REST Framework and a React frontend. It includes JWT authentication, real-time CRUD operations, and a modular architecture optimized for scalability and modern development workflows.",
    image: django ,
    tags: ["React", "python", "djanko"],
    demoUrl: "#",
    githubUrl: "https://github.com/gglaros/djankoProject/tree/main",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/gglaros"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};