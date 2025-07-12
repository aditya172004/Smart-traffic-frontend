import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Calendar, Github } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About Smart Traffic Mangagement System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An intelligent traffic management system designed to optimize
            traffic flow and enhance urban mobility.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project Information Card */}
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Project Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Project Name
                </h3>
                <Badge variant="secondary" className="text-sm">
                  Smart Traffic Management System
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Academic Year
                </h3>
                <p className="text-muted-foreground">2024-2025</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Repository
                </h3>
                <a
                  href="https://github.com/aditya172004/Smart-traffic-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Guidance Information Card */}
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Academic Supervision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Guided By
                </h3>
                <p className="text-lg font-medium text-foreground">
                  Prof. Pabitra Mohan Khilar
                </p>
                <p className="text-sm text-muted-foreground">
                  Department of Computer Science & Engineering
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Institution
                </h3>
                <p className="text-muted-foreground">
                  National Institute of Technology, Rourkela
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Project Overview Card */}
          <Card className="border-border shadow-sm md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The Smart Traffic Management Platform is an end-to-end
                  solution for intelligent urban traffic control, combining
                  advanced data analysis and a modern web interface. Leveraging
                  real-time data, predictive algorithms, and interactive
                  visualizations, this project empowers cities to optimize
                  traffic signals, monitor road conditions, and make data-driven
                  decisions for a smoother, safer transportation experience.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Real-time traffic monitoring, prediction, and analysis
                      with Jupyter-powered backend
                    </li>
                    <li>
                      • Intelligent traffic signal control algorithms for
                      dynamic optimization
                    </li>
                    <li>
                      • Interactive TypeScript-based dashboard for traffic
                      visualization and management
                    </li>
                    <li>
                      • Comprehensive data visualization and automated reporting
                    </li>
                    <li>
                      • Fully responsive web application for both desktop and
                      mobile devices
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border shadow-sm mt-8">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 font-semibold text-foreground">Frontend:</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Vite",
                "Shadcn UI",
                "React Router",
              ].map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mb-2 font-semibold text-foreground">
              Backend & Data Analysis:
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Jupyter Notebook",
                "Python",
                "scikit-learn",
                "TensorFlow",
                "Keras",
                "YOLO (Object Detection)",
                "pickle",
              ].map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
