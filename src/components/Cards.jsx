import { Link } from "react-router-dom";

const Cards = ({ estate }) => {
    const { id, image, estate_title, segment_name, price, status, area, location, facilities } = estate;
    return (
        <div className="bg-base-200 animate__animated animate__zoomIn animate__delay-1s rounded-2xl transition-all">
            <figure className="p-8 rounded-t-2xl bg-base-200 ">
                <img src={image} alt="Shoes" className="h-48 rounded-xl" />
            </figure>
            <div className="card-body">

                <h2 className="card-title font-semibold text-2xl">{estate_title}</h2>
                <p className="text-lg">Segment: {segment_name}</p>
                <h2 className="font-semibold border-b">Facilities: </h2>
                <div className="flex text-green-500 space-x-5">

                    {
                        facilities.map((facility, i) => <span key={i}>#{facility}</span>)
                    }
                </div>
                <div className="flex mt-5 justify-between">
                    <p>Status: {status}</p>
                    <p>Price: {price}</p>
                </div>
                <Link to={`/${id}`} className="btn mt-5 w-full bg-green-500 hover:bg-blue-500">View Property</Link>

            </div>
        </div>
    );
};

export default Cards;