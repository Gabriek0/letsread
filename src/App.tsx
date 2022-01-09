import { useState } from "react";
import { Header } from "./Header";
import { NewPostModal } from "./NewPostModal";
import { Post } from "./Posts";
import { GlobalStyle } from "./styles/global";


export function App() {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  function handleOpenNewPostModal() {
    setIsNewPostModalOpen(true);
  }

  function handleCloseNewPostModal() {
    setIsNewPostModalOpen(false);
  }

  return (
    <>
      <Header openNewPostModal={handleOpenNewPostModal} />
      <Post />
      <NewPostModal
        isOpen={isNewPostModalOpen}
        onRequestClose={handleCloseNewPostModal}
      />
      <GlobalStyle />
    </>
  );
}
