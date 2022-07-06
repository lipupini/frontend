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
			document.querySelector('body')?.classList.add('overflow-hidden') :
			document.querySelector('body')?.classList.remove('overflow-hidden')
	}, [open])

	return open ?
		<div id="modal-wrapper">
				<div id="modal-overlay" className="bg-black opacity-[.92] absolute top-0 right-0 bottom-0 left-0" onClick={() => setOpen(false)}/>
				<div id="modal" className="bg-[#27272A] p-4 md:p-10 absolute top-[50vh] left-[50vw] translate-x-[-50%] border-2 border-color-[#F4F4F4] min-w-[320px]">
					{children}
				</div>
		</div> : <></>
}

export default Modal
