import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeButton from "../assets/close.svg";
import { api } from "../services/api";
import { ModalStyle } from "./styles";


interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void
};

export function NewPostModal({ isOpen, onRequestClose }: ModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleNewPost(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            description
        }

        console.log(data);

        api.post('/posts', data);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className='react-modal-content'
            >
                <button onClick={onRequestClose} className="react-modal-close">
                    <img src={closeButton} alt="close button" />
                </button>

                <ModalStyle onSubmit={handleNewPost}>
                    <h2>Publicar novo post</h2>
                    <input type="text"
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea name="" id=""
                        onChange={event => setDescription(event.target.value)}
                    ></textarea>
                    <button type="submit">Publicar</button>
                </ModalStyle>

            </Modal>
        </>
    )

}