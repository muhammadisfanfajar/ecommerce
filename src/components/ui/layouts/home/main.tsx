const Main = ({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <div className='bg-white min-h-screen text-gray-800'>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default Main;
