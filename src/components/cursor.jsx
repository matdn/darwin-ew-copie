import { useEffect } from 'react';
import '../style/style.css';
function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', e => {
            window.requestAnimationFrame(() => {
                cursor.style.top = `${ e.clientY - cursor.offsetHeight/2 }px`;
                cursor.style.left = `${ e.clientX - cursor.offsetWidth/2 }px`;
            });
        });
    })
  return (
    <div className="cursor">
       
    </div>
  );
}

export default Cursor;