const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-display text-lg font-bold text-neon">
              &lt;NEON JUNGLE DEV/&gt;
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 Neon Jungle Developer. Crafted with 
              <span className="text-neon mx-1">♦</span> 
              in the digital wilderness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;