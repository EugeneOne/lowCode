import orderDetail from './orderDetail'; // 差旅订单信息
import extOrderDetail from './extOrderDetail'; // 差旅补单信息

export default {
  budgetExpenseCode: '', // 预算费用类别编码

  budgetExpenseName: '', // 预算费用类别名称

  expenseAmount: null, // 费用金额（分）

  repayAmount: null, // 偿还金额（分）

  payType: 1, // 枚举: 1,2

  beginDate: null, // 费用发生起始时间（ms时间戳）

  endDate: null, // 费用发生结束时间（ms时间戳）

  expenseDesc: '', // 费用说明

  itemSource: null, // 费用来源【招待】枚举: 1,2,3 ; 1-手动添加；2-订单手动导入；3-订单自动导入；

  extBizNo: '', // 扩展业务编号（如itemSource为2或3，extBizNo不可为空）【招待】

  invoiceCount: 1, // 发票张数

  departureCityId: '', // 出发城市LocationId

  departureCityName: '', // 出发城市名称

  arriveCityId: '', // 到达城市LocationId

  arriveCityName: '', // 到达城市名称

  departureLocationId: '', // 出发城市id (差旅)

  departureLocationName: '', // 出发城市名称 (差旅)

  arriveLocationId: '', // 到达城市id（差旅）

  arriveLocationName: '', // 到达城市名称（差旅）

  joinDate: '', // 入职日期（员工福利）

  applyCount: null, // 申请次数（员工福利）

  familyRelations: '', // 家属关系（员工福利）

  familyName: '', // 家属姓名（员工福利）

  invoice: {}, // 发票信息[招待]

  itemCategory: null, // 延时-5 餐 4 车

  trips: [], // 延时-行程信息,

  files: [], // 延时【招待】-发票行程单附件

  poiId: null, // 餐厅poi【招待特有】

  poiName: '', // 餐厅名称【招待特有】

  reqType: '', // 1 根据餐厅名称搜索  2 根据发票信息搜索【招待特有】

  guestsDesc: '', // 招待嘉宾描述【招待特有】

  amountAvg: '', // 平均招待费用【招待特有】

  mtCityId: '', // 美团城市ID【招待特有】

  cityName: '', // 城市名称【招待特有】

  peopleCount: 1, // 参与人数【招待特有】

  planRepayDate: '', // 计划还款时间（备用金）

  orderDetail, // 差旅订单信息

  extOrderDetail, // 差旅补单信息

  itemTagList: [], // 费用明细标签列表
};
