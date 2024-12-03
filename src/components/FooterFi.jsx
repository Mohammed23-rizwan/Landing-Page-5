const FooterFi = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="flex flex-col items-center ">
        <h2 className="text-[#C9FD02]">LearnHub</h2>
        <p className="text-[#505C6F] pt-2">
          © 2022 Tailwind Labs Inc. All rights reserved.
        </p>
        <div className="flex gap-2 pt-4">
          <p>Form</p>
          <div className="inline-block  min-h-[20%] w-0.5 self-stretch bg-[#303132]"></div>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default FooterFi;