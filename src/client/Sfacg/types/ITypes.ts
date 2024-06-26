


export interface IaccountInfo {
  userName?: string; // 用户名
  passWord?: string; // 密码
  accountId?: number // 用户ID
  nickName?: string; // 昵称
  avatar?: string; // 头像网址
  vipLevel?: number; // vip等级
  fireMoneyRemain?: number; // 未使用的火币
  couponsRemain?: number; // 未使用的代币
  welfareCoin?: number // 
  cookie?: string // 用户凭证 
}


export interface IexpiredInfo {
  has: number, // 拥有的未过期的代币
  expireDate: string // 过期时间
  isExpired: boolean; // 是否已过期
  cookie?: string // 方便使用
}[]

export interface Itag {
  id: number; // 标签序号
  name: string; // 标签名
}
[];

export interface IcontentInfos {
  title: string; // 标题
  content: string | Buffer; // 内容
}


// 卷列表
export interface IvolumeInfos {
  novelId: number; // 小说ID
  volumeId: number; // 卷ID
  title: string; // 标题
  chapterList: Ichapter[]; // 章节列表
}
[];

// 章节信息
export interface Ichapter {
  chapId: number; // 章节ID
  needFireMoney: number; // 所需火币
  isVip: boolean; // 是否为VIP章节
  ntitle: string; // 新标题
  chapOrder: number,// 该卷中此章节的序号
  volumeId: number; // 卷ID
  has: boolean // 是否已经拥有
  content?: string //内容
}

export interface IadBonusNum {
  taskId: number; // 任务ID
  requireNum: number; // 总看广告领奖次数
  completeNum: number // 已完成看广告领奖次数
}

export type IbookshelfInfos = IsearchInfos

export interface IsearchInfos {
  authorName: string; // 作者名称
  lastUpdateTime: string; // 最后更新时间
  novelCover: string; // 小说封面URL
  novelId: number; // 小说ID
  novelName: string; // 小说名称
}
[];

export interface IregistInfo {
  passWord: string;
  nickName: string;
  countryCode: string;
  phoneNum: string;
  email: string;
  smsAuthCode: string;
  shuMeiId: string;
}




export interface _dbChapters {
  volumeId: number,
  chapId: number,
  ntitle: string,
  novelId: number,
  content: string
}[]

export interface _selectChapters extends Omit<_dbChapters, 'content'> { }[]

export interface _dbNovels {
  novelId: number,
  novelName: string,
  authorName: string,
}[]






