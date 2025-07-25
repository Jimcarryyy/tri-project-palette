import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, CheckCircle, Clock, Target } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="text-center space-y-6 mb-12">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <BarChart3 className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Project Visualization Dashboard
        </h1>
      </div>
      
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        A visual project management dashboard designed for developers who learn better through 
        interactive charts, progress tracking, and color-coded project organization.
      </p>
      
      <div className="flex justify-center space-x-4">
        <Badge variant="outline" className="bg-yoolax/10 text-yoolax border-yoolax/30">
          <Target className="w-3 h-3 mr-1" />
          Yoolax Project
        </Badge>
        <Badge variant="outline" className="bg-galactic/10 text-galactic border-galactic/30">
          <CheckCircle className="w-3 h-3 mr-1" />
          Galactic Tiles
        </Badge>
        <Badge variant="outline" className="bg-ghm/10 text-ghm border-ghm/30">
          <Clock className="w-3 h-3 mr-1" />
          GHM Tile
        </Badge>
      </div>
      
      <div className="pt-4">
        <Button variant="outline" className="bg-primary/10 border-primary/30 hover:bg-primary/20">
          Get Started with Visual Planning
        </Button>
      </div>
    </div>
  );
}