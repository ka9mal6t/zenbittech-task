import {FC} from 'react';
import './css/Header.css'


interface IHeaderComponent{
    auth: boolean | undefined;
    logOut: () => void;
}
const HeaderComponent: FC<IHeaderComponent> = ({auth, logOut}) => {

   
  return (
    <header>
        <div className='header-btns'>
            {auth === true?
             <button className='btn' onClick={logOut}>Log Out</button>
            :
            (auth === false? 
                <div>
                    <button className='btn bordered'>Log In</button>
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
