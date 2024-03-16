import css from "./TransactionItem.module.scss";

function TransactionItem({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id, type, amount, currency } = item;
        return (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        );
      })}
    </>
  );
}

export default TransactionItem;
