const Home = () => {
  return (
    <main className="container mx-auto p-4 space-y-12 mt-20">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__bounce">Welcome to  Gemo Fake Company!</h1>
        <p className="text-xl text-gray-600">
          Your one-stop shop for affordable gadgets and lifestyle products.
        </p>
      </section>

      <section className="bg-blue-100 p-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-2">Big Spring Sale!</h2>
        <p className="text-lg">
          Up to 50% off on selected items. Limited time only!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">Fast Shipping</h3>
          <p>Get your orders delivered within 3-5 business days! (or 3-5 years) </p>
        </div>
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
          <p>Our team is here to help you anytime, anywhere. (mostly never)</p>
        </div>
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">Easy Returns</h3>
          <p>Not satisfied? Return it within 30 days, no questions asked.( give us money and never ask anything)</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
