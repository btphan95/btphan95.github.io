import { Mail, Github, Linkedin, Twitter, Instagram, ArrowRight, Sparkles, Code, Briefcase } from 'lucide-react';
import profilePic from '../assets/profile-pic.webp';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-smooth font-serif">
              Binh Phan
            </a>
            <div className="flex gap-8">
              <a href="/projects" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">Projects</a>
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Machine Learning Engineer
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground font-serif leading-tight">
                Hi, I'm <span className="gradient-primary bg-clip-text text-transparent">Binh!</span>
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  I specialize in Machine Learning and AI, transforming complex data into intelligent solutions. 
                  Based in the San Francisco Bay Area.
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                    <Code className="w-4 h-4 text-primary" />
                    <span>USC M.S. Electrical Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Apple • Western Digital • PG&E</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/projects" 
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-smooth group"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="mailto:btphan95@gmail.com" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 scale-110"></div>
                <img 
                  src={profilePic} 
                  alt="Binh Phan" 
                  className="relative w-80 h-80 rounded-full object-cover shadow-elegant border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Experience Card */}
            <Card className="gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Experience</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground">Apple</div>
                    <div className="text-sm">Machine Learning Engineer</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Western Digital</div>
                    <div className="text-sm">Data Scientist</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">PG&E</div>
                    <div className="text-sm">Analytics Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Education</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground">University of Southern California</div>
                    <div className="text-sm">M.S. Electrical Engineering</div>
                    <div className="text-sm">Specialization: Machine Learning & AI</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Focus Areas</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="text-sm">Machine Learning</div>
                  <div className="text-sm">Artificial Intelligence</div>
                  <div className="text-sm">Data Science</div>
                  <div className="text-sm">Deep Learning</div>
                  <div className="text-sm">MLOps</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm passionate about creating intelligent solutions that make a real impact. Let's discuss your next project.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:btphan95@gmail.com" className="p-4 rounded-full bg-card shadow-soft hover:shadow-elegant transition-smooth group">
              <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://github.com/btphan95" className="p-4 rounded-full bg-card shadow-soft hover:shadow-elegant transition-smooth group">
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/btphan95" className="p-4 rounded-full bg-card shadow-soft hover:shadow-elegant transition-smooth group">
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com/btphan95" className="p-4 rounded-full bg-card shadow-soft hover:shadow-elegant transition-smooth group">
              <Twitter className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://instagram.com/btphan95" className="p-4 rounded-full bg-card shadow-soft hover:shadow-elegant transition-smooth group">
              <Instagram className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Binh Phan. Crafted with modern web technologies.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/projects" className="hover:text-foreground transition-colors">Projects</a>
              <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
              <a href="mailto:btphan95@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
