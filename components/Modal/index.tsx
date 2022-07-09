import { useEffect } from 'react'
import { ModalProps } from '../../types';

const Modal = ({openState, children}: ModalProps) => {
	const [ open, setOpen ] = openState

	useEffect(() => {
		document.addEventListener('keydown', (event) => {
			if (event.code === 'Escape') {
				setOpen(false)
			}
		})
	}, [setOpen])

	useEffect(() => {
		open ?
			document.querySelector('body')?.classList.add('modal-open') :
			document.querySelector('body')?.classList.remove('modal-open')
	}, [open])

	return open ?
		<div id="modal-wrapper">
				<div id="modal-overlay" onClick={() => setOpen(false)}/>
				<div id="modal">
					{children}
				</div>
		</div> : <></>
}

export default Modal
