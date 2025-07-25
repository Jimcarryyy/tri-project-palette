import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  tasks: Task[];
  color: 'yoolax' | 'galactic' | 'ghm';
  effort: number;
  onTaskToggle: (taskId: string) => void;
}

const colorClasses = {
  yoolax: {
    border: 'border-yoolax/20',
    bg: 'bg-gradient-to-br from-yoolax/10 to-yoolax-secondary/5',
    accent: 'text-yoolax',
    badge: 'bg-yoolax/20 text-yoolax border-yoolax/30'
  },
  galactic: {
    border: 'border-galactic/20',
    bg: 'bg-gradient-to-br from-galactic/10 to-galactic-secondary/5',
    accent: 'text-galactic',
    badge: 'bg-galactic/20 text-galactic border-galactic/30'
  },
  ghm: {
    border: 'border-ghm/20',
    bg: 'bg-gradient-to-br from-ghm/10 to-ghm-secondary/5',
    accent: 'text-ghm',
    badge: 'bg-ghm/20 text-ghm border-ghm/30'
  }
};

export function ProjectCard({ 
  title, 
  description, 
  progress, 
  tasks, 
  color, 
  effort, 
  onTaskToggle 
}: ProjectCardProps) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const styles = colorClasses[color];

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg", styles.border, styles.bg)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className={cn("text-xl font-bold", styles.accent)}>
            {title}
          </CardTitle>
          <Badge variant="outline" className={styles.badge}>
            <TrendingUp className="w-3 h-3 mr-1" />
            {effort}% Effort
          </Badge>
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
      </CardContent>
    </Card>
  );
}