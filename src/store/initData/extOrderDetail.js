export default {
  reservationChannelCode: '', // 预订渠道code

  reservationChannel: '', // 预订渠道

  offlineReservationReasonCode: '', // 不在线预订原因编码

  offlineReservationReason: '', // 不在线预订原因

  // 酒店补单详情
  hotelExtOrderDetail: {
    poiId: null, // 酒店POI ID

    poiName: '', // 酒店POI 名称

    refExpenseNo: null, // 合住报销单号

    apportionAmount: '', // 合住人分摊金额
  },

  // 机票补单详情
  airlineExtOrderDetail: {
    scenario: '', // 场景

    flightNo: '', // 航班号

    cabinName: '', // 舱位

    discount: '', // 折扣
  },

  // 火车票补单详情
  trainExtOrderDetail: {
    scenario: null, // 场景

    trainNo: '', // 车次

    seatType: '', // 坐席名称
  },
};
