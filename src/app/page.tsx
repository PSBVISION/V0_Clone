import {prisma} from "@/lib/db"
import { Button } from "@/components/ui/button";
export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      changing
      <Button>Click Me</Button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
