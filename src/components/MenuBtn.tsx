import { CgMenuGridR } from 'react-icons/cg';

interface MenuBtnProps {
  btnClass?: string;
  onClick?: () => void;
}

const MenuBtn = ({ btnClass, onClick }: MenuBtnProps) => {
  return (
    <button
      className={`bg-accent shadow-custom flex h-[54px] w-[54px] cursor-pointer select-none items-center justify-center rounded-lg ${btnClass}`}
      onClick={onClick}>
      <CgMenuGridR className='text-4xl text-white' />
    </button>
  );
};

export default MenuBtn;
