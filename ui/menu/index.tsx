import { useState, useEffect, useRef } from "react";
import { Dots } from "../icons/styled";
import { DropDown } from "../dropdown/styled";
import { Body } from "../typography";
import { useModal } from "@/lib/hooks";

type DotsMenu = {
  array: [{ title: string; callback: () => void }];
  id: number;
};
export function DotsMenu({ array, id }: DotsMenu) {
  const [optionsVisibility, setOptionsVisibility] = useState(false);
  const { openModal, closeModal } = useModal(
    optionsVisibility,
    setOptionsVisibility
  );
  const menuRef = useRef() as any;

  function toggleVisibility() {
    if (!optionsVisibility) {
      openModal();
    } else {
      closeModal();
    }
  }

  useEffect(() => {
    function handleDocumentClick(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div style={{ position: "relative" }} ref={menuRef}>
      <Dots onClick={toggleVisibility} />
      <DropDown className={optionsVisibility ? "opened" : "closed"} gap="15px">
        {array.map((i: any) => {
          return (
            <Body key={id} style={{ cursor: "pointer" }} onClick={i.callback}>
              {i.title}
            </Body>
          );
        })}
      </DropDown>
    </div>
  );
}
