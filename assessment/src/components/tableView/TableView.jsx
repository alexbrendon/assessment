
import './tableView.css';



const TableView = (props) => {
    
    return (
        <div className="box tableView">
            <table>
                <thead>
                    <tr>
                        <th>Week Ending</th>
                        <th>Retail Sales</th>
                        <th>Wholesale Sales</th>
                        <th>Units Sold</th>
                        <th>Retailer Margin</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sales.map((sale, i) => (
                        <tr key={i}>
                            <td>{sale.weekEnding}</td>
                            <td>${sale.retailSales.toLocaleString()}</td>
                            <td>${sale.wholesaleSales.toLocaleString()}</td>
                            <td>{sale.unitsSold}</td>
                            <td>${sale.retailerMargin.toLocaleString()}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    );
};

export default TableView;
