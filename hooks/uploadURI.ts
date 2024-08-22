const JWT = process.env.EXPO_PUBLIC_PINATA_JWT!
 
 export const serializePhoto = (img: string) => { 
    let newFile = {
      uri:   img, 
      type: `test/${img.split(".")[1]}`, 
      name: `test.${img.split(".")[1]}`
    }
    return newFile
  }

export const uploadToCloudinary = async (photo: string) => {
    const img = serializePhoto(photo)

    let data = new FormData()
    data.append('file', img)
    data.append('upload_preset', 'ml_default')
    data.append('cloud_name', 'dmhxcjyna')

    try {

      const res = await fetch('https://api.cloudinary.com/v1_1/dmhxcjyna/image/upload', {
        method: 'post',
        body: data
      })

      const image = await res.json()
      return image.secure_url

    
    }
    catch(error: any) {
      throw new Error(error.message)
    }
  }



  export  async function pinJSONToIPFS(name: string, description: string, image: string) {
      
    try {
      const data = JSON.stringify({
        pinataContent: {
          name: name,
          description: description,
          image: image    
        },

        pinataMetadata: {
          name: `${name}.json`
        }
      })
      const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JWT}`,
        },
        body: data,
      });
      const resData = await res.json();
      
      const IpfsHash = resData.IpfsHash
      const uri = `https://ipfs.io/ipfs/${IpfsHash}`
      return uri
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  

  
export const uploadNFTURI = async (name: string, description: string, photo: string) =>{
  
   const image = await uploadToCloudinary(photo)
   const data = await pinJSONToIPFS(name, description, image)
  
  return data

}