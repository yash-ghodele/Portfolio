export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">
              Yash<span className="text-destructive">Ghodele</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} Yash Ghodele. All rights reserved.</p>
            <p className="text-sm text-muted-foreground mt-1">Engineer • Leader • Innovator</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
