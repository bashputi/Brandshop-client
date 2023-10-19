import axios from "axios";


const AddProduct = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();

        const img = e.target.img.value;
        const name = e.target.name.value;
        const brand_name = e.target.brand_name.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const myData = {
            img, name, brand_name, type, price, description, rating
        }

        console.log(myData);

        try {
            const response = await axios.post("http://localhost:5001/brands", myData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }

    };

    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center l">
                    <h1 className="text-5xl font-bold">Add Product Here...</h1>
                
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="img" placeholder="Image URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div> 

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                       
                        <div className=" input input-bordered">
                        <select className="mt-3 w-72" name="brand_name" id="cars">
                         <option value="toyota">Toyota</option>
                         <option value="ford">Ford</option>
                         <option value="bmw">BMW</option>
                         <option value="mercedes-benz">Mercedes-Benz</option>
                         <option value="tesla">Tesla</option>
                         <option value="honda">Honda</option>
                         </select>
                        </div>
                         
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input type="text" name="type" placeholder="Type of Product" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default AddProduct;