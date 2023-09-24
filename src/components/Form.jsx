import './style.css';

export const Form = () => {
    
   
    return (
            <>
                <h2 >Form service</h2>
                    <form id='form' className='flex flex-col' >
                        <input type="text"  placeholder='username' />
                        <input type="text" placeholder='surname' />
                        <input type="text" name="email"  placeholder='email'/>                    
                        <input type="telNo" placeholder='mobile number' />      
                        <input type="submit" value="Отправить" className='btn'  />
                    </form>        
            </>
        )
    }

