import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-5xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Oops! Even the best plans hit a dead end sometimes. Let&apos;s head home.
        </p>
        <Button asChild>
          <Link href="/">
            Go to homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
