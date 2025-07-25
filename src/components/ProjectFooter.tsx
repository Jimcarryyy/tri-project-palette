import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Play, 
  FileText, 
  Download,
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  Users,
  Calendar
} from "lucide-react";
import { useState } from "react";

export function ProjectFooter() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <Zap className="w-5 h-5 text-primary" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="bg-yoolax/10 hover:bg-yoolax/20 text-yoolax border-yoolax/30"
              onClick={() => window.open('https://yoolax.com', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Yoolax.com
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-galactic/10 hover:bg-galactic/20 text-galactic border-galactic/30"
              onClick={() => window.open('https://galactictiles.com', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Galactic Tiles
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-ghm/10 hover:bg-ghm/20 text-ghm border-ghm/30"
              onClick={() => window.open('https://ghmtile.10web.cloud', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit GHM Tile
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
              onClick={() => alert('Project started! Track your progress in the dashboard above.')}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Project
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Project Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => alert('Downloading project checklist...')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Project Checklist
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => alert('Opening plugin comparison guide...')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Plugin Comparison Guide
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => alert('Viewing cost breakdown...')}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Cost Breakdown Analysis
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Project Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Projects</span>
              <Badge variant="secondary">3</Badge>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Estimated Timeline</span>
              <Badge variant="secondary">8-12 weeks</Badge>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Investment</span>
              <Badge variant="secondary">$405/year</Badge>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Completion Rate</span>
              <Badge className="bg-primary/20 text-primary">27%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Card>
        <CardHeader>
          <div className="flex space-x-4">
            {['overview', 'timeline', 'resources'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab === 'overview' && <Users className="w-4 h-4 mr-2" />}
                {tab === 'timeline' && <Calendar className="w-4 h-4 mr-2" />}
                {tab === 'resources' && <BookOpen className="w-4 h-4 mr-2" />}
                {tab}
              </Button>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <h4 className="font-semibold">Project Overview</h4>
              <p className="text-sm text-muted-foreground">
                This dashboard provides a comprehensive view of three interconnected web development projects, 
                each designed to enhance business capabilities through modern web technologies and strategic implementations.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yoolax">30%</div>
                  <div className="text-xs text-muted-foreground">Yoolax Effort</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-galactic">25%</div>
                  <div className="text-xs text-muted-foreground">Galactic Effort</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ghm">45%</div>
                  <div className="text-xs text-muted-foreground">GHM Effort</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <h4 className="font-semibold">Recommended Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-yoolax/20 text-yoolax">Weeks 1-3</Badge>
                  <span className="text-sm">Complete Yoolax order form setup and testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-galactic/20 text-galactic">Weeks 2-5</Badge>
                  <span className="text-sm">Galactic Tiles web presence enhancement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-ghm/20 text-ghm">Weeks 4-12</Badge>
                  <span className="text-sm">GHM Tile complete solution development</span>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="space-y-4">
              <h4 className="font-semibold">Additional Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => alert('Opening WordPress documentation...')}
                >
                  WordPress Documentation
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => alert('Opening WooCommerce guides...')}
                >
                  WooCommerce Guides
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => alert('Opening SEO best practices...')}
                >
                  SEO Best Practices
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => alert('Opening design inspiration...')}
                >
                  Design Inspiration
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}