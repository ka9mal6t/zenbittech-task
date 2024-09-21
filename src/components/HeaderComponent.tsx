import {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Header.css'


interface IHeaderComponent{
    auth: boolean | undefined;
    logOut: () => void;
}
const HeaderComponent: FC<IHeaderComponent> = ({auth, logOut}) => {

  const navigate = useNavigate();
  
  return (
    <header>
        <div className='header-btns'>
            {auth === true?
             <button className='btn' onClick={logOut}>Log Out</button>
            :
            (auth === false? 
                <div>
                    <button className='btn bordered' onClick={()=>{navigate('/login')}}>Log In</button>
                    <button className='btn'>Sing Up</button>
                </div>
             :
             null
            )
            }   
       </div>
    </header>
    

  );
};

export default HeaderComponent;
