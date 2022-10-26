import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Lo sentimos</h1>
                <p className="py-6">Al parecer la pagina a la que intentas acceder no existe o esta en desarrollo, <strong><Link to="/">vuelve al inicio.</Link></strong></p>
            </div>
        </div>
    </div>
    </>
  )
}
export default Error404