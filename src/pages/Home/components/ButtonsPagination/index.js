import { Button } from "components/";

export default function ButtonsPagination({
  data,
  setData,
  dataPages,
  setDataPages,
  totalPages,
  currentPaginator,
}) {
  if (!data.characters) return null;
  return (
    <>
      <div className="buttonsPagination">
        {dataPages.currentPage === 1 &&
        dataPages.currentPagePagination === 1 ? (
          <div className="w-16" />
        ) : (
          <Button
            onClick={
              !data.activePreviousPage
                ? () => {
                    setData({
                      ...data,
                      activeNextPage: false,
                      activePreviousPage: true,
                      currentPaginator: currentPaginator - 1,
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
                      currentPaginator: currentPaginator - 1,
                    });
                    setDataPages({
                      currentPagePagination: 1,
                      currentPage: dataPages.currentPage,
                    });
                  }
            }
          >
            Back
          </Button>
        )}
        <div className="flex items-center font-semibold">
          {currentPaginator}/{totalPages || 1}
        </div>
        {data.totalPages === dataPages.currentPage ? null : (
          <Button
            onClick={
              data.activeNextPage
                ? () => {
                    setData({
                      ...data,
                      activeNextPage: false,
                      activePreviousPage: true,
                      currentPaginator: currentPaginator + 1,
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
                      currentPaginator: currentPaginator + 1,
                    });
                    setDataPages({
                      currentPagePagination: 1,
                      currentPage: dataPages.currentPage + 1,
                    });
                  }
            }
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
}
