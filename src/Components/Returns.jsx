import React from 'react'
import { arabic, arabic1, eng, eng1 } from './Data'

const Returns = () => {
    return (
        <div>
            <section class="bg-[#00000073] dark:bg-gray-900 h-[15rem] lg:h-[20rem] flex justify-center items-center">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <p class="mb-2 satisfy text-lg  font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">explore</p>
                    <h1 class="mb-4 text-xl  lg:text-3xl font-bold tracking-tight leading-none text-white  dark:text-white">Returns & Refunds Policy</h1>
                </div>
            </section>

            <div className='mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24'>
                <div>
                    <h1 className='text-gray-600 text-lg font-semibold'>سياسة الاسترجاع:</h1>
                    {
                        arabic.map((a) => (
                            <p className='mt-5  text-gray-500'>{a.para}</p>
                        ))
                    }
                </div>

                <div className='mt-8'>
                    <h1 className='text-gray-600 text-lg font-semibold'>الاسترداد:</h1>
                    <p className='  text-gray-500 mb-3'>*قد يستغرق العمل على طلب الإرجاع 6 أيام كحد أقصى بمجرد استلام المنتجات المرتجعة. وفور قبول</p>
                    <p className=' text-gray-500'>طلب الإرجاع، سيتم رد المبلغ بإستخدام طريقة الدفع الأصلية بإستثناء تكاليف التوصيل. قد تستغرق عملية الاسترداد 14 يومًا كحد أقصى لتظهر في حسابك، حسب مزوّد الدفع الخاص بك.</p>
                </div>

                <div className='mt-8'>
                    <h1 className='text-gray-600 text-lg font-semibold'>سياسة الاسترجاع:</h1>
                    {
                        arabic1.map((a) => (
                            <p className='mt-5  text-gray-500'>{a.para1}</p>
                        ))
                    }
                </div>

                <div className='mt-8'>
                    <h1 className='text-gray-600 text-lg font-semibold'>القطع المخصصة حسب الطلب:</h1>
                    <p className='mt-5  text-gray-500'>نظرًا لطبيعة القطع المخصصة حسب الطلب، قد تتغير مدة تنفيذ التصميم الذي اخترته بنفسك. يمكنك معرفة معلومات أكثر حول مدة تنفيذ التصميم من الصفحة الخاصة بالمنتج نفسه.</p>
                </div>

                <div className='mt-8'>
                    <h1 className='text-gray-600 text-xl font-semibold'>Return policy:</h1>
                    {
                        eng.map((a) => (
                            <p className='mt-5 text-lg text-gray-500'>{a.para}</p>
                        ))
                    }
                </div>


                <div className='mt-8'>
                    <h1 className='text-gray-600 text-xl font-semibold'>Refund:</h1>
                    <p className='  text-gray-500 text-lg mt-3'>* It may take up to 6 days to process the return once we receive the returned products. Once the return request is accepted, the amount will be refunded using the original payment method, excluding delivery costs. The refund may take up to 14 days to appear in your account, depending on your payment provider.</p>
                </div>


                <div className='mt-8'>
                    <h1 className='text-gray-600 text-xl font-semibold'>Shipping and delivery policy:</h1>
                    {
                        eng1.map((a) => (
                            <p className='mt-5 text-lg text-gray-500'>{a.para}</p>
                        ))
                    }
                </div>

                <div className='mt-8'>
                    <h1 className='text-gray-600 text-lg font-semibold'>Customized Pieces:</h1>
                    <p className='mt-5  text-gray-500'>*Due to the nature of customized pieces, the estimated time for your chosen design may change. You can find out more information about the design implementation period from the page of the product itself.</p>
                </div>

            </div>
        </div>
    )
}

export default Returns
