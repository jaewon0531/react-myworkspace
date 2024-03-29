import TablePagination from "@material-ui/core/TablePagination";
import { useDispatch, useSelector } from "react-redux";

const TodoPagination = () => {
  const { totalElements, page, size, keyword } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    dispatch({
      type: "FETCH_TODOLIST_PAGING",
      payload: { page: newPage, size },
    });
  };

  const handleChangeRowsPerPage = (event) => {
    const newSize = parseInt(event.target.value);

    dispatch({
      type: "FETCH_TODOLIST_PAGING",
      payload: { page: 0, size: newSize },
    });
  };

  return (
    <TablePagination
      component="div"
      count={totalElements}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={size}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      keyword={keyword}
    />
  );
};

export default TodoPagination;