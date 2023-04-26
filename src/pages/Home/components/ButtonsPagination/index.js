import { Button } from "components/";

export default function ButtonsPagination({
  data,
  setData,
  dataPages,
  setDataPages,
}) {
  return (
    <>
      <div className="buttonsPagination">
        {dataPages.currentPage === 1 &&
        dataPages.currentPagePagination === 1 ? (
          <div></div>
        ) : (
          <Button
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
            Back
          </Button>
        )}
        {data.totalPages === dataPages.currentPage ? null : (
          <Button
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
            Next
          </Button>
        )}
      </div>
    </>
  );
}
