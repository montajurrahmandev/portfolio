<section
  className="bg-gray-800 pt-20 pb-14 mt-10 text-white"
  id="contact"
>
  <Container>
    <div className="pb-8 text-center mb-16">
      <Heading
        text="Contact Me"
        as="h2"
        className="text-[48px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
      />
      <p className="text-[18px] pt-2 mx-auto max-w-[700px]">
        Whether you're a startup, agency, or entrepreneur, I’m here to help
        bring your web ideas to life. Let’s collaborate to build something
        impactful and scalable.
      </p>
    </div>

    <div className="flex justify-between flex-wrap gap-12">
      {/* Left Section - Availability and Email */}
      <div className="flex flex-col items-center text-[16px] max-w-[320px]">
        <div className="bg-gray-900 w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center text-center text-white font-semibold shadow-lg">
          <Heading text="I'm Available For" as="h5" className="text-[20px]" />
          <Heading text="Freelance Work" as="h5" className="text-[18px]" />
        </div>
        <p className="text-white pt-6">montajur.rahman.dev@gmail.com</p>
      </div>

      {/* Middle Section - Contact Info */}
      <div className="text-white flex flex-col gap-y-6 max-w-[320px]">
        <p className="flex items-center gap-x-3 text-[16px]">
          <FaSquarePhone /> <span className="w-[85px]">Phone</span>:
          <span>+8801310951801</span>
        </p>
        <p className="flex items-center gap-x-3 text-[16px]">
          <FaLocationDot /> <span className="w-[85px]">Location</span>:
          <span>Dhaka, Bangladesh</span>
        </p>
      </div>

      {/* Right Section - Social Links */}
      <div className="text-white flex flex-col gap-y-6 max-w-[320px]">
        <p className="flex gap-x-8">
          <Link
            href="https://www.linkedin.com"
            className="flex items-center gap-x-3 text-[16px] w-[130px] hover:text-blue-400"
          >
            <FaLinkedin /> Linkedin
          </Link>
          <Link
            href="https://www.linkedin.com"
            className="px-4 py-1 border rounded-full hover:bg-white hover:text-black ease-in duration-200"
          >
            Follow
          </Link>
        </p>
        <p className="flex gap-x-8">
          <Link
            href="https://github.com"
            className="flex items-center gap-x-3 text-[16px] w-[130px] hover:text-gray-400"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://github.com"
            className="px-4 py-1 border rounded-full hover:bg-white hover:text-black ease-in duration-200"
          >
            Follow
          </Link>
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="mt-14">
      <form action="">
        <div className="grid py-12 text-[#232323] gap-y-7 max-w-2xl mx-auto">
          <div>
            <Input
              type={"text"}
              placeholder={"Name"}
              className={"outline-0 py-3 pl-4 rounded-md bg-gray-100"}
            />
          </div>
          <div>
            <Input
              type={"email"}
              placeholder={"Email"}
              className={"outline-0 py-3 pl-4 rounded-md bg-gray-100"}
            />
          </div>
          <div>
            <textarea
              name="text"
              id="text"
              placeholder="Your Message"
              className="w-full bg-gray-100 outline-0 py-3 h-[150px] pl-4 rounded-md"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="w-1/2 py-3 px-7 bg-transparent text-black rounded-md cursor-pointer hover:bg-gray-700 hover:text-white outline-1 ease-in-out duration-300"
          />
        </div>
      </form>
    </div>
  </Container>
</section>
