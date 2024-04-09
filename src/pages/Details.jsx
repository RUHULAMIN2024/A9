import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const estates = useLoaderData();
    const { id } = useParams();

    const estate = estates.find(estate => estate.id === id);
    const {
        image,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities, } = estate;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-base-200 animate__fadeInUp animate__animated">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold sm:text-4xl">{estate_title}</h2>
                        <p className="text-xl dark:text-gray-600">Segment: {segment_name}</p>
                    </div>
                    <div className="dark:text-gray-800">
                    <p>{description} ...</p>
                        <h2 className="font-semibold mt-5 border-b">Facilities: </h2>
                        <div className="flex text-green-500 space-x-5">

                            {
                                facilities.map((facility, i) => <span key={i}>#{facility}</span>)
                            }
                        </div>
                        <div className="flex mt-5 justify-between">
                            <p>Location: {location}</p>
                            <p>Area: {area}</p>
                        </div>
                        <div className="flex mt-5 justify-between">
                            <p>Status: {status}</p>
                            <p>Price: {price}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;