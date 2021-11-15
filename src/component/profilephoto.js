import react from 'react';
import img1 from './images/img1.jpg'


const photoStyle = {
    border: "2px solid black",
    borderRadius: "50%"
}


 function ProfilePhoto (){

        return(
            <div>
            <img src={img1} alt=""/>
          </div>
        )
}

export default ProfilePhoto
