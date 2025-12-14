import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
            <h2 className="text-4xl font-bold mb-4 font-mono">404 // Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md text-center">
                The signal you are looking for has been lost in the void.
            </p>
            <Link href="/">
                <Button variant="outline" className="border-white/10 hover:bg-white/10">
                    Return Home
                </Button>
            </Link>
        </div>
    )
}
