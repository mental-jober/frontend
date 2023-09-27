"use client";

/* import GetLayoutModal from "@/components/modal/GetLayoutModal";
import useModal from "../../../hooks/UseModalHook";
import NotFoundMemberModal from "@/components/modal/NotFoundMemberModal";
import ExitPageModal from "@/components/modal/ExitPageModal";
import DeletePermissonModal from "@/components/modal/DeletePermissonModal";
import LogoutModal from "@/components/modal/LogoutModal";
import DeletePageModal from "@/components/modal/DeletePageModal";
import AddLinkModal from "@/components/modal/AddLinkModal"; */
import CollaboratorPage from "@/components/collaboratorPage/CollaboratorPage";

const App = () => {
  /*   const modalConfig = {
    NotFound: useModal(),
    Layout: useModal(),
    Exit: useModal(),
    Delete: useModal(),
    Preview: useModal(),
    Logout: useModal(),
    Link: useModal(),
  }; */

  return (
    <>
      {/*       <div>
        <button onClick={modalConfig.NotFound.onOpenModal}>
          회원 없음 모달
        </button>
        <NotFoundMemberModal
          isOpen={modalConfig.NotFound.isOpen}
          onCloseModal={modalConfig.NotFound.onCloseModal}
        />
      </div>
      <div>
        <button onClick={modalConfig.Layout.onOpenModal}>
          레이아웃 가져오기
        </button>
        <GetLayoutModal
          isOpen={modalConfig.Layout.isOpen}
          onCloseModal={modalConfig.Layout.onCloseModal}
        />
      </div>
      <div>
        <button onClick={modalConfig.Exit.onOpenModal}>페이지 나가기</button>
        <ExitPageModal
          isOpen={modalConfig.Exit.isOpen}
          onCloseModal={modalConfig.Exit.onCloseModal}
        />
      </div>
      <div>
        <button onClick={modalConfig.Delete.onOpenModal}>권한삭제</button>
        <DeletePermissonModal
          isOpen={modalConfig.Delete.isOpen}
          onCloseModal={modalConfig.Delete.onCloseModal}
        />
      </div>

      <div>
        <button onClick={modalConfig.Logout.onOpenModal}>로그아웃</button>
        <LogoutModal
          isOpen={modalConfig.Logout.isOpen}
          onCloseModal={modalConfig.Logout.onCloseModal}
        />
      </div>
      <div>
        <button onClick={modalConfig.Logout.onOpenModal}>페이지삭제</button>
        <DeletePageModal
          isOpen={modalConfig.Logout.isOpen}
          onCloseModal={modalConfig.Logout.onCloseModal}
        />
      </div>
      <div>
        <button onClick={modalConfig.Link.onOpenModal}>링크추가</button>
        <AddLinkModal
          isOpen={modalConfig.Link.isOpen}
          onCloseModal={modalConfig.Link.onCloseModal}
        />
      </div> */}
      <CollaboratorPage />
    </>
  );
};
export default App;
