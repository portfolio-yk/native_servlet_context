const requestBootpay = () => {
  return {
    redirectPage: "TravelBuyResult",
    code: "BOOTPAY_SUCCESS",
    message: "",
  };
};

const requestRefund = () => {
  return {
    redirectPage: "",
    code: "BOOTPAY_SUCCESS",
    message: "",
  };
};

export default {
  requestBootpay,
  requestRefund,
};
