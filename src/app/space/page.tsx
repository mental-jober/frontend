"use client";
import useStore from "@/lib/store/store.module";
import { useRouter } from "next/navigation";

const Space = () => {
  const { blocks, setTitleText, setCurrentText, setCurrentIndex } = useStore();
  console.log(blocks);
  const router = useRouter();

  const onCreateText = () => {
    setTitleText("");
    setCurrentText("");
    setCurrentIndex(null);
    router.push("/space/profileEdit/textEdit");
  };

  const onBlockClick = (
    block: string | { title: string; text: string },
    index: number | null,
  ) => {
    const confirmEdit = window.confirm("블록을 수정하겠습니까?");
    if (confirmEdit) {
      if (typeof block === "string") {
        setTitleText(block);
        setCurrentText("");
      } else {
        setTitleText(block.title);
        setCurrentText(block.text);
      }
      setCurrentIndex(index);
      router.push("/space/profileEdit/textEdit");
    }
  };

  return (
    <div>
      <button onClick={onCreateText}>텍스트 생성</button>
      <div>
        {blocks.map((block, index) => (
          <div
            key={index}
            onClick={() => onBlockClick(block, index)}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {typeof block === "string" ? block : block.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Space;
