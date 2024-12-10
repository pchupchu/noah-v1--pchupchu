import { CgMenuGridR } from 'react-icons/cg';

interface MenuBtnProps {
  btnClass?: string;
}

const MenuBtn = ({ btnClass }: MenuBtnProps) => {
  return (
    <button
      className={`bg-accent shadow-custom flex h-[54px] w-[54px] cursor-pointer select-none items-center justify-center rounded-lg ${btnClass}`}>
      <CgMenuGridR className='text-4xl text-white' />
    </button>
  );
};

export default MenuBtn;
