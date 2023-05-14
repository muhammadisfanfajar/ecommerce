const Main = ({
  children,
  header,
  menu,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  menu: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <div className='bg-white min-h-screen text-gray-800'>
      {header}
      {menu}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default Main;
