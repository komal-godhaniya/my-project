import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, fetchApi, removeQuantity } from '../features/ApiSlice'
import { Link } from 'react-router-dom'
import Footer from '../redux/footer'
import Header from '../redux/Header'

export default function Muesli() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())
  }, [])

  const record = useSelector((state) => {
    return state.apiKey
  })

  const Product = record.data.filter((item) => item.category === 'muesli')

  const addItem = (id) => {
    dispatch(addQuantity(id))
  }

  const removeItem = (id) => {
    dispatch(removeQuantity(id))
  }

  return (
    <>
      <Header />
      <div className='home d-flex mt-4'>
        <div className="side_nav border border-1">

          <Link to={"/"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Milk</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Bread"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Bread & Pav</h5>
              </div>
            </div>
          </Link>


          <div className="item now w-100 d-flex justify-content-betweeb p-3 ">
            <div id="item_img" className='border rounded'>
              <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="" />
            </div>
            <div id="item_text">
              <h5 className='ms-3 mt-3 fs-6'>Muesli & Granola</h5>
            </div>
          </div>

          <Link to={"/Paneer"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Paneer & Tofu</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Curd"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/123_1643384414434.png" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Curd & Yogurt</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Butter"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Butter & More</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Cheese"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/icon/2253_1694001802103.png" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Cheese</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Bar"}>
            <div className="item w-100 d-flex justify-content-betweeb p-3 ">
              <div id="item_img" className='border rounded'>
                <img className='img-fluid' src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="" />
              </div>
              <div id="item_text">
                <h5 className='ms-3 mt-3 fs-6'>Energy Bar</h5>
              </div>
            </div>
          </Link>

        </div>


        <div className='main-pr p-3 d-flex justify-content-around flex-wrap'>
          {
            Product &&
            Product.map((e, i) => (
              <div key={i} className='main-div rounded'>
                <center>
                  <div className="main-img">
                    <img src={e.image} alt="" />
                  </div>
                </center>
                <div className='mx-2 mt-3'>
                  <h2 className='fs-6 fw-bolder lh-base'>{e.title}</h2>
                  <h6 className='mt-3'>{e.info}</h6>
                  <div className='d-flex justify-content-between mt-3'>
                    <h5 className='fs-6'>₹{e.price}</h5>
                    <div>
                      {
                        e.quantity === 0
                          ? (
                            <button className='simple_add btn btn-success' onClick={() => addItem(e.id)}>
                              ADD
                            </button>
                          )
                          : (
                            <div className='diff_add btn btn-success '>
                              <button className='text-white mx-1' onClick={() => removeItem(e.id)}><i class="ri-subtract-line"></i></button>
                              {e.quantity}
                              <button className='text-white mx-1' onClick={() => addItem(e.id)}><i class="ri-add-line"></i></button>
                            </div>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

