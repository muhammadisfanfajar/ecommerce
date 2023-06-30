import { Phone } from '@phosphor-icons/react';
import Menu from './menu';

const Header = () => {
  return (
    <>
      <header className='bg-green-800 text-white py-1.5 text-sm'>
        <div className='container flex justify-between mx-auto px-6 md:px-0'>
          <div>
            <Phone className='inline' size={18} /> +620800000000
          </div>
          <div>Get 50% Off on All Products</div>
          <div>ENG | IND</div>
        </div>
      </header>
      <Menu />
    </>
  );
};

export default Header;
