const LandingLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full">
      <div className="bg-[#f7bf4f] absolute top-[-6rem] -z-10 right-[5rem] h-[15rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[68.75rem] dark:bg-[#f7bf4f]"></div>
      <div className="bg-[#f7d692] absolute top-[-1rem] -z-10 left-[-35rem] h-[15.25rem] w-[50rem] rounded-full blur-[7rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c2c8ff]"></div>
      <div className="bg-[#f7bf4f] absolute top-[60rem] -z-10 right-[5rem] h-[15rem] w-[31.25rem] rounded-full blur-[12rem] sm:w-[68.75rem] dark:bg-[#f7bf4f]"></div>
      <div className="bg-[#f7d692] absolute top-[50rem] -z-10 left-[-35rem] h-[15.25rem] w-[50rem] rounded-full blur-[13rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c2c8ff]"></div>
      {children}
    </div>
  );
}

export default LandingLayout;
