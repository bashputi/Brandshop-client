import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const MyCartCard = ({ addData,setProducts,products }) => {
    const {_id, img, name, price, rating} = addData || {};

    const handleDelete = _id => {
       
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
   if (result.isConfirmed) {
    fetch(`https://brand-store-server-five.vercel.app/carts/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0) {
            
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remainnig = products.filter(oneData => oneData._id !== _id);
              setProducts(remainnig)
        }
    })
   console.log('deleted');
  }
})
    }

    return (
        <div>
               <div className="flex justify-center">
                     <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img} alt="cars" /></figure>
                     <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <div className="flex">
                             <p>Price: {price}</p>
                             <p>Ratings: {rating}</p>
                         </div>
                        <div className="card-actions mt-24 justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 ...">Delete</button>
                         </div>
                    </div>
                    </div>
                 </div>
        </div>
    );
};

export default MyCartCard;

MyCartCard.propTypes = {
    addData: PropTypes.object,
    setProducts: PropTypes.func,
    products: PropTypes.array,   
}