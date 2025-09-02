const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-gradient-primary"></div>
            <span className="font-semibold">SaaSify</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 SaaSify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;