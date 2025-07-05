const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Binh Phan
            </a>
            <div className="flex gap-8">
              <a href="/projects" className="text-primary font-medium">Projects</a>
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Coming soon - showcasing my work in Machine Learning and AI
          </p>
        </div>
      </main>
    </div>
  );
};

export default Projects;