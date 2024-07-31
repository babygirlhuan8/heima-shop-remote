/**
* 返回信息
*/
export interface PrepayOrder {
  /**
   * 商品集合
   */
  goods: Good[];
  /**
   * 结算信息
   */
  summary: Summary;
  /**
   * 用户地址列表
   */
  userAddresses: UserAddress[];
}

/**
* 商品信息
*/
export interface Good {
  /**
   * 属性文字，例如“颜色:瓷白色 尺寸：8寸”
   */
  attrsText: string;
  /**
   * 数量
   */
  count: number;
  /**
   * id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 实付单价
   */
  payPrice: number;
  /**
   * 图片
   */
  picture: string;
  /**
   * 原单价
   */
  price: number;
  /**
   * SKUID
   */
  skuId: string;
  /**
   * 实付价格小计
   */
  totalPayPrice: number;
  /**
   * 小计总价
   */
  totalPrice: number;
  [property: string]: any;
}

/**
* 结算信息
*/
export interface Summary {
  /**
   * 折扣总计
   */
  discountPrice: number;
  /**
   * 商品件数
   */
  goodsCount: number;
  /**
   * 邮费
   */
  postFee: number;
  /**
   * 应付总计
   */
  totalPayPrice: number;
  /**
   * 价格总计
   */
  totalPrice: number;
}

/**
* 地址信息
*/
export interface UserAddress {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 完整行政区
   */
  fullLocation: string;
  /**
   * id
   */
  id: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 邮编
   */
  postalCode: string;
  /**
   * 省份编码
   */
  provinceCode: string;
  /**
   * 收货人
   */
  receiver: string;
}