export const CartList = (props) => {
  const num = 5000000;
  return (
    <main
      className={`hidden lg:block transition-transform absolute bg-white h-screen z-20 w-2/6 
          ${
            props.openCart
              ? "transition-all animate-sliderRight"
              : "transition-all animate-sliderLeft -translate-x-full "
          }
        `}
    >
      <section className="flex flex-col h-full">
        <div className="flex justify-center">
          <span className="font-bold text-2xl">Cart</span>
        </div>
        <table className="w-full border-2">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Quantity</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Halo</td>
              <td>Halo</td>
              <td>Halo</td>
            </tr>
          </tbody>
        </table>
        <div className="font-bold border-2 text-end h-3/4">
          Total Rp.{" "}
          {num.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </div>
        <div className="justify-center flex ">
          <button className="w-3/4 p-4 bg-green-500 hover:bg-green-800 text-white font-bold text-2xl rounded-md">
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
};
