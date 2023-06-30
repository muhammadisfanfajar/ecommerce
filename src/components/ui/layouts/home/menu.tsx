import {
  ShoppingCart,
  MagnifyingGlass,
  User,
  CaretDown,
} from '@phosphor-icons/react';
import logo from '/src/assets/cart-logo.png';

const Menu = () => {
  function closeDropDown(e: React.MouseEvent): void {
    const targetEl = e.currentTarget as HTMLElement;

    if (targetEl && targetEl.matches(':focus')) {
      e.preventDefault();
      targetEl.blur();
    }
  }

  return (
    <div className='flex flex-col lg:flex-row container mx-auto gap-4 mt-4 md:mt-0 md:gap-6 min-h-16  font-semibold'>
      <div className='flex items-center justify-center gap-12 mx-auto'>
        <img src={logo} alt='' width={56} className='inline' />
        <div className='flex gap-12 items-center'>
          <div>
            <div className='dropdown dropdown-bottom'>
              <label
                tabIndex={0}
                onMouseDown={closeDropDown}
                className='hover:cursor-pointer'
              >
                Categories <CaretDown className='inline' weight='bold' />
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-white rounded-box w-52'
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div>Deals</div>
          <div>What's New</div>
          <div>Delivery</div>
        </div>
      </div>
      <div className='flex grow justify-center lg:justify-end gap-12 items-center'>
        <div className='relative'>
          <input
            type='text'
            className='h-8 pl-3 pr-7 py-5 border-green-700 rounded-lg border-none bg-gray-300 focus:ring-0 placeholder:font-medium font-normal'
            placeholder='Search Product'
          />
          <MagnifyingGlass className='absolute right-2 top-3' weight='bold' />
        </div>
        <div>
          <User className='inline' /> Account
        </div>
        <div>
          <ShoppingCart className='inline' /> Cart
        </div>
      </div>
    </div>
  );
};

export default Menu;
