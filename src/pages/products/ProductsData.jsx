import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { productsColumns } from "../../datatablesource";
import { useEffect } from "react";

const ProductsData = () => {
	const [data, setData] = useState([]);

	const handleFetchData = () => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	};

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	useEffect(() => {
		handleFetchData();
	}, []);

	return (
		<div className="datatable">
			<div className="datatableTitle">
				{/* Add New Product */}
				Products
				{/* <Link to="/users/new" className="link">
					Add New
				</Link> */}
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={productsColumns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</div>
	);
};
export default ProductsData;
