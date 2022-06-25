import { Logo } from "./Logo";

export function Header() {
  return(
    <header className="w-full bg-gray-700 h-[200px] flex justify-center items-center">
      <Logo />
    </header>
  )
}