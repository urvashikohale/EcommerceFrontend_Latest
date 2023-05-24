import React , {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/cardHelper';
import ImageHelper from './helper/ImageHelper';


   
    const Card = ({ product,
        addtoCart = true,
        removeFromCart= false,
        setReload = f=>f,
        reload= undefined
    }) => {

        const [redirect,setRedirect] = useState(false)
        const [count,setCount]= useState(product.count)

        const cartTitle = product? product.name :"A photo from pexels"
        const cartDescription = product? product.description :"Default description"
        const cartPrice = product? product.price:"DEFAULT"

        const addToCart=()=>{
          addItemToCart(product, ()=>setRedirect(true))
        }

        const getARedirect =(redirect)=>{
          if(redirect){
            return <Redirect to="/cart"/>
          }
        }

        const showAddtoCart=(addtoCart)=>{
            return (
                addtoCart && (
                    <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-warning mt-2 mb-2 "
                  >
                    Add to Cart
                  </button>
                )
            )
        }

        const showRemoveFromCart=(removeFromCart)=>{
            return(
            removeFromCart && (
            <button
            onClick={() => {
              removeItemFromCart(product._id)
              setReload(!reload)
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from Cart
          </button>)
            )
        }

        return (
          <div className="card  text-white bg-white border border-warning col-lg-7 ">
            {/* <div className="card-header  lead ">{cartTitle}</div> */}
            <div className="card-body ">
              {getARedirect(redirect)}
              <ImageHelper product={product}/>
              <p className="lead bg-warning font-weight-normal text-wrap rounded">
                {cartDescription}
              </p>
              <div className=' parent'>
              <p className="  child child1 btn btn-warning rounded  btn-sm px-4 mt-3  ">${cartPrice}</p>
              <div className="row child child2">
                <div className="col-12 ">
                  {showAddtoCart(addtoCart)}
                </div>
                <div className="col-12">
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
              </div>
            </div>
          </div>
        );
      };
   
    export default Card; 