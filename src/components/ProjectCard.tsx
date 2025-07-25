import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle2, Circle, TrendingUp, ChevronDown, ChevronUp, DollarSign, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
}

interface Plugin {
  name: string;
  price: string;
  description: string;
  required: boolean;
}

interface ProjectDetails {
  keyFeatures: string[];
  implementationPlan: string[];
  plugins: Plugin[];
  phases?: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  tasks: Task[];
  color: 'yoolax' | 'galactic' | 'ghm';
  effort: number;
  details: ProjectDetails;
  onTaskToggle: (taskId: string) => void;
}

const colorClasses = {
  yoolax: {
    border: 'border-yoolax/20',
    bg: 'bg-gradient-to-br from-yoolax/10 to-yoolax-secondary/5',
    accent: 'text-yoolax',
    badge: 'bg-yoolax/20 text-yoolax border-yoolax/30',
    button: 'bg-yoolax/10 hover:bg-yoolax/20 text-yoolax border-yoolax/30'
  },
  galactic: {
    border: 'border-galactic/20',
    bg: 'bg-gradient-to-br from-galactic/10 to-galactic-secondary/5',
    accent: 'text-galactic',
    badge: 'bg-galactic/20 text-galactic border-galactic/30',
    button: 'bg-galactic/10 hover:bg-galactic/20 text-galactic border-galactic/30'
  },
  ghm: {
    border: 'border-ghm/20',
    bg: 'bg-gradient-to-br from-ghm/10 to-ghm-secondary/5',
    accent: 'text-ghm',
    badge: 'bg-ghm/20 text-ghm border-ghm/30',
    button: 'bg-ghm/10 hover:bg-ghm/20 text-ghm border-ghm/30'
  }
};

export function ProjectCard({ 
  title, 
  description, 
  progress, 
  tasks, 
  color, 
  effort, 
  details,
  onTaskToggle 
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPlugins, setShowPlugins] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  
  const completedTasks = tasks.filter(task => task.completed).length;
  const styles = colorClasses[color];
  const totalPluginCost = details.plugins.reduce((sum, plugin) => {
    const price = plugin.price.replace(/[^0-9]/g, '');
    return sum + (price ? parseInt(price) : 0);
  }, 0);

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg", styles.border, styles.bg)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className={cn("text-xl font-bold", styles.accent)}>
            {title}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={styles.badge}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {effort}% Effort
            </Badge>
            <Badge variant="outline" className={styles.badge}>
              <DollarSign className="w-3 h-3 mr-1" />
              ${totalPluginCost}/year
            </Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Overview */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Task Completion */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Tasks Completed</span>
            <span className="text-sm text-muted-foreground">
              {completedTasks}/{tasks.length}
            </span>
          </div>
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                onClick={() => onTaskToggle(task.id)}
              >
                {task.completed ? (
                  <CheckCircle2 className={cn("w-4 h-4", styles.accent)} />
                ) : (
                  <Circle className="w-4 h-4 text-muted-foreground" />
                )}
                <span className={cn(
                  "text-sm transition-all",
                  task.completed ? "line-through text-muted-foreground" : "text-foreground"
                )}>
                  {task.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className={styles.button}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Settings className="w-3 h-3 mr-1" />
            View Details
            {isExpanded ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className={styles.button}
            onClick={() => setShowPlugins(!showPlugins)}
          >
            <Zap className="w-3 h-3 mr-1" />
            Plugins ({details.plugins.length})
          </Button>

          {details.phases && (
            <Button 
              variant="outline" 
              size="sm" 
              className={styles.button}
              onClick={() => setShowPhases(!showPhases)}
            >
              Phases ({details.phases.length})
            </Button>
          )}
        </div>

        {/* Expandable Details */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleContent className="space-y-4">
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
              <ul className="space-y-1">
                {details.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start">
                    <span className="w-1 h-1 bg-current rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Implementation Plan:</h4>
              <ul className="space-y-1">
                {details.implementationPlan.map((step, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start">
                    <span className={cn("text-xs font-medium mr-2 flex-shrink-0", styles.accent)}>
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Plugins Section */}
        <Collapsible open={showPlugins} onOpenChange={setShowPlugins}>
          <CollapsibleContent className="space-y-2">
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3 text-sm">Required Tools & Plugins:</h4>
              {details.plugins.map((plugin, index) => (
                <div key={index} className="p-2 rounded border border-border/50 bg-card/30">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm">{plugin.name}</span>
                    <Badge variant={plugin.required ? "default" : "secondary"} className="text-xs">
                      {plugin.price}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{plugin.description}</p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Phases Section */}
        {details.phases && (
          <Collapsible open={showPhases} onOpenChange={setShowPhases}>
            <CollapsibleContent className="space-y-2">
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 text-sm">Project Phases:</h4>
                {details.phases.map((phase, index) => (
                  <div key={index} className="p-2 rounded border border-border/50 bg-card/30">
                    <span className="text-sm font-medium">{phase}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
    </Card>
  );
}