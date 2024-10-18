import { useStore } from '@nanostores/react';
import { currentpage } from '../../store';

export default function CartButton(page) {
  // read the store value with the `useStore` hook
  const $currentpage = useStore(currentpage);
  // write to the imported store using `.set`
  return (
    <button type='button' onClick={() => currentpage.set(page)}>
        
    </button>
  )
}