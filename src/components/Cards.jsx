import { Link } from "react-router-dom";

const Cards = ({ estate }) => {
    const { id, image, estate_title, segment_name, price, status, area, location, facilities } = estate;
    return (
        <div className="bg-base-200 hover:scale-105   relative max-h-[500px] transition-all">
            <figure className=" rounded-t-2xl bg-base-200 ">
                <img src={image} alt="Shoes" className="h-48 w-full" />
            </figure>
            <div className="card-body">

                <h2 className="card-title font-semibold">{estate_title}</h2>
                <p>Segment: {segment_name}</p>
                <h2 className="font-semibold text-black border-b">Facilities: </h2>

                <div className="flex text-sm text-green-500 space-x-5">
                    {
                        facilities.map((facility, i) => <span key={i}>{facility}</span>)
                    }
                </div>
                <div className="flex mt-3 text-sm justify-between">
                    <p>Status: {status}</p>
                    <p>Price: {price}</p>
                </div>
                
            </div>
            
            <Link to={`/${id}`} className="btn rounded-none absolute bottom-0 w-full bg-green-500 hover:bg-blue-500">View Property</Link>
            
            
        </div>
    );
};

export default Cards;