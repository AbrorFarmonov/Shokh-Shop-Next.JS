'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import CustomImage from '@/app/components/CustomImage';
import ReactStars from 'react-stars';

export default function ProductDetailedPage() {
  const [loading, setLoading] = useState(true);
  const [open, setIsOpen] = useState(true);
  const [product, setProduct] = useState();
  const { id } = useParams()
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [id])
  async function getData() {
    setLoading(true)
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    setProduct(data)
    setLoading(false)
  }

  return (
    <Dialog open={open} onClose={() => {
      setIsOpen(false)
      router.back()
    }} className={'relative z-50'}>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <Dialog.Panel className={'mx-auto max-w-3xl rounded bg-white p-10'}>
            {
              loading ? (
                <div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin'></div>
              ) : (
                <div className='flex gap-x-8 min-h-96'>
                  {product?.image && (
                    <div className='relative w-72 h-96 hidden md:inline'>
                      <CustomImage product={product} fill />
                    </div>
                  )}
                  <div className='flex-1 flex flex-col'>
                    <div className='flex-1'>
                      <h4 className='font-semibold'>
                        {product?.title}
                      </h4>
                      <p className='font-medium text-sm'>${product?.price}</p>
                      <div className='flex-row flex justify-between mt-4'>
                        <div>
                            <ReactStars value={product.rating.rate} edit={false} />
                              <p>{product?.rating.rate}</p>
                        </div>
                        <a href="#">{product?.rating.count} commments...</a>
                      </div>
                        <p className='mt-6 font-sans'>{product?.description}</p>
                    </div>
                    <div className='flex flex-col gap-y-3 mt-6'>
                        <button className='bg-blue-950 border border-transparent text-white hover:bg-white flex justify-center items-center w-5/6  mx-auto hover:text-slate-900 py-3 rounded-lg transition-all duration-500 hover:border border-blue-950'>Add to cart</button>
                        <button onClick={() => window.location.reload()} className='bg-white text-slate-900 border border-blue-950 hover:bg-blue-950 flex justify-center items-center w-5/6  mx-auto hover:text-white py-3 rounded-lg transition-all duration-500'>View full details</button>
                    </div>
                  </div>
                </div>
              )
            }
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
