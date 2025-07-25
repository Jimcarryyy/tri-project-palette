import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { VisualChart } from "@/components/VisualChart";
import { ProjectFooter } from "@/components/ProjectFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, RefreshCw, Save, Share2 } from "lucide-react";

// Project data with comprehensive details
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
    details: {
      keyFeatures: [
        "Customer shade type selection (blackout, light filtering, etc.)",
        "Size and measurement input fields",
        "Smart control features selection (Alexa, manual, etc.)",
        "Fabric options and color choices",
        "Email collection and inquiry submission",
        "No payment processing - inquiry-only system",
        "Multi-step guided form process"
      ],
      implementationPlan: [
        "Use user-friendly form tool for step-by-step customer experience",
        "Create product selection interface similar to Yoolax",
        "Add measurement and preference collection sections",
        "Implement 'Submit Inquiry' button with email integration",
        "Focus only on collecting inquiries, avoid e-commerce complexity",
        "Test email delivery and form functionality thoroughly"
      ],
      plugins: [
        {
          name: "WPForms Pro",
          price: "$199/year",
          description: "Advanced form builder with multi-step capabilities and email integration",
          required: true
        }
      ]
    },
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
    details: {
      keyFeatures: [
        "Improved site speed and mobile responsiveness",
        "About Us page with company story and trust building",
        "Gallery page showcasing project photos",
        "SEO optimization with tile design keywords",
        "Blog with tile trend content",
        "Instagram account with regular tile photos",
        "Facebook business page with community engagement"
      ],
      implementationPlan: [
        "Speed optimization with performance booster tools",
        "Create About Us page to share company story",
        "Build Gallery page with high-quality project photos",
        "Implement SEO strategy with relevant keywords",
        "Start blog with engaging tile trend posts",
        "Set up Instagram with hashtag strategy and influencer partnerships",
        "Create Facebook business page with targeted ads and live sessions"
      ],
      plugins: [
        {
          name: "Performance Booster",
          price: "Free",
          description: "Speed optimization tools for faster loading times",
          required: true
        },
        {
          name: "SEO Plugin",
          price: "Free",
          description: "Search engine optimization tools",
          required: true
        }
      ]
    },
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
    details: {
      keyFeatures: [
        "Yoolax-style order form for shades and blinds",
        "Square footage and box quantity calculator",
        "Sample order plugin with shopping cart",
        "Bulk product upload capability",
        "Backend CMS integration",
        "Domain transfer from GoDaddy to 10web.io",
        "Full testing and launch process"
      ],
      implementationPlan: [
        "Set up website with necessary tools and environment",
        "Build Yoolax-style form with measurement calculator",
        "Implement sample cart for tile sample requests",
        "Configure bulk product upload system",
        "Handle domain transfer process",
        "Conduct comprehensive testing before launch"
      ],
      plugins: [
        {
          name: "WPForms Pro",
          price: "$199/year",
          description: "Advanced form builder for order and measurement forms",
          required: true
        },
        {
          name: "WooCommerce",
          price: "Free",
          description: "Basic shopping cart functionality",
          required: true
        },
        {
          name: "WooCommerce Product Add-Ons",
          price: "$49/year",
          description: "Enhanced sample order options",
          required: true
        },
        {
          name: "WP All Import Pro",
          price: "$99/year",
          description: "Bulk product upload from spreadsheets",
          required: true
        },
        {
          name: "Simple Price Calculator",
          price: "Free",
          description: "Square footage and box quantity calculations",
          required: true
        },
        {
          name: "WP Rocket",
          price: "$59/year",
          description: "Optional performance booster for site speed",
          required: false
        }
      ],
      phases: [
        "Phase 1: Set up website, add form and sample order feature, prepare product management",
        "Phase 2: Build measurement tool, test form and cart, move domain",
        "Phase 3: Test everything including bulk product uploads",
        "Phase 4: Fix issues, add final content, and launch live site"
      ]
    },
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
  const [lastSaved, setLastSaved] = useState<Date>(new Date());

  const handleTaskToggle = (projectKey: keyof typeof projects, taskId: string) => {
    setProjects(prev => {
      const updatedProjects = {
        ...prev,
        [projectKey]: {
          ...prev[projectKey],
          tasks: prev[projectKey].tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        }
      };
      
      // Update progress based on completed tasks
      const project = updatedProjects[projectKey];
      const completedTasks = project.tasks.filter(task => task.completed).length;
      const newProgress = Math.round((completedTasks / project.tasks.length) * 100);
      updatedProjects[projectKey].progress = newProgress;
      
      return updatedProjects;
    });
    setLastSaved(new Date());
  };

  const resetAllProgress = () => {
    setProjects(prev => {
      const reset = { ...prev };
      Object.keys(reset).forEach(key => {
        reset[key as keyof typeof reset].tasks.forEach(task => task.completed = false);
        reset[key as keyof typeof reset].progress = 0;
      });
      return reset;
    });
    setLastSaved(new Date());
  };

  const saveProgress = () => {
    localStorage.setItem('projectProgress', JSON.stringify(projects));
    alert('Progress saved locally!');
    setLastSaved(new Date());
  };

  const shareProgress = () => {
    const totalProgress = Math.round(
      Object.values(projects).reduce((sum, project) => sum + project.progress, 0) / 3
    );
    navigator.clipboard.writeText(
      `Project Dashboard Progress: ${totalProgress}% complete. Yoolax: ${projects.yoolax.progress}%, Galactic: ${projects.galactic.progress}%, GHM: ${projects.ghm.progress}%`
    );
    alert('Progress summary copied to clipboard!');
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
                details={project.details}
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

        {/* Dashboard Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={saveProgress}
            className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Progress
          </Button>
          
          <Button 
            variant="outline" 
            onClick={shareProgress}
            className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Progress
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetAllProgress}
            className="bg-destructive/10 hover:bg-destructive/20 text-destructive border-destructive/30"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset All
          </Button>
          
          <div className="text-xs text-muted-foreground self-center">
            Last saved: {lastSaved.toLocaleTimeString()}
          </div>
        </div>

        {/* Interactive Footer */}
        <ProjectFooter />

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