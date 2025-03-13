const About = () => {
  return (
    <div className="max-w-[115rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 6 h-screen">
      <div className="flex items-center justify-between mt-3 pt-52">
        {/* Image */}
        <div className="flex-1 w-full sm:w-1/2">
          <img
            src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full sm:w-1/2 pl-8">
          <h2 className="text-3xl font-bold text-black text-center mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Welcome to our platform, where we bring like-minded individuals
            together to engage in meaningful discussions, share knowledge, and
            build lasting connections. We aim to create a vibrant and inclusive
            community that fosters collaboration and growth for everyone
            involved.
          </p>
          <p className="text-lg text-gray-700">
            Our platform is designed to facilitate interaction and provide
            valuable resources to our users. Whether you're here to participate
            in events, access helpful content, or connect with others, we are
            committed to ensuring an exceptional experience for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
