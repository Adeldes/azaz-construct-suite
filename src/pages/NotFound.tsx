import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background" dir="rtl">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        <p className="mb-4 text-2xl text-muted-foreground">عذراً! الصفحة غير موجودة</p>
        <p className="mb-8 text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        <Button asChild className="gradient-primary">
          <Link to="/">
            <Home className="ml-2 h-5 w-5" />
            العودة للرئيسية
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
