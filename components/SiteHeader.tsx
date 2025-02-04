'use client';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Icons } from './icons';
import MainNav from './MainNav';
import ModdleToogle from './ModdleToogle';
import { buttonVariants } from './ui/button';

type Props = {};

const SiteHeader = (props: Props) => {
  const { data: session }: any = useSession();
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {!session ? (
              <>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'w-10 px-0 hidden sm:inline-flex'
                    )}
                  >
                    <Icons.gitHub className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'w-10 px-0 hidden sm:inline-flex'
                    )}
                  >
                    <Icons.twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </div>
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'w-10 px-0 hidden sm:inline-flex'
                    )}
                  >
                    <Icons.linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <ul className=" flex flex-col sm:flex-row gap-x-4 gap-y-3">
                  <li className=" flex justify-center items-center">
                    {session.user?.email}
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: '/' });
                      }}
                      className="rounded-full bg-black text-white dark:bg-white dark:text-black py-1 px-2"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            )}

            <ModdleToogle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
