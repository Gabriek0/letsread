import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeButton from "../assets/close.svg";
import { PostContext } from "../PostContext";
import { api } from "../services/api";
import { ModalStyle } from "./styles";


interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void
};

export function NewPostModal({ isOpen, onRequestClose }: ModalProps) {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleNewPost(event: FormEvent) {

        event.preventDefault();

        const data = {
            image,
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
                        onChange={event => setImage(event.target.value)}
                        placeholder="Imagem"
                    />
                    <input type="text"
                        onChange={event => setTitle(event.target.value)}
                        placeholder="Título"
                    />
                    <textarea name="" id=""
                        onChange={event => setDescription(event.target.value)}
                        placeholder="Descrição"
                    ></textarea>
                    <button type="submit">Publicar</button>
                </ModalStyle>

            </Modal>
        </>
    )

}