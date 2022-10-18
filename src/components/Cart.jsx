import { Link } from "react-router-dom"

const Cart = () => {
return (
    <section className="hero min-h-screen bg-base-200" >
        <div className="hero-content text-center flex-col">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Cart</h1>
                <p className="py-6">Oops, it looks like your cart is empty <br />Go to the <Link to="/Products" className="link link-hover font-semibold">Products</Link></p>
            </div>
        </div>
    </section>
)
}
export default Cart

