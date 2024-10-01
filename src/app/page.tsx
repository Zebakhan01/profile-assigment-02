import Image from 'next/image'; 


export default function Homepage() {
  return (
    <div className="profile-container">
      
        
       <h1 >Description </h1>
       <br></br>

      < p >Im Zeba Khan, a curious and passionate individual who loves exploring new ideas and sharing knowledge.
          I enjoy engaging in meaningful conversations, whether it’s about technology, art, or personal development. 
          My goal is to inspire and connect with others through
          dialogue and creativity!

        </p>
        <br></br>

        <div className="description">
      <div className='profileimage'>
        
            <Image
                src={"/Profilepicture.jpeg"}
                alt="Profile"
                width={100} 
                height={100} 

            
            />
            
        </div>
    </div>
      </div>
  );
}

