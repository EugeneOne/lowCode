// 差旅 补单初始化数据
export default {
  sqtOrderType: '', // 商企通订单类型

  bizOrderId: '', // 业务订单号

  bizStatusCode: '', // 业务订单状态编码

  bizStatusDesc: '', // 业务订单状态描述

  payableInvoiceAmount: null, // 应交发票金额（分）

  hotelOrderDetail: {
    // 酒店订单详情

    poiId: null, // 酒店POI ID

    poiName: '', // 酒店POI名称

    refExpenseNo: '', // 合住报销单号

    apportionAmount: '', // 合住人分摊金额
  },
  airlineOrderDetail: {
    // 机票订单详情

    flightNo: '', // 航班号

    cabinName: '', // 舱位

    discount: '', // 折扣

    ticketChangeFee: null, // 改签费（分）

    ticketChangeReason: '', // 改签理由

    ticketRefundFee: null, // 退票费（分）

    ticketRefundReason: '', // 退票原因
  },
  trainOrderDetail: {
    // 火车票订单详情

    ticketChangeReason: '', // 改签理由

    ticketRefundFee: null, // 退票费（分）

    ticketRefundReason: '', // 退票原因

    trainNo: '', // 车次

    seatType: '', // 坐席名称

    superUpAmount: null, // 加速包金额（分）
  },
  carOrderDetail: {
    // 打车订单详情

    actualStartAddress: '', // 出发地

    actualEndAddress: '', // 到达地
  },
};
