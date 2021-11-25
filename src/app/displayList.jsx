import { Link } from 'react-router-dom';

export const DisplayList = props => {
    if (!props.products) {
        return <div>Loading...</div>
    }

    return <table className="table table-condensed table-striped">
        <tbody>
            {
                props.products.map(product => <tr key={product.id}>
                    <td>{ product.name }</td>
                </tr>)
            }
        </tbody>
    </table>
};