import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import { reqSellerById, reqData } from '../services/apiRequest';

export default function HeaderDetails() {
  const [dataSales, setDataSales] = useState({});
  const [dataSeller, setDataSeller] = useState({});

  const dataTestSaleId = 'customer_order_details__element-order-details-label-order-id';
  const dataTestName = 'customer_order_details__element-order-details-label-seller-name';
  const dataTestDate = 'customer_order_details__element-order-details-label-order-date';
  const dTStatus = 'customer_order_details__element-order-details-label-delivery-status';
  const dataTestButton = 'customer_order_details__button-delivery-check';

  const location = useLocation();

  useEffect(() => {
    const arrayLocation = location.pathname.split('/');
    const id = arrayLocation[3];
    const getSaleAndSeller = async () => {
      const sale = await reqSellerById(`/sale/${id}`);
      setDataSales(sale);
      const seller = await reqData(`/user/${sale.sellerId}`);
      setDataSeller(seller);
    };
    getSaleAndSeller();
  }, [location.pathname]);

  return (
    <table>
      <tbody>
        <td data-testid={ `${dataTestSaleId}` }>{dataSales.id}</td>
        <td data-testid={ `${dataTestName}` }>{dataSeller.name}</td>
        <td data-testid={ `${dataTestDate}` }>
          {moment(dataSales.saleDate).format('DD/MM/YYYY')}
        </td>
        <td data-testid={ `${dTStatus}${dataSales[0]}` }>{dataSales.status}</td>
        <td>
          <button
            disabled="true"
            data-testid={ `${dataTestButton}` }
            type="button"
          >
            Marcar como entregue
          </button>
        </td>
      </tbody>
    </table>
  );
}

HeaderDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;
