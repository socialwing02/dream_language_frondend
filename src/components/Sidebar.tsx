type Props = {
  isOpen: boolean;
};

export default function Sidebar({ isOpen }: Props) {
  return (
    <div
      className={`absolute right-0 h-screen top-0 bg-black overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "w-[300px]" : "w-0"
      }`}
    ></div>
  );
}
