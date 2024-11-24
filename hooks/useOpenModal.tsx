import React, { useEffect, useState } from "react";

export default function useOpenModal() {
  // Состояние, чтоблы проверить, что мы на клиенте,
  // чтобы можно было использовать createPortal
  const [isClient, setIsClient] = useState<boolean>(false);

  // Состояние, котнролирующее нахождение модального окна в DOM
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const handleShowModal = () => {
    setIsModalShown((p) => !p);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return [isClient, isModalShown, handleShowModal] as [
    isClient: boolean,
    isModalShown: boolean,
    handleShowModal: () => void
  ];
}
