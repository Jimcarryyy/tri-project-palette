import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { VisualChart } from "@/components/VisualChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb } from "lucide-react";

// Project data
const projectsData = {
  yoolax: {
    title: "Yoolax Order Form",
    description: "Create a comprehensive order submission form similar to Yoolax's system for shade customization and inquiry collection.",
    progress: 25,
    effort: 30,
    tasks: [
      { id: "y1", title: "Research Yoolax form features and plan inquiry approach", completed: true },
      { id: "y2", title: "Set up WPForms Pro environment", completed: false },
      { id: "y3", title: "Build multi-step form for shade options", completed: false },
      { id: "y4", title: "Test form functionality and email delivery", completed: false },
      { id: "y5", title: "Deploy form live (avoiding e-commerce)", completed: false }
    ],
    chartData: [
      { name: "Planning", value: 15 },
      { name: "Setup", value: 20 },
      { name: "Form Creation", value: 40 },
      { name: "Testing", value: 15 },
      { name: "Deployment", value: 10 }
    ]
  },
  galactic: {
    title: "Galactic Tiles Web Presence",
    description: "Enhance website performance, add new pages, implement SEO strategy, and launch comprehensive social media campaigns.",
    progress: 40,
    effort: 25,
    tasks: [
      { id: "g1", title: "Optimize site speed and mobile responsiveness", completed: true },
      { id: "g2", title: "Add 'About Us' and 'Gallery' pages", completed: true },
      { id: "g3", title: "Implement SEO with tile design keywords", completed: false },
      { id: "g4", title: "Create blog posts on tile trends", completed: false },
      { id: "g5", title: "Launch Instagram and Facebook campaigns", completed: false }
    ],
    chartData: [
      { name: "Site Optimization", value: 90 },
      { name: "New Pages", value: 80 },
      { name: "SEO Setup", value: 30 },
      { name: "Blog Posts", value: 20 },
      { name: "Social Media", value: 10 }
    ]
  },
  ghm: {
    title: "GHM Tile Complete Solution",
    description: "Develop a comprehensive tile ordering system with Yoolax-style forms, measurement tools, sample ordering, and bulk product management.",
    progress: 15,
    effort: 45,
    tasks: [
      { id: "h1", title: "Set up 10web.io site with basic tools", completed: true },
      { id: "h2", title: "Create Yoolax-style form and SQF calculator", completed: false },
      { id: "h3", title: "Implement sample cart shopping feature", completed: false },
      { id: "h4", title: "Set up bulk product upload system", completed: false },
      { id: "h5", title: "Transfer domain from GoDaddy to 10web.io", completed: false },
      { id: "h6", title: "Complete testing and launch site", completed: false }
    ],
    chartData: [
      { name: "Setup", value: 100 },
      { name: "Form & Calc", value: 25 },
      { name: "Sample Cart", value: 10 },
      { name: "Bulk Upload", value: 0 },
      { name: "Domain Transfer", value: 0 },
      { name: "Testing & Launch", value: 0 }
    ]
  }
};

export default function Dashboard() {
  const [projects, setProjects] = useState(projectsData);

  const handleTaskToggle = (projectKey: keyof typeof projects, taskId: string) => {
    setProjects(prev => ({
      ...prev,
      [projectKey]: {
        ...prev[projectKey],
        tasks: prev[projectKey].tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      }
    }));
  };

  const getChartType = (projectKey: string) => {
    if (projectKey === 'yoolax') return 'line';
    if (projectKey === 'galactic') return 'bar';
    return 'pie';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <DashboardHeader />
        
        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {Object.entries(projects).map(([key, project]) => (
            <div key={key} className="space-y-6">
              <ProjectCard
                title={project.title}
                description={project.description}
                progress={project.progress}
                tasks={project.tasks}
                color={key as 'yoolax' | 'galactic' | 'ghm'}
                effort={project.effort}
                onTaskToggle={(taskId) => handleTaskToggle(key as keyof typeof projects, taskId)}
              />
              
              <VisualChart
                title={`${project.title.split(' ')[0]} Progress`}
                type={getChartType(key)}
                data={project.chartData}
                color={key as 'yoolax' | 'galactic' | 'ghm'}
              />
            </div>
          ))}
        </div>

        {/* Next Steps Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Next Steps & Recommendations</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <Badge className="bg-yoolax/20 text-yoolax border-yoolax/30">Priority: High</Badge>
                <h4 className="font-semibold">Start with Yoolax</h4>
                <p className="text-sm text-muted-foreground">
                  Begin by setting up WPForms Pro and creating the multi-step order form. 
                  This will establish the foundation for similar forms across other projects.
                </p>
              </div>
              
              <div className="space-y-3">
                <Badge className="bg-galactic/20 text-galactic border-galactic/30">Priority: Medium</Badge>
                <h4 className="font-semibold">Continue Galactic SEO</h4>
                <p className="text-sm text-muted-foreground">
                  With site optimization complete, focus on SEO implementation and 
                  content creation to boost online visibility.
                </p>
              </div>
              
              <div className="space-y-3">
                <Badge className="bg-ghm/20 text-ghm border-ghm/30">Priority: Long-term</Badge>
                <h4 className="font-semibold">Plan GHM Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Design the complete system architecture before implementation. 
                  This complex project requires careful planning.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center pt-6">
              <div className="flex items-center space-x-2 text-primary">
                <span className="text-sm font-medium">Review dashboard and pick a project to begin</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}