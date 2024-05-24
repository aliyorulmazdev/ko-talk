import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <FacebookIcon className="h-6 w-6" />
            <span className="hidden md:inline-block">ko-talk</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4">
              <Link className="hover:text-gray-400" href="#">
                Anayurt
              </Link>
              <Link className="hover:text-gray-400" href="#">
                Haftalık
              </Link>
              <Link className="hover:text-gray-400" href="#">
                Aylık
              </Link>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
            </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Şunlara da göz at;</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Tüm Zamanlar</DropdownMenuItem>
                <DropdownMenuItem>Haftalık</DropdownMenuItem>
                <DropdownMenuItem>Aylık</DropdownMenuItem>
                <DropdownMenuItem>En İyiler</DropdownMenuItem>
                <DropdownMenuItem>En Kötüler</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Yayınla
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <Avatar>
                    <AvatarImage alt="Avatar" src="/placeholder.jpg" />
                    <AvatarFallback>KT</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Profilim</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Ayarlar</DropdownMenuItem>
                <DropdownMenuItem>Çıkış Yap</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-[1fr_300px] md:p-6">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 md:hidden">
              <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-bold">Kategoriler</h3>
                <nav className="space-y-2">
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <RocketIcon className="h-5 w-5" />
                    <span>r/technology</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <GamepadIcon className="h-5 w-5" />
                    <span>r/gaming</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <BookIcon className="h-5 w-5" />
                    <span>r/books</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <CameraIcon className="h-5 w-5" />
                    <span>r/photography</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <DumbbellIcon className="h-5 w-5" />
                    <span>r/fitness</span>
                  </Link>
                  <Button className="w-full mt-4">Daha fazla göster</Button>
                </nav>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-900">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button className="h-10 w-10" size="icon" variant="ghost">
                    <ArrowUpIcon className="h-6 w-6 text-gray-500" />
                  </Button>
                  <span>1.2k</span>
                  <Button className="h-10 w-10" size="icon" variant="ghost">
                    <ArrowDownIcon className="h-6 w-6 text-gray-500" />
                  </Button>
                </div>
                <img
                  alt="Avatar"
                  className="h-10 w-10 rounded-full"
                  height={40}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width={40}
                />
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
              <h2 className="mt-4 text-xl font-bold">Introducing the new ko-talk design</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <ContactIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <ShareIcon className="h-5 w-5" />
                </Button>
                <Button className="ml-auto" variant="link">
                  Daha fazlasını gör
                </Button>
              </div>
              <div className="mt-4 space-y-4 md:hidden">
                <h4 className="font-semibold flex items-center justify-between">
                  <span>Yorumlar (345)</span>
                </h4>
              </div>
              <div className="mt-4 space-y-4 hidden md:block">
                <h4 className="font-semibold flex items-center justify-between">
                  <span>Toplam (345) yorum</span>
                </h4>
                <div className="flex items-start gap-4">
                  <img
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium">Alice</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Great design! I love the new look and feel.</p>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-4">
                        <img
                          alt="Avatar"
                          className="h-10 w-10 rounded-full"
                          height={40}
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width={40}
                        />
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h5 className="font-medium">Charlie</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400">
                            I agree, the new design is sleek and modern.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <img
                          alt="Avatar"
                          className="h-10 w-10 rounded-full"
                          height={40}
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                          }}
                          width={40}
                        />
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h5 className="font-medium">Eve</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">30 minutes ago</span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400">
                            I'm not a fan of the new design, but I'll give it a try.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium">Bob</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      I'm not a big fan of the new design, but I'll give it a try.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-900 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button className="h-10 w-10" size="icon" variant="ghost">
                    <ArrowUpIcon className="h-6 w-6 text-gray-500" />
                  </Button>
                  <span>850</span>
                  <Button className="h-10 w-10" size="icon" variant="ghost">
                    <ArrowDownIcon className="h-6 w-6 text-gray-500" />
                  </Button>
                </div>
                <img
                  alt="Avatar"
                  className="h-10 w-10 rounded-full"
                  height={40}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width={40}
                />
                <div>
                  <h3 className="font-medium">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                </div>
              </div>
              <h2 className="mt-4 text-xl font-bold">The best subko-talks for tech enthusiasts</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <ContactIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <ShareIcon className="h-5 w-5" />
                </Button>
                <Button className="ml-auto" variant="link">
                  Daha fazlasını gör
                </Button>
              </div>
            </div>
            <Button className="w-full">Devamını göster</Button>
          </div>
          <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-900  ">
            <h3 className="mb-4 text-lg font-bold hidden md:block">Kategoriler</h3>
            <nav className="space-y-2 hidden md:block">
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#"
              >
                <RocketIcon className="h-5 w-5" />
                <span>r/technology</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#"
              >
                <GamepadIcon className="h-5 w-5" />
                <span>r/gaming</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#"
              >
                <BookIcon className="h-5 w-5" />
                <span>r/books</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#"
              >
                <CameraIcon className="h-5 w-5" />
                <span>r/photography</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#"
              >
                <DumbbellIcon className="h-5 w-5" />
                <span>r/fitness</span>
              </Link>
              <Button className="w-full mt-4">Daha fazla göster</Button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function DumbbellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}