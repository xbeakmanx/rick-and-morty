import { Button } from "components/";

export default function ButtonsPagination({
  data,
  setData,
  dataPages,
  setDataPages,
}) {
  return (
    <>
      <div className="flex justify-between">
        <Button
          disabled={
            dataPages.currentPage === 1 && dataPages.currentPagePagination === 1
              ? true
              : false
          }
          onClick={
            !data.activePreviousPage
              ? () => {
                  setData({
                    ...data,
                    activeNextPage: false,
                    activePreviousPage: true,
                  });
                  setDataPages({
                    currentPagePagination: 2,
                    currentPage: dataPages.currentPage - 1,
                  });
                }
              : () => {
                  setData({
                    ...data,
                    activeNextPage: true,
                    activePreviousPage: false,
                  });
                  setDataPages({
                    currentPagePagination: 1,
                    currentPage: dataPages.currentPage,
                  });
                }
          }
        >
          Atrás
        </Button>
        <Button
          disabled={data.totalPages === dataPages.currentPage ? true : false}
          onClick={
            data.activeNextPage
              ? () => {
                  setData({
                    ...data,
                    activeNextPage: false,
                    activePreviousPage: true,
                  });
                  setDataPages({
                    currentPagePagination: 2,
                    currentPage: dataPages.currentPage,
                  });
                }
              : () => {
                  setData({
                    ...data,
                    activeNextPage: true,
                    activePreviousPage: false,
                  });
                  setDataPages({
                    currentPagePagination: 1,
                    currentPage: dataPages.currentPage + 1,
                  });
                }
          }
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}
