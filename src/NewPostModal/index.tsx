import Modal from "react-modal";
import closeButton from "../assets/close.png";
import { ModalStyle } from "./styles";


interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void
};

export function NewPostModal({ isOpen, onRequestClose }: ModalProps) {

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                <ModalStyle>
                    <h2>Publicar novo post</h2>
                    <button onClick={onRequestClose}>
                        <img src={closeButton} alt="close button" />
                    </button>
                    <input type="text" />
                    <textarea name="" id=""></textarea>
                    <button type="submit">Publicar</button>
                </ModalStyle>

            </Modal>
        </>
    )

}