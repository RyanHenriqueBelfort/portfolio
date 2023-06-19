import { Copyright } from "@phosphor-icons/react";

export function Footer() {
  return (
    <div className="bg-main-900 h-20 flex items-center">
      <div className="w-full px-[4.5rem] flex items-center">
        <Copyright size={32} className="text-gray-400" />
        <span className="ml-4 text-gray-400">2023 Ryan Henrique all right reserverd</span>
      </div>
    </div>
  );
}
