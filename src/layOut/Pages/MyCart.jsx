
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';



const MyCart = () => {
    const loadedCarts = useLoaderData();
  
    const [updateUser, setUpdateUser] = useState(loadedCarts);

   const handleDelete = _id => {
console.log(_id);
        const URL = `https://brand-store-server-five.vercel.app/carts/${_id}`;
        fetch(URL, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
            )
            }
            const filterdData = updateUser.filter((item) => item._id !==  _id);
                setUpdateUser(filterdData);
        })
    }

    return (
        <div>
            <h1 className="text-5xl my-12 text-center">Product You Addeed </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-[70vw] mx-auto gap-5">
                {
            

                  updateUser.length && updateUser.map((user) => (

                    <div key={user._id} className="flex justify-center">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={user.img} alt="cars" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <div className="flex">
                            <p>Price: {user.price}</p>
                            <p>Ratings: {user.rating}</p>
                        </div>
                        <div className="card-actions mt-24 justify-end">
                        <button onClick={() => handleDelete(user._id)} className="btn text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 ...">Delete</button>
                        </div>
                    </div>
                    </div>
                </div>

                 ) )

                }

            </div>
        </div>
    );
};

export default MyCart;
MyCart.propTypes = {
    updateUser: PropTypes.node,
    setUpdateUser: PropTypes.node,
    user: PropTypes.node,
}

