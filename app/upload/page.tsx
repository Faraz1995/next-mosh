"use client"
import React, { useState } from 'react'
import { CldUploadWidget,CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string
}
const page = () => {
  const [publicId,setPublicId] = useState('')
  return (
    <>
    {publicId && <CldImage src={publicId} width={270} height={200} alt={'local'}/>}
    <CldUploadWidget
    options={{sources:['local']}}
     uploadPreset='watrdlep' onSuccess={(result,widget)=>{
      console.log(result);
      if(result.event!=='success'){
          return
      }else{
        const info = result.info as CloudinaryResult
        setPublicId(info.public_id)
      }
    }}>
      {({ open }) => {
        console.log(open);
        return (
          <button className='btn btn-primary' onClick={() => open()}>
            upload
          </button>
        )
      }}
    </CldUploadWidget>
    </>
  )
}

export default page
